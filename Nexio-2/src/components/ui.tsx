import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import type { Photo } from "@/data/content";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "inverse";
  size?: "md" | "lg";
  external?: boolean;
  className?: string;
};

/** Link styled as a button, with a small arrow that nudges on hover. */
export function ButtonLink({ href, children, variant = "primary", size = "md", external, className = "" }: ButtonProps) {
  const cls = `btn btn-${variant} ${size === "lg" ? "btn-lg" : ""} ${className}`.trim();
  const Arrow = external ? ArrowUpRight : ArrowRight;
  const content = (
    <>
      <span>{children}</span>
      <Arrow className="btn-arrow" size={18} strokeWidth={1.8} aria-hidden="true" />
    </>
  );
  if (external)
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}

export function TextLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={`text-link ${className}`}>
      <span>{children}</span>
      <ArrowRight className="btn-arrow" size={16} strokeWidth={1.8} aria-hidden="true" />
    </Link>
  );
}

export function Eyebrow({ children, index, className = "" }: { children: ReactNode; index?: string; className?: string }) {
  return (
    <p className={`eyebrow ${className}`}>
      {index && <span className="eyebrow-index">{index}</span>}
      <span>{children}</span>
    </p>
  );
}

/** Responsive photo with fixed aspect ratio to avoid layout shift. */
export function Photo({
  photo,
  sizes,
  priority,
  className = "",
  ratio,
  position,
}: {
  photo: Photo;
  sizes: string;
  priority?: boolean;
  className?: string;
  ratio?: string;
  position?: string;
}) {
  return (
    <div className={`photo ${className}`} style={ratio ? { aspectRatio: ratio } : undefined}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectFit: "cover", objectPosition: position ?? "center" }}
      />
    </div>
  );
}
