import { siteConfig } from "@/content/site-config";

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
  badgeLabel: string;
  highlightsTitle: string;
  highlights: AboutHighlight[];
  content: string;
}

export function getAboutContent(): AboutContent {
  const about = siteConfig.about;
  return {
    ...about,
    highlights: [...about.highlights],
  };
}
