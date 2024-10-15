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
          label: "Guides",
          items: [
            {
              label: "Audio",
              items: [
                {
                  slug: "guides/audio/music-replacement-yona",
                },
                {
                  slug: "guides/audio/music-looping",
                },
              ],
            },
            {
              label: "Reloaded II",
              autogenerate: { directory: "guides/reloaded" },
            },
          ],
        },
        {
          label: "Yona",
          autogenerate: {
            directory: "yona",
          },
        },
      ],
    }),
    svelte(),
  ],
});
