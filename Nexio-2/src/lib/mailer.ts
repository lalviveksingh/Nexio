/**
 * Server-side email delivery. Imported only by the API route — never by client code.
 * Credentials are read from environment variables at request time; nothing is hard-coded.
 */
import nodemailer from "nodemailer";
import type { EnquiryInput } from "./enquiry";

function env(name: string) {
  const v = process.env[name]?.trim();
  return v ? v : null;
}

export function getMailConfig() {
  const host = env("SMTP_HOST");
  const user = env("SMTP_USER");
  const pass = env("SMTP_PASS");
  const to = env("ENQUIRY_TO_EMAIL");
  const from = env("ENQUIRY_FROM_EMAIL") ?? user;
  if (!host || !user || !pass || !to || !from) return null;
  const port = Number(env("SMTP_PORT") ?? 587);
  const secure = (env("SMTP_SECURE") ?? (port === 465 ? "true" : "false")) === "true";
  return { host, port, secure, user, pass, to, from };
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function sendEnquiryEmail(data: EnquiryInput) {
  const cfg = getMailConfig();
  if (!cfg) throw new Error("EMAIL_NOT_CONFIGURED");

  const transporter = nodemailer.createTransport({
    host: cfg.host,
    port: cfg.port,
    secure: cfg.secure,
    auth: { user: cfg.user, pass: cfg.pass },
  });

  const rows: [string, string][] = [
    ["Full name", data.fullName],
    ["School / organisation", data.organisation || "—"],
    ["Email", data.email],
    ["Phone", data.phone],
    ["City", data.city || "—"],
    ["Interested in", data.interest],
    ["Panels / quantity", data.quantity || "—"],
  ];

  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nMessage / requirement:\n${data.message}`;
  const html = `<h2 style="font-family:sans-serif">New website enquiry</h2>
<table style="font-family:sans-serif;border-collapse:collapse">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#555">${escapeHtml(k)}</td><td style="padding:6px 0"><strong>${escapeHtml(v)}</strong></td></tr>`,
    )
    .join("")}</table>
<p style="font-family:sans-serif;color:#555;margin-top:16px">Message / requirement:</p>
<p style="font-family:sans-serif;white-space:pre-wrap">${escapeHtml(data.message)}</p>`;

  await transporter.sendMail({
    from: cfg.from,
    to: cfg.to,
    replyTo: data.email,
    subject: `Website enquiry: ${data.interest} — ${data.fullName}`,
    text,
    html,
  });
}
