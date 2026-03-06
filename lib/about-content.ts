import { loadContentWithCache } from "./markdown";

export interface AboutHighlight {
  title: string;
  description: string;
}

export interface AboutContent {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  highlights: AboutHighlight[];
  content: string;
}

function asString(v: unknown, fallback = ""): string {
  return typeof v === "string" ? v : fallback;
}

function asArray<T>(v: unknown, fallback: T[] = []): T[] {
  return Array.isArray(v) ? v : fallback;
}

export function getAboutContent(): AboutContent {
  const { frontmatter, content } = loadContentWithCache("about.md");

  return {
    title: asString(frontmatter.title, "About ICCoSD-26 & BIT Mesra"),
    description: asString(
      frontmatter.description,
      "Learn about the International Conference on Communication and Smart Devices and Birla Institute of Technology Mesra",
    ),
    heroTitle: asString(frontmatter.heroTitle, "About Us"),
    heroSubtitle: asString(
      frontmatter.heroSubtitle,
      "ICCoSD-26 & Birla Institute of Technology Mesra",
    ),
    heroImage: asString(frontmatter.heroImage, "/hero-conference.jpg"),
    highlights: asArray<AboutHighlight>(frontmatter.highlights),
    content,
  };
}
