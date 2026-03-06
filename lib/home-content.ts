import { loadContentWithCache } from "./markdown";

export interface Highlight {
  stat: string;
  label: string;
  label_alt?: string;
  description: string;
}

export interface HomeDate {
  label: string;
  date: string;
}

export interface HomeCTA {
  title: string;
  description: string;
  cta: string;
  link: string;
}

export interface HomeOrganizer {
  code: string;
  name: string;
  tagline: string;
}

export interface HomeConfig {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroTagline: string;
  heroDate: string;
  heroCTA: string;
  heroCTALink: string;
  institution: string;
  theme: string;
  heroImageUrl: string;
  highlights: Highlight[];
  aboutTitle: string;
  aboutLead: string;
  aboutBody: string;
  themeSectionTitle: string;
  themeHeadline: string;
  themeDescription: string;
  homeDates: HomeDate[];
  homeCtas: HomeCTA[];
  homeOrganizers: HomeOrganizer[];
}

function asString(v: unknown, fallback = ""): string {
  return typeof v === "string" ? v : fallback;
}

function asArray<T>(v: unknown, fallback: T[] = []): T[] {
  return Array.isArray(v) ? v : fallback;
}

export function getHomeContent(): HomeConfig {
  const { frontmatter } = loadContentWithCache("home.md");

  return {
    title: asString(frontmatter.title),
    description: asString(frontmatter.description),
    heroTitle: asString(frontmatter.heroTitle),
    heroSubtitle: asString(frontmatter.heroSubtitle),
    heroTagline: asString(frontmatter.heroTagline),
    heroDate: asString(frontmatter.heroDate),
    heroCTA: asString(frontmatter.heroCTA, "Register Now"),
    heroCTALink: asString(frontmatter.heroCTALink, "/registration"),
    institution: asString(frontmatter.institution),
    theme: asString(frontmatter.theme),
    heroImageUrl: asString(frontmatter.heroImageUrl, "/hero-conference.jpg"),
    highlights: asArray<Highlight>(frontmatter.highlights),
    aboutTitle: asString(frontmatter.aboutTitle),
    aboutLead: asString(frontmatter.aboutLead),
    aboutBody: asString(frontmatter.aboutBody),
    themeSectionTitle: asString(frontmatter.themeSectionTitle),
    themeHeadline: asString(frontmatter.themeHeadline),
    themeDescription: asString(frontmatter.themeDescription),
    homeDates: asArray<HomeDate>(frontmatter.homeDates),
    homeCtas: asArray<HomeCTA>(frontmatter.homeCtas),
    homeOrganizers: asArray<HomeOrganizer>(frontmatter.homeOrganizers),
  };
}
