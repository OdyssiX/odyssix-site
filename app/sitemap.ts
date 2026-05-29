import type { MetadataRoute } from "next";

const baseUrl = "https://odyssix-site.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/demos",
    "/privacy",
    "/terms",
    "/demos/villa-smart-site",
    "/demos/villa-smart-site/live-preview",
    "/demos/restaurant-smart-hub",
    "/demos/restaurant-smart-hub/live-preview",
    "/demos/event-smart-page",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}



