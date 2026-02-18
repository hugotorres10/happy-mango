import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://hmango.eu/sitemap.xml",
    host: "https://hmango.eu",
  };
}
