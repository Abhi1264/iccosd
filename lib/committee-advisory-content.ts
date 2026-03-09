import { siteConfig } from "@/content/site-config";

export interface AdvisoryCommitteeContent {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  intro: string;
  internationalTitle: string;
  nationalTitle: string;
  international: string[];
  national: string[];
  note: string;
}

export function getAdvisoryCommitteeContent(): AdvisoryCommitteeContent {
  const advisory = siteConfig.advisoryCommittee;
  return {
    ...advisory,
    international: [...advisory.international],
    national: [...advisory.national],
  };
}
