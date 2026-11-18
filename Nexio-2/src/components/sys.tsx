"use client";

/** Concept 02 system components: line-draw section heads, feature tabs, ecosystem diagram. */
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { ease } from "@/components/Motion";
import { Icon } from "@/components/Icon";
import type { IconKey, Photo } from "@/data/content";

/** Section head: mono code + a hairline that draws in once. */
export function SysHead({
  code,
  label,
  title,
  lead,
  id,
  inverse,
}: {
  code: string;
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  id: string;
  inverse?: boolean;
}) {
  return (
    <div className={`sys-head ${inverse ? "inverse" : ""}`}>
      <div className="sys-head-bar">
        <span className="sys-code">
          <span className="sys-dot" aria-hidden="true" />
          {code}
        </span>
        <span className="sys-label">{label}</span>
        <motion.span
          className="sys-line"
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.9, ease }}
        />
      </div>
      <div className="sys-head-body">
        <motion.h2
          id={id}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.6, ease }}
        >
          {title}
        </motion.h2>
        {lead && (
          <motion.div
            className="lead"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
          >
            {lead}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export type FeatureTab = { title: string; text: string; icon: IconKey; photo: Photo; position?: string };

/** Accessible tabs (WAI-ARIA pattern: arrow keys, Home/End) with an image that swaps per feature. */
export function FeatureTabs({ items }: { items: FeatureTab[] }) {
  const [active, setActive] = useState(0);
  const uid = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    let next = i;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (i + 1) % items.length;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (i - 1 + items.length) % items.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = items.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  };

  const item = items[active];
  return (
    <div className="ftabs">
      <div className="ftabs-list" role="tablist" aria-label="Interactive flat panel features" aria-orientation="vertical">
        {items.map((t, i) => (
          <button
            key={t.title}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            type="button"
            id={`${uid}-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`${uid}-panel`}
            tabIndex={active === i ? 0 : -1}
            className="ftab"
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            <span className="ftab-code">F/{String(i + 1).padStart(2, "0")}</span>
            <span className="ftab-title">{t.title}</span>
            <Icon name={t.icon} size={20} className="ftab-icon" />
          </button>
        ))}
      </div>
      <div className="ftabs-panel" role="tabpanel" id={`${uid}-panel`} aria-labelledby={`${uid}-tab-${active}`} tabIndex={0}>
        <div className="ftabs-media">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={item.photo.src + active}
              className="ftabs-img"
              initial={{ opacity: 0, clipPath: "inset(0% 0% 0% 12%)" }}
              animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease }}
            >
              <Image
                src={item.photo.src}
                alt={item.photo.alt}
                fill
                sizes="(max-width: 1023px) 100vw, 55vw"
                style={{ objectFit: "cover", objectPosition: item.position ?? "center" }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="ftabs-copy">
          <p className="mono">
            Feature {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </p>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      </div>
    </div>
  );
}

/** Hub-and-spoke ecosystem diagram. Desktop: radial connectors; mobile: linked vertical list. */
export function EcosystemDiagram({ hub, nodes }: { hub: { title: string; text: string }; nodes: { title: string; text: string; icon: IconKey }[] }) {
  return (
    <div className="eco">
      <svg className="eco-lines" viewBox="0 0 1000 560" preserveAspectRatio="none" aria-hidden="true">
        {nodes.map((_, i) => {
          const pos = ecoPositions[i];
          return (
            <motion.line
              key={i}
              x1={500}
              y1={280}
              x2={pos.x}
              y2={pos.y}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease, delay: 0.2 + i * 0.06 }}
            />
          );
        })}
      </svg>
      <div className="eco-hub">
        <span className="sys-code">
          <span className="sys-dot" aria-hidden="true" /> Core
        </span>
        <h3>{hub.title}</h3>
        <p>{hub.text}</p>
      </div>
      <ul className="eco-nodes">
        {nodes.map((n, i) => (
          <li key={n.title} className={`eco-node n${i}`}>
            <motion.div
              className="eco-node-inner"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: 0.35 + i * 0.06 }}
            >
              <Icon name={n.icon} size={22} />
              <div>
                <h4>{n.title}</h4>
                <p>{n.text}</p>
              </div>
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Connector endpoints in the 1000×560 diagram space (match .eco-node.nX positions in CSS). */
const ecoPositions = [
  { x: 150, y: 70 },
  { x: 500, y: 22 },
  { x: 850, y: 70 },
  { x: 150, y: 490 },
  { x: 500, y: 538 },
  { x: 850, y: 490 },
];
