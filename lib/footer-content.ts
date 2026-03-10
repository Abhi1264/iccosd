import { siteConfig } from "@/content/site-config";

export interface QuickLink {
  title: string;
  href: string;
  icon?: string;
}

export interface ImportantDate {
  label: string;
  value: string;
}

export interface Acknowledgment {
  title: string;
  description: string;
  imageUrl: string;
  website: string;
}

export interface FooterSection {
  title: string;
  links: Array<{ label: string; href: string }>;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface FooterConfig {
  siteName: string;
  siteTagline: string;
  email: string;
  phone: string;
  address: string;
  copyright: string;
  departmentName: string;
  quickLinks: QuickLink[];
  importantDates: ImportantDate[];
  acknowledgments: Acknowledgment[];
  footerSections: FooterSection[];
  socialLinks: SocialLink[];
}

export function getFooterContent(): FooterConfig {
  const footer = siteConfig.footer;
  return {
    ...footer,
    quickLinks: [...footer.quickLinks],
    importantDates: [...footer.importantDates],
    acknowledgments: [...footer.acknowledgments],
    footerSections: footer.footerSections.map((s) => ({
      title: s.title,
      links: s.links.map((l) => ({ label: l.label, href: l.href })),
    })),
    socialLinks: [...footer.socialLinks],
  };
}
