/**
 * Static demo build for GitHub Pages.
 *
 *   node scripts/build-pages.mjs /Nexio/Nexio-1
 *
 * GitHub Pages only serves static files, so the server-side enquiry API cannot run there.
 * This script temporarily moves `src/app/api` to `src/app/_api` (a private folder that Next.js
 * ignores), runs `next build` with `output: "export"`, then restores the folder.
 * In the exported demo the form runs in DEMO mode: it validates normally, then shows the honest
 * "email delivery is not set up yet" state. It never pretends to send.
 */
import { existsSync, renameSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join } from "node:path";

const basePath = process.argv[2] ?? process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const app = join(process.cwd(), "src", "app");
const api = join(app, "api");
const hidden = join(app, "_api");

if (existsSync(hidden) && !existsSync(api)) renameSync(hidden, api); // recover from an interrupted run
renameSync(api, hidden);

let status = 1;
try {
  const result = spawnSync("npx", ["next", "build"], {
    stdio: "inherit",
    shell: true,
    env: {
      ...process.env,
      PAGES_BUILD: "1",
      NEXT_PUBLIC_BASE_PATH: basePath,
      NEXT_PUBLIC_DEMO_MODE: "true",
      NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? `https://lalviveksingh.github.io${basePath}`,
    },
  });
  status = result.status ?? 1;
} finally {
  renameSync(hidden, api);
}
process.exit(status);
