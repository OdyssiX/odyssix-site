import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ODYSSIX — Smart Websites & Digital Systems",
    short_name: "ODYSSIX",
    description:
      "Smart websites, mini apps, QR tools και ψηφιακά συστήματα για επιχειρήσεις.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#080A0F",
    theme_color: "#DC2626",
    icons: [
      {
        src: "/icon.svg",
        sizes: "64x64",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon.svg",
        sizes: "64x64",
        type: "image/svg+xml",
      },
    ],
  };
}
