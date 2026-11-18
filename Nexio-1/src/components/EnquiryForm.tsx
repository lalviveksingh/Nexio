"use client";

import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { AlertCircle, CheckCircle2, Info, Loader2, MessageCircle } from "lucide-react";
import {
  INTEREST_OPTIONS,
  emptyEnquiry,
  normaliseEnquiry,
  validateEnquiry,
  type EnquiryField,
  type EnquiryInput,
  type EnquiryResponse,
  type FieldErrors,
} from "@/lib/enquiry";
import { whatsappHref } from "@/config/site";

/** True only in the static GitHub Pages demo build (see scripts/build-pages.mjs). */
const DEMO_MODE = process.env.NEXT_PUBLIC_DEMO_MODE === "true";

type Status = "idle" | "submitting" | "success" | "not-configured" | "error" | "rate-limited";

const labels: Record<EnquiryField, string> = {
  fullName: "Full name",
  organisation: "School / organisation",
  email: "Business email",
  phone: "Phone number",
  city: "City",
  interest: "Interested in",
  quantity: "Number of panels / quantity",
  message: "Message / requirement",
};

const order: EnquiryField[] = ["fullName", "organisation", "email", "phone", "city", "interest", "quantity", "message"];

export function EnquiryForm() {
  const uid = useId();
  const [values, setValues] = useState<EnquiryInput>(emptyEnquiry);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<EnquiryField, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [honeypot, setHoneypot] = useState("");
  const startedAt = useRef<number>(0);
  const summaryRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
    // Pre-select "Interested in" from ?interest=… (set by catalogue enquiry links).
    const interest = new URLSearchParams(window.location.search).get("interest");
    if (interest && (INTEREST_OPTIONS as readonly string[]).includes(interest)) {
      setValues((v) => ({ ...v, interest: interest as EnquiryInput["interest"] }));
    }
  }, []);

  const id = (f: EnquiryField) => `${uid}-${f}`;

  const update = (field: EnquiryField, value: string) => {
    const next = { ...values, [field]: value };
    setValues(next);
    if (touched[field] || errors[field]) {
      const fieldError = validateEnquiry(normaliseEnquiry(next))[field];
      setErrors((e) => ({ ...e, [field]: fieldError }));
    }
  };

  const blur = (field: EnquiryField) => {
    setTouched((t) => ({ ...t, [field]: true }));
    const fieldError = validateEnquiry(normaliseEnquiry(values))[field];
    setErrors((e) => ({ ...e, [field]: fieldError }));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    const data = normaliseEnquiry(values);
    const found = validateEnquiry(data);
    setErrors(found);
    setTouched(Object.fromEntries(order.map((f) => [f, true])));
    if (Object.keys(found).length) {
      setStatus("idle");
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    setStatus("submitting");
    if (DEMO_MODE) {
      // Static demo (GitHub Pages): there is no server to send email. Be honest about it.
      await new Promise((r) => setTimeout(r, 500));
      setStatus("not-configured");
      requestAnimationFrame(() => statusRef.current?.focus());
      return;
    }
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, website: honeypot, startedAt: startedAt.current }),
      });
      const body = (await res.json().catch(() => ({ ok: false, code: "SEND_FAILED" }))) as EnquiryResponse;
      if (body.ok) {
        setStatus("success");
        setValues(emptyEnquiry);
        setTouched({});
      } else if (body.code === "VALIDATION") {
        setErrors(body.errors);
        setStatus("idle");
        requestAnimationFrame(() => summaryRef.current?.focus());
        return;
      } else if (body.code === "EMAIL_NOT_CONFIGURED") {
        setStatus("not-configured");
      } else if (body.code === "RATE_LIMITED") {
        setStatus("rate-limited");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  const errorList = order.filter((f) => errors[f]);
  const showSummary = errorList.length > 0 && Object.keys(touched).length >= order.length;

  const waMessage = `Hello NEXIO, I'd like to enquire about: ${values.interest || "your solutions"}.${values.message ? `\n\n${values.message}` : ""}`;
  const wa = whatsappHref(waMessage);

  const field = (f: EnquiryField, required: boolean, input: ReactNode, hint?: string) => (
    <div className={`field field-${f} ${errors[f] ? "has-error" : ""}`}>
      <label htmlFor={id(f)}>
        {labels[f]}
        {required ? (
          <span className="req" aria-hidden="true">
            {" "}
            *
          </span>
        ) : (
          <span className="optional"> (optional)</span>
        )}
      </label>
      {input}
      {hint && !errors[f] && (
        <p className="field-hint" id={`${id(f)}-hint`}>
          {hint}
        </p>
      )}
      {errors[f] && (
        <p className="field-error" id={`${id(f)}-error`}>
          <AlertCircle size={14} aria-hidden="true" /> {errors[f]}
        </p>
      )}
    </div>
  );

  const aria = (f: EnquiryField, required = false, hint = false) => ({
    id: id(f),
    name: f,
    "aria-invalid": errors[f] ? (true as const) : undefined,
    "aria-required": required || undefined,
    "aria-describedby": errors[f] ? `${id(f)}-error` : hint ? `${id(f)}-hint` : undefined,
    onBlur: () => blur(f),
  });

  if (status === "success") {
    return (
      <div className="form-status form-status-success" role="status" tabIndex={-1} ref={statusRef}>
        <CheckCircle2 size={28} aria-hidden="true" />
        <div>
          <h3>Thank you — your enquiry has been sent.</h3>
          <p>The NEXIO team has received your details and will reply using the contact information you provided.</p>
          <button type="button" className="btn btn-secondary" onClick={() => setStatus("idle")}>
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="enquiry-form" noValidate onSubmit={onSubmit} aria-describedby={`${uid}-required-note`}>
      <p className="form-note" id={`${uid}-required-note`}>
        Fields marked <span className="req">*</span> are required.
      </p>

      {showSummary && (
        <div className="form-summary" role="alert" tabIndex={-1} ref={summaryRef}>
          <p>
            <strong>Please check {errorList.length === 1 ? "1 field" : `${errorList.length} fields`}:</strong>
          </p>
          <ul>
            {errorList.map((f) => (
              <li key={f}>
                <a href={`#${id(f)}`}>{labels[f]}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="form-grid">
        {field(
          "fullName",
          true,
          <input type="text" autoComplete="name" value={values.fullName} onChange={(e) => update("fullName", e.target.value)} {...aria("fullName", true)} />,
        )}
        {field(
          "organisation",
          false,
          <input type="text" autoComplete="organization" value={values.organisation} onChange={(e) => update("organisation", e.target.value)} {...aria("organisation")} />,
        )}
        {field(
          "email",
          true,
          <input type="email" autoComplete="email" inputMode="email" value={values.email} onChange={(e) => update("email", e.target.value)} {...aria("email", true)} />,
        )}
        {field(
          "phone",
          true,
          <input type="tel" autoComplete="tel" inputMode="tel" value={values.phone} onChange={(e) => update("phone", e.target.value)} {...aria("phone", true, true)} />,
          "Include country code if outside India.",
        )}
        {field(
          "city",
          false,
          <input type="text" autoComplete="address-level2" value={values.city} onChange={(e) => update("city", e.target.value)} {...aria("city")} />,
        )}
        {field(
          "interest",
          true,
          <div className="select-wrap">
            <select value={values.interest} onChange={(e) => update("interest", e.target.value)} {...aria("interest", true)}>
              <option value="">Select an option</option>
              {INTEREST_OPTIONS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>,
        )}
        {field(
          "quantity",
          false,
          <input type="number" min={1} max={9999} step={1} inputMode="numeric" value={values.quantity} onChange={(e) => update("quantity", e.target.value)} {...aria("quantity")} />,
        )}
        {field(
          "message",
          true,
          <textarea rows={5} value={values.message} onChange={(e) => update("message", e.target.value)} {...aria("message", true)} />,
        )}
      </div>

      {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
      <div className="hp" aria-hidden="true">
        <label htmlFor={`${uid}-website`}>Website</label>
        <input id={`${uid}-website`} type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary btn-lg" disabled={status === "submitting"} aria-disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Loader2 className="spin" size={18} aria-hidden="true" />
              <span>Sending…</span>
            </>
          ) : (
            <span>Send enquiry</span>
          )}
        </button>
        <p className="form-privacy">Your details are used only to respond to this enquiry.</p>
      </div>

      <div aria-live="polite" ref={statusRef} tabIndex={-1} className="form-live">
        {status === "not-configured" && (
          <div className="form-status form-status-info">
            <Info size={22} aria-hidden="true" />
            <div>
              <h3>Email delivery is not set up yet</h3>
              <p>
                This is a preview build. Your enquiry passed validation but was <strong>not sent</strong>, because the
                website&apos;s email service has not been configured. Your details are still in the form.
              </p>
              {wa && (
                <a className="btn btn-secondary" href={wa} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} aria-hidden="true" /> <span>Send via WhatsApp instead</span>
                </a>
              )}
            </div>
          </div>
        )}
        {status === "error" && (
          <div className="form-status form-status-error">
            <AlertCircle size={22} aria-hidden="true" />
            <div>
              <h3>Your enquiry could not be sent</h3>
              <p>Something went wrong on our side. Your details are still in the form — please try again in a moment.</p>
            </div>
          </div>
        )}
        {status === "rate-limited" && (
          <div className="form-status form-status-error">
            <AlertCircle size={22} aria-hidden="true" />
            <div>
              <h3>Too many attempts</h3>
              <p>Please wait a few minutes before sending another enquiry.</p>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
