import { siteConfig } from "@/content/site-config";

export type SpeakerAccent = "gold" | "teal" | "blue" | "green";

export interface KeynoteSpeaker {
  role: string;
  name: string;
  position: string;
}

export interface KeynoteSpeakerSection {
  heading: string;
  accentColor: SpeakerAccent;
  speakers: KeynoteSpeaker[];
}

export interface KeynoteSpeakersContent {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  sections: {
    inaugural: KeynoteSpeakerSection;
    valedictory: KeynoteSpeakerSection;
    day1: KeynoteSpeakerSection;
    day2: KeynoteSpeakerSection;
  };
}

export function getKeynoteSpeakersContent(): KeynoteSpeakersContent {
  const keynote = siteConfig.keynoteSpeakers;
  return {
    ...keynote,
    sections: {
      inaugural: {
        ...keynote.sections.inaugural,
        speakers: [...keynote.sections.inaugural.speakers],
      },
      valedictory: {
        ...keynote.sections.valedictory,
        speakers: [...keynote.sections.valedictory.speakers],
      },
      day1: {
        ...keynote.sections.day1,
        speakers: [...keynote.sections.day1.speakers],
      },
      day2: {
        ...keynote.sections.day2,
        speakers: [...keynote.sections.day2.speakers],
      },
    },
  };
}
