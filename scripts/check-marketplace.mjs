// A marketplace can silently serve something other than what the plugin's own
// repository declares, so what it may say is bounded here.
//
// These checks used to live in onetwohour/Engineering-Doctrine, back when the
// marketplace was a file in that repository and the plugin it listed was next to
// it. The marketplace now sits apart from every plugin it lists, which makes a
// redirect harder to notice rather than easier: nobody reading the plugin's
// repository would see one.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const MARKETPLACE = "onetwohour";
const ENTRY_KEYS = new Set(["name", "source", "description", "author", "keywords", "category", "strict"]);

const problems = [];
const fail = (message) => problems.push(message);

const marketplace = JSON.parse(fs.readFileSync(path.join(ROOT, ".claude-plugin", "marketplace.json"), "utf8"));

if (marketplace.name !== MARKETPLACE) fail(`marketplace is named ${marketplace.name}, not ${MARKETPLACE}`);

// `pluginRoot` repoints where a plugin's files are read from. A marketplace that
// can do that can serve any tree it likes under a name people trust.
if (marketplace.metadata && "pluginRoot" in marketplace.metadata) fail("metadata.pluginRoot may not redirect plugin authority");

if (!Array.isArray(marketplace.plugins) || marketplace.plugins.length === 0) fail("no plugins listed");

const seen = new Set();
for (const entry of marketplace.plugins ?? []) {
  const where = entry.name ?? "(unnamed entry)";
  if (seen.has(entry.name)) fail(`${where}: listed twice`);
  seen.add(entry.name);

  // `version` is absent on purpose. Each plugin's own plugin.json declares one,
  // and Claude Code prefers the manifest without warning when both are set, so
  // a version here would be a number that looks authoritative and is not read.
  for (const key of Object.keys(entry)) if (!ENTRY_KEYS.has(key)) fail(`${where}: entry may not carry ${key}`);

  // A relative source resolves inside this repository, which holds no plugins.
  const source = entry.source;
  if (typeof source === "string") fail(`${where}: source ${source} resolves in this repository, which contains no plugins`);
  else if (source?.source !== "git-subdir" || !source.url || !source.path) fail(`${where}: source must be git-subdir with a url and a path`);
}

if (problems.length) {
  for (const problem of problems) console.error(problem);
  process.exit(1);
}
console.log(`${MARKETPLACE}: ${marketplace.plugins.length} plugins, every source pointing at the repository that builds it.`);
