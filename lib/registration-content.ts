import { loadContentWithCache } from "./markdown";

export interface RegistrationContent {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  noticeTitle: string;
  noticeBody: string;
  introHeading: string;
  introBody: string;
}

function asString(v: unknown, fallback = ""): string {
  return typeof v === "string" ? v : fallback;
}

export function getRegistrationContent(): RegistrationContent {
  const { frontmatter } = loadContentWithCache("registration.md");

  return {
    title: asString(frontmatter.title, "Registration | ICCoSD-26"),
    description: asString(
      frontmatter.description,
      "Register for ICCoSD-26. View registration fees, process, and important details.",
    ),
    heroTitle: asString(frontmatter.heroTitle, "Registration"),
    heroSubtitle: asString(
      frontmatter.heroSubtitle,
      "Join us for an exceptional conference experience",
    ),
    heroImage: asString(
      frontmatter.heroImage,
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    ),
    noticeTitle: asString(frontmatter.noticeTitle, "Registration Open"),
    noticeBody: asString(
      frontmatter.noticeBody,
      "Registration for ICCoSD-26 is currently open. The conference will be held on February 18-19, 2026. Secure your spot now.",
    ),
    introHeading: asString(frontmatter.introHeading, "Registration Details"),
    introBody: asString(
      frontmatter.introBody,
      "Registration for ICCoSD-26 is open to authors, academicians, industry professionals, and attendees.",
    ),
  };
}
