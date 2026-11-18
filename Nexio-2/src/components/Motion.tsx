"use client";

/**
 * Motion primitives (Motion / Framer Motion). One framework for the whole site.
 * - `MotionConfig reducedMotion="user"` removes transform/position animation for
 *   people who prefer reduced motion; only short opacity fades remain.
 * - Parallax is desktop-only and disabled for reduced-motion users.
 */
import { motion, MotionConfig, useReducedMotion, useScroll, useTransform, type Variants } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export const ease = [0.22, 1, 0.36, 1] as const;

export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

function useIsSmall() {
  const [small, setSmall] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setSmall(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return small;
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "article" | "header" | "figure";
  id?: string;
};

/** Fade + short rise, once, when the element enters the viewport. */
export function Reveal({ children, className, delay = 0, y = 16, as = "div", id }: RevealProps) {
  const small = useIsSmall();
  const Cmp = motion[as];
  return (
    <Cmp
      id={id}
      className={className}
      initial={{ opacity: 0, y: small ? Math.min(y, 10) : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: small ? 0.45 : 0.6, ease, delay }}
    >
      {children}
    </Cmp>
  );
}

const groupVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

/** Container that staggers its RevealItem children (keep for related items only). */
export function RevealGroup({ children, className, as = "div" }: { children: ReactNode; className?: string; as?: "div" | "ul" | "ol" | "dl" }) {
  const Cmp = motion[as];
  return (
    <Cmp className={className} variants={groupVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "0px 0px -8% 0px" }}>
      {children}
    </Cmp>
  );
}

export function RevealItem({ children, className, as = "div" }: { children: ReactNode; className?: string; as?: "div" | "li" | "article" }) {
  const Cmp = motion[as];
  return (
    <Cmp className={className} variants={itemVariants}>
      {children}
    </Cmp>
  );
}

/** Hero headline word reveal: 12–20px rise, ~650ms per word, small stagger. */
export function WordReveal({
  text,
  as = "h1",
  className,
  delay = 0.1,
  rise = 18,
  accentWords = [],
  inView = false,
}: {
  text: string;
  as?: "h1" | "h2" | "p";
  className?: string;
  delay?: number;
  rise?: number;
  accentWords?: string[];
  /** Animate when scrolled into view instead of on mount (for headlines below the fold). */
  inView?: boolean;
}) {
  const Tag = as;
  const lines = text.split("\n");
  let index = 0;
  return (
    <Tag className={className}>
      {lines.map((line, li) => (
        <span className="wr-line" key={li}>
          {line.split(" ").map((word, wi, arr) => {
            const i = index++;
            const accent = accentWords.includes(word.replace(/[.,]/g, ""));
            return (
              <span className="wr-word" key={wi}>
                <motion.span
                  className={accent ? "wr-inner accent" : "wr-inner"}
                  initial={{ opacity: 0, y: rise }}
                  {...(inView
                    ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "0px 0px -10% 0px" } }
                    : { animate: { opacity: 1, y: 0 } })}
                  transition={{ duration: 0.65, ease, delay: delay + i * 0.055 }}
                >
                  {word}
                </motion.span>
                {wi < arr.length - 1 ? " " : null}
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}

/** Clip-path mask reveal for images: 700–1000ms, gentle settle, no dramatic zoom. */
export function MaskReveal({
  children,
  className,
  direction = "up",
  delay = 0.15,
  onMount = false,
}: {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
  onMount?: boolean;
}) {
  const reduce = useReducedMotion();
  const from =
    direction === "left" ? "inset(0% 100% 0% 0%)" : direction === "right" ? "inset(0% 0% 0% 100%)" : "inset(100% 0% 0% 0%)";
  const initial = reduce ? { opacity: 0 } : { clipPath: from };
  const target = reduce ? { opacity: 1 } : { clipPath: "inset(0% 0% 0% 0%)" };
  return (
    <motion.div
      className={className}
      initial={initial}
      {...(onMount ? { animate: target } : { whileInView: target, viewport: { once: true, margin: "0px 0px -10% 0px" } })}
      transition={{ duration: 0.95, ease, delay }}
    >
      <motion.div
        className="mask-inner"
        initial={reduce ? false : { scale: 1.04 }}
        {...(onMount ? { animate: { scale: 1 } } : { whileInView: { scale: 1 }, viewport: { once: true } })}
        transition={{ duration: 1.2, ease, delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/** Gentle vertical parallax for product imagery. Desktop (≥1024px) only. */
export function Parallax({ children, className, distance = 28 }: { children: ReactNode; className?: string; distance?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return (
    <div ref={ref} className={className}>
      <motion.div className="parallax-inner" style={enabled && !reduce ? { y } : undefined}>
        {children}
      </motion.div>
    </div>
  );
}

/** Restrained horizontal drift tied to scroll (desktop only). Used sparingly. */
export function Drift({ children, className, distance = 60 }: { children: ReactNode; className?: string; distance?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={enabled && !reduce ? { x } : undefined}>{children}</motion.div>
    </div>
  );
}
