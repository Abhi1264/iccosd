import { loadContentWithCache } from "./markdown";

export interface CommitteeMember {
  title: string;
  name: string;
  position: string;
}

export interface SimpleMember {
  name: string;
  position: string;
}

export interface OrganizingCommitteeContent {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  committee: Record<string, CommitteeMember[]>;
  publicity: SimpleMember[];
  accommodation: SimpleMember[];
  registration: SimpleMember[];
}

function asString(v: unknown, fallback = ""): string {
  return typeof v === "string" ? v : fallback;
}

function asArray<T>(v: unknown, fallback: T[] = []): T[] {
  return Array.isArray(v) ? v : fallback;
}

function asRecord<K extends string, V>(
  v: unknown,
  fallback: Record<K, V> = {} as Record<K, V>,
): Record<K, V> {
  if (!v || typeof v !== "object" || Array.isArray(v)) return fallback;
  return v as Record<K, V>;
}

export function getOrganizingCommitteeContent(): OrganizingCommitteeContent {
  const { frontmatter } = loadContentWithCache("committee-organizing.md");

  return {
    title: asString(frontmatter.title, "Organizing Committee | ICCoSD-26"),
    description: asString(
      frontmatter.description,
      "Meet the organizing committee members of ICCoSD-26.",
    ),
    heroTitle: asString(frontmatter.heroTitle, "Organizing Committee"),
    heroSubtitle: asString(
      frontmatter.heroSubtitle,
      "Meet the leaders behind ICCoSD-26",
    ),
    heroImage: asString(
      frontmatter.heroImage,
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    ),
    committee: asRecord<string, CommitteeMember[]>(
      frontmatter.committee,
      {} as Record<string, CommitteeMember[]>,
    ),
    publicity: asArray<SimpleMember>(frontmatter.publicity),
    accommodation: asArray<SimpleMember>(frontmatter.accommodation),
    registration: asArray<SimpleMember>(frontmatter.registration),
  };
}
