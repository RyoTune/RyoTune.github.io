import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "RyoTune",
      social: {
        github: "https://github.com/RyoTune",
      },
      sidebar: [
        {
          label: "Yona",
          autogenerate: {
            directory: "yona",
            collapsed: false,
          },
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
      ],
    }),
    svelte(),
  ],
});
