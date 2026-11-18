"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { productCategories, productGroups, type ProductGroup } from "@/data/content";
import { Icon } from "@/components/Icon";

type Filter = "All" | ProductGroup;

/**
 * Data-driven catalogue of CONCEPTUAL categories (not confirmed stock/SKUs).
 * Filter chips are real toggle buttons (aria-pressed) and the result count is announced.
 */
export function ProductCatalogue({ showImages = true }: { showImages?: boolean }) {
  const [filter, setFilter] = useState<Filter>("All");
  const filters: Filter[] = ["All", ...productGroups];
  const items = useMemo(
    () => (filter === "All" ? productCategories : productCategories.filter((p) => p.group === filter)),
    [filter],
  );

  return (
    <div className="catalogue">
      <div className="catalogue-toolbar">
        <div className="chip-row" role="group" aria-label="Filter categories">
          {filters.map((f) => {
            const count = f === "All" ? productCategories.length : productCategories.filter((p) => p.group === f).length;
            return (
              <button key={f} type="button" className="chip" aria-pressed={filter === f} onClick={() => setFilter(f)}>
                {f}
                <span className="chip-count" aria-hidden="true">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
        <p className="catalogue-count" aria-live="polite">
          Showing {items.length} of {productCategories.length} categories
        </p>
      </div>

      <motion.ul className="catalogue-grid" layout>
        <AnimatePresence mode="popLayout" initial={false}>
          {items.map((p) => (
            <motion.li
              key={p.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={`product-card ${p.image && showImages ? "has-image" : ""}`}
            >
              <article aria-labelledby={`cat-${p.id}`}>
                {p.image && showImages ? (
                  <div className="product-media">
                    <Image src={p.image.src} alt="" fill sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw" style={{ objectFit: "cover" }} />
                  </div>
                ) : (
                  <div className="product-icon" aria-hidden="true">
                    <Icon name={p.icon} size={26} />
                  </div>
                )}
                <div className="product-body">
                  <p className="product-meta">
                    <span>{String(productCategories.indexOf(p) + 1).padStart(2, "0")}</span>
                    <span>{p.group}</span>
                  </p>
                  <h3 id={`cat-${p.id}`}>{p.title}</h3>
                  <p>{p.summary}</p>
                  <div className="product-actions">
                    <Link className="text-link" href={`/contact?interest=${encodeURIComponent(p.interest)}`}>
                      <span>Enquire</span>
                      <ArrowRight className="btn-arrow" size={16} aria-hidden="true" />
                      <span className="sr-only"> about {p.title}</span>
                    </Link>
                    {p.href && (
                      <Link className="text-link subtle" href={p.href}>
                        <span>Explore</span>
                        <span className="sr-only"> {p.title}</span>
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
      <p className="catalogue-disclaimer">
        Categories are indicative of the solutions NEXIO can source and support. Specific models, availability and
        specifications are confirmed on enquiry.
      </p>
    </div>
  );
}
