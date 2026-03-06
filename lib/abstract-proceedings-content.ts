import { loadContentWithCache } from "./markdown";

export interface PublicationDetail {
  label: string;
  value: string;
}

export interface AbstractProceedingsContent {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  intro: string;
  aboutProceedings: string;
  downloadSection: string;
  publication: PublicationDetail[];
  note: string;
  citation: string;
}

function asString(v: unknown, fallback = ""): string {
  return typeof v === "string" ? v : fallback;
}

function asArray<T>(v: unknown, fallback: T[] = []): T[] {
  return Array.isArray(v) ? v : fallback;
}

export function getAbstractProceedingsContent(): AbstractProceedingsContent {
  const { frontmatter } = loadContentWithCache("abstract-proceedings.md");

  return {
    title: asString(frontmatter.title, "Abstract Proceedings | ICCoSD-26"),
    description: asString(
      frontmatter.description,
      "Download the abstract proceedings from ICCoSD-26.",
    ),
    heroTitle: asString(frontmatter.heroTitle, "Proceedings"),
    heroSubtitle: asString(
      frontmatter.heroSubtitle,
      "IEEE International Conference on Communication and Smart Devices",
    ),
    heroImage: asString(
      frontmatter.heroImage,
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    ),
    intro: asString(frontmatter.intro),
    aboutProceedings: asString(frontmatter.aboutProceedings),
    downloadSection: asString(frontmatter.downloadSection),
    publication: asArray<PublicationDetail>(frontmatter.publication),
    note: asString(frontmatter.note),
    citation: asString(frontmatter.citation),
  };
}
