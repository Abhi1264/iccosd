import { loadContentWithCache } from "./markdown";

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

function asString(v: unknown, fallback = ""): string {
  return typeof v === "string" ? v : fallback;
}

function asArray<T>(v: unknown, fallback: T[] = []): T[] {
  return Array.isArray(v) ? v : fallback;
}

export function getFooterContent(): FooterConfig {
  const { frontmatter } = loadContentWithCache("footer.md");

  return {
    siteName: asString(frontmatter.siteName, "ICCoSD-26"),
    siteTagline: asString(frontmatter.siteTagline),
    email: asString(frontmatter.email),
    phone: asString(frontmatter.phone),
    address: asString(frontmatter.address),
    copyright: asString(frontmatter.copyright),
    departmentName: asString(frontmatter.departmentName),
    quickLinks: asArray<QuickLink>(frontmatter.quickLinks),
    importantDates: asArray<ImportantDate>(frontmatter.importantDates),
    acknowledgments: asArray<Acknowledgment>(frontmatter.acknowledgments),
    footerSections: asArray<FooterSection>(frontmatter.footerSections),
    socialLinks: asArray<SocialLink>(frontmatter.socialLinks),
  };
}
