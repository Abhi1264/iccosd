import { loadContentWithCache } from "./markdown";

export interface AdvisoryCommitteeContent {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  intro: string;
  international: string[];
  national: string[];
  note: string;
}

function asString(v: unknown, fallback = ""): string {
  return typeof v === "string" ? v : fallback;
}

function asArray<T>(v: unknown, fallback: T[] = []): T[] {
  return Array.isArray(v) ? v : fallback;
}

export function getAdvisoryCommitteeContent(): AdvisoryCommitteeContent {
  const { frontmatter } = loadContentWithCache("committee-advisory.md");

  return {
    title: asString(frontmatter.title, "Advisory Committee | ICCoSD-26"),
    description: asString(
      frontmatter.description,
      "Meet the advisory committee members of ICCoSD-26.",
    ),
    heroTitle: asString(frontmatter.heroTitle, "Advisory Committee"),
    heroSubtitle: asString(
      frontmatter.heroSubtitle,
      "Global experts guiding ICCoSD-26",
    ),
    heroImage: asString(
      frontmatter.heroImage,
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    ),
    intro: asString(frontmatter.intro),
    international: asArray<string>(frontmatter.international),
    national: asArray<string>(frontmatter.national),
    note: asString(frontmatter.note),
  };
}
