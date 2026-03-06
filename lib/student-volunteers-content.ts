import { loadContentWithCache } from "./markdown";

export interface StudentVolunteersContent {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  intro: string;
  volunteers: string[];
  contributions: string;
}

function asString(v: unknown, fallback = ""): string {
  return typeof v === "string" ? v : fallback;
}

function asArray<T>(v: unknown, fallback: T[] = []): T[] {
  return Array.isArray(v) ? v : fallback;
}

export function getStudentVolunteersContent(): StudentVolunteersContent {
  const { frontmatter } = loadContentWithCache("student-volunteers.md");

  return {
    title: asString(frontmatter.title, "Student Volunteers | ICCoSD-26"),
    description: asString(
      frontmatter.description,
      "Meet the student volunteers of ICCoSD-26.",
    ),
    heroTitle: asString(frontmatter.heroTitle, "Student Volunteers"),
    heroSubtitle: asString(
      frontmatter.heroSubtitle,
      "Supporting ICCoSD-26 with enthusiasm and dedication",
    ),
    heroImage: asString(
      frontmatter.heroImage,
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    ),
    intro: asString(frontmatter.intro),
    volunteers: asArray<string>(frontmatter.volunteers),
    contributions: asString(frontmatter.contributions),
  };
}
