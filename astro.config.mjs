import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import rehypePrettyCode from "rehype-pretty-code";
import fs from "fs";
import path from "path";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
const rehypePrettyCodeOptions = {
  theme: {
    light: JSON.parse(
      fs.readFileSync(
        path.resolve("./src/styles/shiki/shiki-light.json"),
        "utf-8"
      )
    ),
    dark: JSON.parse(
      fs.readFileSync(
        path.resolve("./src/styles/shiki/shiki-dark.json"),
        "utf-8"
      )
    ),
  },
  tokensMap: {
    fn: "entity.name.function",
    objKey: "meta.object-literal.key",
  },

  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [
        {
          type: "text",
          value: " ",
        },
      ];
    }
  },

  onVisitHighlightedLine(node) {
    node.properties.className.push("line--highlighted");
  },

  onVisitHighlightedWord(node) {
    node.properties.className = ["word--highlighted"];
  },
};

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), svelte(), mdx(), prefetch()],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  },
  legacy: {
    astroFlavoredMarkdown: true,
  },
});
