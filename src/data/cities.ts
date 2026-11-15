// Service-area city pages. Each city gets its own page at /locations/<slug>.
// Keep the copy specific to each city so Google treats every page as unique.

export interface City {
  slug: string;
  city: string;
  county: string;
  /** Short line used in the hero and meta description */
  tagline: string;
  /** Two or three paragraphs unique to this city */
  intro: string[];
  /** Nearby towns / areas we also cover from this page */
  nearby: string[];
  /** Core cities get full pages and top billing; others are extended service area */
  core: boolean;
}

export const CITIES: City[] = [
  {
    slug: "tulsa-ok",
    city: "Tulsa",
    county: "Tulsa County",
    tagline: "Wood privacy, iron, chain link and vinyl fencing for Tulsa homes and businesses.",
    intro: [
      "Tulsa is home base for Omni Fence. From midtown bungalows with tight lot lines to newer subdivisions in south Tulsa, we build fences that fit the property, the neighborhood and the budget.",
      "Most of our Tulsa work is cedar privacy fencing, fence replacement after storm damage, and ornamental iron along front yards and pools. We also handle commercial chain link and gates for shops and warehouses across the city.",
      "Because we're local, we can usually get out to measure quickly and give you a written quote you can compare line by line.",
    ],
    nearby: ["Midtown", "South Tulsa", "Brookside", "East Tulsa", "Turley", "Sperry"],
    core: true,
  },
  {
    slug: "broken-arrow-ok",
    city: "Broken Arrow",
    county: "Tulsa and Wagoner Counties",
    tagline: "Privacy fences, ornamental iron and gates built for Broken Arrow neighborhoods.",
    intro: [
      "Broken Arrow is one of the busiest areas we work in. Many neighborhoods here have HOA rules on fence height, style and stain color, and we're used to building to those standards and helping you get the HOA approval paperwork together.",
      "Popular projects in Broken Arrow include 6' and 8' cedar privacy fences, pre-stained fence packages, Ameristar ornamental steel around pools, and replacing tired original builder fences in older subdivisions.",
      "Whether you're near the Rose District or out in the newer developments toward Coweta, we'll come out, measure and give you a clear written price.",
    ],
    nearby: ["Rose District", "Coweta", "Bixby", "Leonard", "Wagoner County"],
    core: true,
  },
  {
    slug: "bixby-ok",
    city: "Bixby",
    county: "Tulsa County",
    tagline: "Fence installation and replacement for Bixby homes, acreage and new builds.",
    intro: [
      "Bixby has a mix of established neighborhoods, fast-growing new construction and properties with acreage south of the river. We build for all three — from privacy fencing on a standard lot to round rail and welded wire on larger tracts.",
      "New-build homeowners in Bixby often call us to add a privacy fence before moving in, or to upgrade a basic builder fence to a taller, stained cedar fence with a proper gate.",
      "Tell us about your lot and what you need the fence to do, and we'll recommend the right material and layout.",
    ],
    nearby: ["Jenks", "Leonard", "South Tulsa", "Glenpool"],
    core: true,
  },
  {
    slug: "jenks-ok",
    city: "Jenks",
    county: "Tulsa County",
    tagline: "Quality fencing and gates for Jenks homeowners.",
    intro: [
      "Jenks homeowners call us for clean, good-looking fences that hold up — cedar privacy, pre-stained fencing, and ornamental steel that keeps the view open.",
      "Many Jenks neighborhoods have HOA guidelines, so we'll talk through height, style and color before we build so everything gets approved the first time.",
      "We also install and repair gates, including wider drive gates for trailers and boats.",
    ],
    nearby: ["Bixby", "Glenpool", "South Tulsa", "West Tulsa"],
    core: true,
  },
  {
    slug: "owasso-ok",
    city: "Owasso",
    county: "Tulsa and Rogers Counties",
    tagline: "Privacy, iron and chain link fencing for Owasso and north Tulsa County.",
    intro: [
      "Owasso has grown fast, and a lot of homes are still on their first fence. When those fences start leaning or the pickets go gray, we replace them with stronger posts and better hardware so the new fence lasts.",
      "We build cedar privacy fences, pre-stained fencing, ornamental steel around pools and patios, and chain link for dogs and back lots.",
      "Call us or request a quote online and we'll set a time to come measure.",
    ],
    nearby: ["Collinsville", "Skiatook", "Claremore", "North Tulsa"],
    core: true,
  },
  {
    slug: "sand-springs-ok",
    city: "Sand Springs",
    county: "Tulsa and Osage Counties",
    tagline: "Residential and rural fencing for Sand Springs and west Tulsa County.",
    intro: [
      "Sand Springs properties range from in-town lots to acreage out toward Prattville and Keystone Lake. We handle both — privacy fencing close to the house and ranch-style round rail or welded wire for larger land.",
      "We also replace storm-damaged fence sections and build gates sized for trucks, trailers and equipment.",
      "Get in touch and we'll come out to look at the property and give you a straightforward written quote.",
    ],
    nearby: ["Prattville", "West Tulsa", "Sapulpa", "Keystone Lake area"],
    core: true,
  },
  {
    slug: "sapulpa-ok",
    city: "Sapulpa",
    county: "Creek County",
    tagline: "Fence installation, replacement and gates in Sapulpa and Creek County.",
    intro: [
      "We serve Sapulpa and the surrounding Creek County area with the same crews and materials we use across Tulsa — cedar privacy, pre-stained fencing, ornamental steel, chain link and round rail.",
      "Older homes in Sapulpa often need a fence rebuilt from the posts up. We'll tell you honestly whether a repair will do or whether it's time to replace.",
      "Request a quote and we'll schedule a time to come measure.",
    ],
    nearby: ["Kellyville", "Glenpool", "Sand Springs", "Mounds"],
    core: true,
  },
  {
    slug: "claremore-ok",
    city: "Claremore",
    county: "Rogers County",
    tagline: "Fencing for Claremore homes, acreage and businesses.",
    intro: [
      "Claremore and Rogers County have plenty of acreage, so along with privacy fences we build a lot of round rail, welded wire and wide drive gates out this way.",
      "In town, homeowners call us for cedar privacy fences, pre-stained fence packages and ornamental steel.",
      "Tell us about your project and we'll come out, measure and give you a clear written price.",
    ],
    nearby: ["Verdigris", "Catoosa", "Owasso", "Chelsea"],
    core: true,
  },
  { slug: "bartlesville-ok", city: "Bartlesville", county: "Washington County", tagline: "Fencing and gates for Bartlesville by appointment.", intro: ["We serve Bartlesville with scheduled estimates and full installation — privacy, ornamental steel, chain link and round rail.", "Call to set up a time and we'll plan the trip around your project."], nearby: ["Dewey", "Ochelata"], core: false },
  { slug: "muskogee-ok", city: "Muskogee", county: "Muskogee County", tagline: "Fencing and gates for Muskogee by appointment.", intro: ["Muskogee is part of our extended service area. We schedule estimates and installs here for privacy, ornamental steel, chain link and rural fencing.", "Call to set up a time."], nearby: ["Fort Gibson", "Haskell"], core: false },
  { slug: "tahlequah-ok", city: "Tahlequah", county: "Cherokee County", tagline: "Fencing and gates for Tahlequah by appointment.", intro: ["We take scheduled projects in Tahlequah and Cherokee County, including privacy fencing, ornamental steel and rural fencing.", "Call to set up a time."], nearby: ["Park Hill", "Lake Tenkiller area"], core: false },
  { slug: "stillwater-ok", city: "Stillwater", county: "Payne County", tagline: "Fencing and gates for Stillwater by appointment.", intro: ["Stillwater is part of our extended service area for larger fence and gate projects.", "Call to see if your project is a fit."], nearby: ["Perkins", "Cushing"], core: false },
  { slug: "ponca-city-ok", city: "Ponca City", county: "Kay County", tagline: "Fencing and gates for Ponca City by appointment.", intro: ["We take larger fence and gate projects in Ponca City by appointment.", "Call to see if your project is a fit."], nearby: ["Blackwell", "Newkirk"], core: false },
  { slug: "shawnee-ok", city: "Shawnee", county: "Pottawatomie County", tagline: "Fencing and gates for Shawnee by appointment.", intro: ["We take larger fence and gate projects in Shawnee by appointment.", "Call to see if your project is a fit."], nearby: ["Tecumseh", "McLoud"], core: false },
];

export const getCity = (slug: string | undefined) => CITIES.find((c) => c.slug === slug);
