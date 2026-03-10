import { siteConfig } from "@/content/site-config";

export interface CFPTopic {
  title: string;
  items: string[];
}

export interface CFPDate {
  label: string;
  date: string;
}

export interface CallForPapersContent {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  noticeTitle: string;
  noticeBody: string;
  submissionGuidelinesTitle: string;
  generalGuidelinesTitle: string;
  acceptedPapersTitle: string;
  researchTopicsTitle: string;
  importantDatesTitle: string;
  authorGuidelinesTitle: string;
  contactButtonText: string;
  generalGuidelines: string;
  acceptedPapers: string;
  topics: CFPTopic[];
  dates: CFPDate[];
  authorGuidelines: string;
  ctaText: string;
}

export function getCallForPapersContent(): CallForPapersContent {
  const cfp = siteConfig.callForPapers;
  return {
    ...cfp,
    topics: cfp.topics.map((t) => ({
      title: t.title,
      items: [...t.items],
    })),
    dates: [...cfp.dates],
  };
}
