import { CITIES } from "@/data/cities";

export const SITE_URL = "https://omnifence.net";

export interface PageMeta {
  title: string;
  description: string;
}

const STATIC_PAGES: Record<string, PageMeta> = {
  "/": {
    title: "Fence Company Tulsa & Broken Arrow | Omni Fence & Deck",
    description:
      "Local fence company serving Tulsa, Broken Arrow, Bixby, Jenks and Owasso. Cedar privacy, pre-stained, ornamental iron, chain link, vinyl and gates. Free quotes — call (918) 708-3668.",
  },
  "/services": {
    title: "Fence & Deck Services | Privacy, Iron, Vinyl, Gates | Omni Fence Tulsa",
    description:
      "Residential and commercial fence installation in the Tulsa area: cedar privacy, pre-stained, Ameristar ornamental steel, chain link, vinyl, round rail, gates and decks. Free quotes.",
  },
  "/gallery": {
    title: "Fence Project Photos | Omni Fence & Deck Tulsa",
    description:
      "Photos of privacy, ornamental iron, vinyl, round rail, commercial fences and gates built by Omni Fence across Tulsa and Broken Arrow.",
  },
  "/locations": {
    title: "Service Areas | Tulsa, Broken Arrow, Owasso, Bixby & More | Omni Fence",
    description:
      "Omni Fence serves Tulsa, Broken Arrow, Bixby, Jenks, Owasso, Sand Springs, Sapulpa, Claremore and surrounding Oklahoma communities.",
  },
  "/quote": {
    title: "Free Fence Quote | Omni Fence & Deck | Tulsa, OK",
    description:
      "Request a free fence or deck quote from Omni Fence. Serving Tulsa, Broken Arrow and surrounding areas. Or call (918) 708-3668.",
  },
};

const cityMeta = (slug: string): PageMeta | undefined => {
  const c = CITIES.find((x) => x.slug === slug);
  if (!c) return undefined;
  return {
    title: `Fence Company in ${c.city}, OK | Free Quotes | Omni Fence`,
    description: `${c.tagline} Local, licensed and insured. Call (918) 708-3668 for a free quote in ${c.city}.`,
  };
};

export const getPageMeta = (path: string): PageMeta => {
  const clean = path !== "/" ? path.replace(/\/+$/, "") : path;
  if (STATIC_PAGES[clean]) return STATIC_PAGES[clean];
  const m = clean.match(/^\/locations\/([a-z-]+)$/);
  if (m) {
    const meta = cityMeta(m[1]);
    if (meta) return meta;
  }
  return {
    title: "Page Not Found | Omni Fence & Deck",
    description: STATIC_PAGES["/"].description,
  };
};

/** Every page that should be pre-rendered and listed in the sitemap */
export const ALL_ROUTES: string[] = [
  ...Object.keys(STATIC_PAGES),
  ...CITIES.map((c) => `/locations/${c.slug}`),
];
