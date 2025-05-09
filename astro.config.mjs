import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "RyoTune",
      social: {
        github: "",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/RyoTune/RyoTune.github.io",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            {
              label: "Audio",
              items: [
                {
                  slug: "guides/audio/audio-replacement-ryo",
                },
                {
                  slug: "guides/audio/music-replacement-yona",
                },
                {
                  slug: "guides/audio/music-looping",
                },
                {
                  slug: "yona/game-encoders",
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
          label: "Ryo Framework",
          autogenerate: {
            directory: "ryo",
          },
        },
        {
          label: "Yona",
          autogenerate: {
            directory: "yona",
          },
        },
        {
          label: "Licensing",
          autogenerate: {
            directory: "licensing",
          },
        },
      ],
    }),
    svelte(),
  ],
});
