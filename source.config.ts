import {
  defineCollections,
  defineConfig,
  defineDocs,
} from "fumadocs-mdx/config";
import { metaSchema, pageSchema } from "fumadocs-core/source/schema";
import z from "zod";

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: pageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export const blog = defineCollections({
  type: "doc",
  dir: "content/blog",
  schema: pageSchema.extend({
    author: z.string(),
    date: z.iso.date().or(z.date()),
  }),
  async: true,
  // async mdxOptions(environment) {
  //   const { rehypeCodeDefaultOptions } = await import('fumadocs-core/mdx-plugins/rehype-code');
  //   const { remarkSteps } = await import('fumadocs-core/mdx-plugins/remark-steps');

  // return applyMdxPreset({
  //   rehypeCodeOptions: isLint
  //     ? false
  //     : {
  //         inline: 'tailing-curly-colon',
  //         themes: {
  //           light: 'catppuccin-latte',
  //           dark: 'catppuccin-mocha',
  //         },
  //         transformers: [...(rehypeCodeDefaultOptions.transformers ?? []), transformerEscape()],
  //       },
  //   remarkCodeTabOptions: {
  //     parseMdx: true,
  //   },
  //   remarkNpmOptions: {
  //     persist: {
  //       id: 'package-manager',
  //     },
  //   },
  //   remarkPlugins: isLint ? [remarkElementIds] : [remarkSteps],
  // })(environment);
  // },
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});
