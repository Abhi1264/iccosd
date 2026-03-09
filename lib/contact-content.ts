import { siteConfig } from "@/content/site-config";

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
  contactInfoTitle: string;
  generalInquiriesTitle: string;
  keyContactsTitle: string;
  sendMessageTitle: string;
  addressLabel: string;
  emailLabel: string;
  phoneLabel: string;
  formLabels: {
    fullName: string;
    emailAddress: string;
    subject: string;
    message: string;
  };
  formPlaceholders: {
    fullName: string;
    emailAddress: string;
    subject: string;
    message: string;
  };
  submitButtonText: string;
  responseTimeText: string;
  mainEmail: string;
  mainPhone: string;
  organizingContacts: OrganizingContact[];
  secretaries: Secretary[];
  department: DepartmentContact | null;
  quickContacts: QuickContact[];
  content: string;
}

export function getContactContent(): ContactContent {
  const contact = siteConfig.contact;
  return {
    ...contact,
    organizingContacts: [...contact.organizingContacts],
    secretaries: [...contact.secretaries],
    department: contact.department,
    quickContacts: [...contact.quickContacts],
  };
}
