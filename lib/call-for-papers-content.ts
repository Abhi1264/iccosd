import { loadContentWithCache } from "./markdown";

export interface CFPTopic {
  title: string;
  items: string[];
}

export interface CFPDate {
  label: string;
  date: string;
}

export interface CallForPapersContent {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  noticeTitle: string;
  noticeBody: string;
  generalGuidelines: string;
  acceptedPapers: string;
  topics: CFPTopic[];
  dates: CFPDate[];
  authorGuidelines: string;
  ctaText: string;
}

function asString(v: unknown, fallback = ""): string {
  return typeof v === "string" ? v : fallback;
}

function asArray<T>(v: unknown, fallback: T[] = []): T[] {
  return Array.isArray(v) ? v : fallback;
}

export function getCallForPapersContent(): CallForPapersContent {
  const { frontmatter } = loadContentWithCache("call-for-papers.md");

  return {
    title: asString(frontmatter.title, "Call for Papers | ICCoSD-26"),
    description: asString(
      frontmatter.description,
      "Submit your research papers to ICCoSD-26.",
    ),
    heroTitle: asString(frontmatter.heroTitle, "Call for Papers"),
    heroSubtitle: asString(
      frontmatter.heroSubtitle,
      "Share your research with the global community",
    ),
    heroImage: asString(
      frontmatter.heroImage,
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    ),
    noticeTitle: asString(frontmatter.noticeTitle, "Call for Papers Open"),
    noticeBody: asString(frontmatter.noticeBody),
    generalGuidelines: asString(frontmatter.generalGuidelines),
    acceptedPapers: asString(frontmatter.acceptedPapers),
    topics: asArray<CFPTopic>(frontmatter.topics),
    dates: asArray<CFPDate>(frontmatter.dates),
    authorGuidelines: asString(frontmatter.authorGuidelines),
    ctaText: asString(frontmatter.ctaText),
  };
}
