import { loadContentWithCache } from "./markdown";

export interface DistanceInfo {
  city: string;
  distance: string;
}

export interface DirectionsContent {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  intro: string;
  byAir: string;
  byTrain: string;
  byRoad: string;
  localTransport: string;
  location: string;
  distances: DistanceInfo[];
  accommodation: string;
}

function asString(v: unknown, fallback = ""): string {
  return typeof v === "string" ? v : fallback;
}

function asArray<T>(v: unknown, fallback: T[] = []): T[] {
  return Array.isArray(v) ? v : fallback;
}

export function getDirectionsContent(): DirectionsContent {
  const { frontmatter } = loadContentWithCache("directions.md");

  return {
    title: asString(frontmatter.title, "Directions | ICCoSD-26"),
    description: asString(
      frontmatter.description,
      "How to reach BIT Mesra, Ranchi for ICCoSD-26.",
    ),
    heroTitle: asString(frontmatter.heroTitle, "How to Reach BIT Mesra"),
    heroSubtitle: asString(
      frontmatter.heroSubtitle,
      "Easy directions to the conference venue",
    ),
    heroImage: asString(
      frontmatter.heroImage,
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    ),
    intro: asString(frontmatter.intro),
    byAir: asString(frontmatter.byAir),
    byTrain: asString(frontmatter.byTrain),
    byRoad: asString(frontmatter.byRoad),
    localTransport: asString(frontmatter.localTransport),
    location: asString(frontmatter.location),
    distances: asArray<DistanceInfo>(frontmatter.distances),
    accommodation: asString(frontmatter.accommodation),
  };
}
