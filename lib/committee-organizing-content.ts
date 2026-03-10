import { siteConfig } from "@/content/site-config";

export interface CommitteeMember {
  title: string;
  name: string;
  position: string;
}

export interface SimpleMember {
  name: string;
  position: string;
}

export interface OrganizingCommitteeContent {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  committee: Record<string, CommitteeMember[]>;
  publicity: SimpleMember[];
  accommodation: SimpleMember[];
  registration: SimpleMember[];
  sectionTitles: {
    publicity: string;
    accommodation: string;
    registration: string;
  };
}

export function getOrganizingCommitteeContent(): OrganizingCommitteeContent {
  const committee = siteConfig.organizingCommittee;
  return {
    ...committee,
    committee: Object.fromEntries(
      Object.entries(committee.committee).map(([key, members]) => [
        key,
        members.map((m) => ({
          title: m.title,
          name: m.name,
          position: m.position,
        })),
      ])
    ),
    publicity: [...committee.publicity],
    accommodation: [...committee.accommodation],
    registration: [...committee.registration],
  };
}
