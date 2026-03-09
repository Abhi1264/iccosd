import { siteConfig } from "@/content/site-config";

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
  categoriesTitle: string;
  registrationInfoTitle: string;
  registrationContactTitle: string;
  registrationContactIntro: string;
  tableHeaders: [string, string, string, string, string];
  feeRows: Array<{
    category: string;
    fees: [string, string, string, string];
  }>;
  registrationInfoPoints: string[];
  registrationContactDetails: {
    officerLabel: string;
    officerName: string;
    emailLabel: string;
    email: string;
    phoneLabel: string;
    phone: string;
  };
}

export function getRegistrationContent(): RegistrationContent {
  const registration = siteConfig.registration;
  return {
    ...registration,
  };
}
