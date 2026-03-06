import { loadContentWithCache } from "./markdown";

export interface TechnicalCommitteeContent {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  intro: string;
  members: string[];
  note: string;
}

function asString(v: unknown, fallback = ""): string {
  return typeof v === "string" ? v : fallback;
}

function asArray<T>(v: unknown, fallback: T[] = []): T[] {
  return Array.isArray(v) ? v : fallback;
}

export function getTechnicalCommitteeContent(): TechnicalCommitteeContent {
  const { frontmatter } = loadContentWithCache("committee-technical.md");

  return {
    title: asString(
      frontmatter.title,
      "Technical Program Committee | ICCoSD-26",
    ),
    description: asString(
      frontmatter.description,
      "Meet the technical program committee members of ICCoSD-26.",
    ),
    heroTitle: asString(frontmatter.heroTitle, "Technical Program Committee"),
    heroSubtitle: asString(
      frontmatter.heroSubtitle,
      "Expert reviewers and program organizers",
    ),
    heroImage: asString(
      frontmatter.heroImage,
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    ),
    intro: asString(frontmatter.intro),
    members: asArray<string>(frontmatter.members),
    note: asString(frontmatter.note),
  };
}
