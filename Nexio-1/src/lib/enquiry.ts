/**
 * Enquiry validation shared by the browser form and the server API route.
 * The server always re-validates — client validation is only for user feedback.
 */
export const INTEREST_OPTIONS = [
  "Interactive Flat Panel Display",
  "Smart Classroom Solutions",
  "IT Products & Accessories",
  "Networking & Infrastructure",
  "Installation & Technical Support",
  "Other Enquiries",
] as const;

export type InterestOption = (typeof INTEREST_OPTIONS)[number];

export type EnquiryInput = {
  fullName: string;
  organisation: string;
  email: string;
  phone: string;
  city: string;
  interest: InterestOption | "";
  quantity: string;
  message: string;
};

export type EnquiryField = keyof EnquiryInput;
export type FieldErrors = Partial<Record<EnquiryField, string>>;

export const emptyEnquiry: EnquiryInput = {
  fullName: "",
  organisation: "",
  email: "",
  phone: "",
  city: "",
  interest: "",
  quantity: "",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_CHARS_RE = /^[+\d][\d\s\-()]*$/;

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export function normaliseEnquiry(raw: Record<string, unknown>): EnquiryInput {
  const interest = str(raw.interest, 80);
  return {
    fullName: str(raw.fullName, 120),
    organisation: str(raw.organisation, 160),
    email: str(raw.email, 200),
    phone: str(raw.phone, 30),
    city: str(raw.city, 80),
    interest: (INTEREST_OPTIONS as readonly string[]).includes(interest) ? (interest as InterestOption) : "",
    quantity: str(raw.quantity, 10),
    message: str(raw.message, 3000),
  };
}

export function validateEnquiry(data: EnquiryInput): FieldErrors {
  const errors: FieldErrors = {};

  if (data.fullName.length < 2) errors.fullName = "Please enter your full name.";

  if (!data.email) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(data.email)) errors.email = "Please enter a valid email address, e.g. name@organisation.com.";

  const digits = data.phone.replace(/\D/g, "");
  if (!data.phone) errors.phone = "Please enter a phone number.";
  else if (!PHONE_CHARS_RE.test(data.phone) || digits.length < 7 || digits.length > 15)
    errors.phone = "Please enter a valid phone number (7–15 digits, country code optional).";

  if (!data.interest) errors.interest = "Please choose what you are interested in.";

  if (data.quantity) {
    const n = Number(data.quantity);
    if (!Number.isInteger(n) || n < 1 || n > 9999) errors.quantity = "Please enter a whole number between 1 and 9999.";
  }

  if (data.message.length < 10) errors.message = "Please describe your requirement (at least 10 characters).";

  return errors;
}

export type EnquiryResponse =
  | { ok: true }
  | { ok: false; code: "VALIDATION"; errors: FieldErrors }
  | { ok: false; code: "EMAIL_NOT_CONFIGURED" | "SEND_FAILED" | "RATE_LIMITED" | "BAD_REQUEST" };
