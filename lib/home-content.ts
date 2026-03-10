import { siteConfig } from "@/content/site-config";

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
  icon?: string;
}

export interface HomeOrganizer {
  name: string;
  tagline: string;
  imageUrl: string;
}

export interface HomeConfig {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroTagline: string;
  heroDate: string;
  organizedBy?: string;
  heroCTA: string;
  heroCTALink: string;
  institution: string;
  theme: string;
  heroImageUrl: string;
  heroImageUrlMobile?: string;
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

export function getHomeContent(): HomeConfig {
  const home = siteConfig.home;
  return {
    ...home,
    highlights: [...home.highlights],
    homeDates: [...home.homeDates],
    homeCtas: [...home.homeCtas],
    homeOrganizers: [...home.homeOrganizers],
  };
}
