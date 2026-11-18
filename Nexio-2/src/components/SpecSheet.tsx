import { panelSpecs } from "@/data/content";

/**
 * Specification layout prepared for verified product data.
 * Values are `null` until NEXIO supplies an approved product sheet — they render as
 * "Details available on enquiry". Never put unverified numbers in `panelSpecs`.
 */
export function SpecSheet() {
  return (
    <div className="spec-sheet">
      {panelSpecs.map((group) => (
        <div className="spec-group" key={group.group}>
          <h3 className="spec-group-title">{group.group}</h3>
          <dl>
            {group.rows.map((row) => (
              <div className="spec-row" key={row.label}>
                <dt>{row.label}</dt>
                <dd className={row.value ? "" : "spec-pending"}>{row.value ?? "Details available on enquiry"}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}
