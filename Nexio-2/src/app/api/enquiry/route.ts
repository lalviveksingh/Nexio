import { NextResponse } from "next/server";
import { normaliseEnquiry, validateEnquiry, type EnquiryResponse } from "@/lib/enquiry";
import { getMailConfig, sendEnquiryEmail } from "@/lib/mailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Minimal in-memory rate limit (per server instance). Use a shared store in production if needed. */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

const json = (body: EnquiryResponse, status: number) => NextResponse.json(body, { status });

export async function POST(request: Request) {
  const length = Number(request.headers.get("content-length") ?? 0);
  if (length > 20_000) return json({ ok: false, code: "BAD_REQUEST" }, 413);

  let raw: Record<string, unknown>;
  try {
    raw = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ ok: false, code: "BAD_REQUEST" }, 400);
  }

  // Anti-spam: hidden honeypot field must stay empty, and real people take more than ~3s to fill the form.
  const honeypot = typeof raw.website === "string" ? raw.website : "";
  const startedAt = Number(raw.startedAt);
  if (honeypot || !Number.isFinite(startedAt) || Date.now() - startedAt < 3000) {
    return json({ ok: false, code: "BAD_REQUEST" }, 400);
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (rateLimited(ip)) return json({ ok: false, code: "RATE_LIMITED" }, 429);

  const data = normaliseEnquiry(raw);
  const errors = validateEnquiry(data);
  if (Object.keys(errors).length) return json({ ok: false, code: "VALIDATION", errors }, 422);

  // Honest state: never pretend an email was sent when delivery is not configured.
  if (!getMailConfig()) return json({ ok: false, code: "EMAIL_NOT_CONFIGURED" }, 503);

  try {
    await sendEnquiryEmail(data);
    return json({ ok: true }, 200);
  } catch (error) {
    console.error("[enquiry] email delivery failed:", error instanceof Error ? error.message : error);
    return json({ ok: false, code: "SEND_FAILED" }, 502);
  }
}
