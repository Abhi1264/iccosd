import { siteConfig } from "@/content/site-config";

export interface AboutContent {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  aboutBitMesraTitle: string;
  aboutBitMesraImageCaption: string;
  aboutBitMesraBody: string;
  aboutConferenceTitle: string;
  aboutConferenceBody: string;
}

export function getAboutContent(): AboutContent {
  const about = siteConfig.about;
  return { ...about };
}
