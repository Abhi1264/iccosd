import { loadContentWithCache } from "./markdown";

export interface OrganizingContact {
  role: string;
  name: string;
  title: string;
  phone: string;
  email: string;
}

export interface Secretary {
  name: string;
  title: string;
  phone: string;
  responsibility: string;
}

export interface DepartmentContact {
  name: string;
  institution: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  email: string;
  phone: string;
  website: string;
}

export interface QuickContact {
  category: string;
  person: string;
  phone: string;
}

export interface ContactContent {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  mainEmail: string;
  mainPhone: string;
  organizingContacts: OrganizingContact[];
  secretaries: Secretary[];
  department: DepartmentContact | null;
  quickContacts: QuickContact[];
  content: string;
}

function asString(v: unknown, fallback = ""): string {
  return typeof v === "string" ? v : fallback;
}

function asArray<T>(v: unknown, fallback: T[] = []): T[] {
  return Array.isArray(v) ? v : fallback;
}

function asObject<T extends Record<string, unknown>>(
  v: unknown,
  fallback: T | null = null,
): T | null {
  return v && typeof v === "object" && !Array.isArray(v) ? (v as T) : fallback;
}

export function getContactContent(): ContactContent {
  const { frontmatter, content } = loadContentWithCache("contact.md");

  return {
    title: asString(frontmatter.title, "Contact Us - ICCoSD-26"),
    description: asString(
      frontmatter.description,
      "Get in touch with the ICCoSD-26 organizing committee",
    ),
    heroTitle: asString(frontmatter.heroTitle, "Reach Us"),
    heroSubtitle: asString(
      frontmatter.heroSubtitle,
      "Contact Information for ICCoSD-26",
    ),
    heroImage: asString(frontmatter.heroImage, "/hero-conference.jpg"),
    mainEmail: asString(frontmatter.mainEmail),
    mainPhone: asString(frontmatter.mainPhone),
    organizingContacts: asArray<OrganizingContact>(
      frontmatter.organizingContacts,
    ),
    secretaries: asArray<Secretary>(frontmatter.secretaries),
    department: asObject<DepartmentContact>(frontmatter.department),
    quickContacts: asArray<QuickContact>(frontmatter.quickContacts),
    content,
  };
}
