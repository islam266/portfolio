import type { MetadataRoute } from "next";

import { D } from "@/content/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Islam Hamdi Ahmed",
    short_name: "Islam",
    description: D.en.role,
    start_url: "/en",
    scope: "/",
    display: "standalone",
    background_color: "#0b1120",
    theme_color: "#0b1120",
    lang: "en",
    dir: "ltr",
    icons: [
      {
        src: "/icons/192",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/512",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/192",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/512",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
