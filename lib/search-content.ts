import { siteConfig } from "@/content/site-config";
import { searchEntries, type SearchIndexEntry } from "./search-utils";

export type ContentSearchEntry = {
  href: string;
  label: string;
  snippet?: string;
};

const SEARCH_PAGES: Array<{ href: string; label: string; text: string }> = [
  {
    href: "/",
    label: "Home",
    text: [
      siteConfig.home.title,
      siteConfig.home.description,
      siteConfig.home.aboutLead,
      siteConfig.home.aboutBody,
      siteConfig.home.themeDescription,
      siteConfig.home.highlights
        .map((h) => `${h.stat} ${h.label} ${h.description}`)
        .join(" "),
      siteConfig.home.homeDates.map((d) => `${d.label} ${d.date}`).join(" "),
      siteConfig.home.homeCtas
        .map((c) => `${c.title} ${c.description} ${c.cta}`)
        .join(" "),
    ].join("\n"),
  },
  {
    href: "/about",
    label: "About",
    text: [
      siteConfig.about.title,
      siteConfig.about.description,
    ].join("\n"),
  },
  {
    href: "/call-for-papers",
    label: "Call for Papers",
    text: [
      siteConfig.callForPapers.description,
      siteConfig.callForPapers.noticeBody,
      siteConfig.callForPapers.generalGuidelines,
      siteConfig.callForPapers.acceptedPapers,
      siteConfig.callForPapers.authorGuidelines,
      siteConfig.callForPapers.ctaText,
      siteConfig.callForPapers.topics
        .map((t) => `${t.title} ${t.items.join(" ")}`)
        .join(" "),
      siteConfig.callForPapers.dates
        .map((d) => `${d.label} ${d.date}`)
        .join(" "),
    ].join("\n"),
  },
  {
    href: "/committee/organizing",
    label: "Organizing Committee",
    text: [
      siteConfig.organizingCommittee.description,
      Object.values(siteConfig.organizingCommittee.committee)
        .flat()
        .map((m) => `${m.title} ${m.name} ${m.position}`)
        .join(" "),
      siteConfig.organizingCommittee.publicity
        .map((m) => `${m.name} ${m.position}`)
        .join(" "),
      siteConfig.organizingCommittee.accommodation
        .map((m) => `${m.name} ${m.position}`)
        .join(" "),
      siteConfig.organizingCommittee.registration
        .map((m) => `${m.name} ${m.position}`)
        .join(" "),
    ].join("\n"),
  },
  {
    href: "/committee/technical",
    label: "Technical Program Committee",
    text: [
      siteConfig.technicalCommittee.description,
      siteConfig.technicalCommittee.intro,
      siteConfig.technicalCommittee.members.join(" "),
      siteConfig.technicalCommittee.note,
    ].join("\n"),
  },
  {
    href: "/committee/advisory",
    label: "Advisory Committee",
    text: [
      siteConfig.advisoryCommittee.description,
      siteConfig.advisoryCommittee.intro,
      siteConfig.advisoryCommittee.international.join(" "),
      siteConfig.advisoryCommittee.national.join(" "),
      siteConfig.advisoryCommittee.note,
    ].join("\n"),
  },
  {
    href: "/abstract-proceedings",
    label: "Abstract Proceedings",
    text: [
      siteConfig.abstractProceedings.description,
      siteConfig.abstractProceedings.intro,
      siteConfig.abstractProceedings.aboutProceedings,
      siteConfig.abstractProceedings.downloadSection,
      siteConfig.abstractProceedings.publication
        .map((p) => `${p.label} ${p.value}`)
        .join(" "),
      siteConfig.abstractProceedings.note,
      siteConfig.abstractProceedings.citation,
    ].join("\n"),
  },
  {
    href: "/student-volunteers",
    label: "Student Volunteers",
    text: [
      siteConfig.studentVolunteers.description,
      siteConfig.studentVolunteers.intro,
      siteConfig.studentVolunteers.volunteers.join(" "),
      siteConfig.studentVolunteers.contributions,
    ].join("\n"),
  },
  {
    href: "/directions",
    label: "Directions",
    text: [
      siteConfig.directions.description,
      siteConfig.directions.intro,
      siteConfig.directions.byAir,
      siteConfig.directions.byTrain,
      siteConfig.directions.byRoad,
      siteConfig.directions.localTransport,
      siteConfig.directions.location,
      siteConfig.directions.distances
        .map((d) => `${d.city} ${d.distance}`)
        .join(" "),
      siteConfig.directions.accommodation,
    ].join("\n"),
  },
  {
    href: "/contact",
    label: "Contact",
    text: [
      siteConfig.contact.description,
      siteConfig.contact.mainEmail,
      siteConfig.contact.mainPhone,
      siteConfig.contact.organizingContacts
        .map((c) => `${c.role} ${c.name} ${c.title} ${c.phone} ${c.email}`)
        .join(" "),
      siteConfig.contact.secretaries
        .map((s) => `${s.name} ${s.title} ${s.phone} ${s.responsibility}`)
        .join(" "),
      siteConfig.contact.quickContacts
        .map((q) => `${q.category} ${q.person} ${q.phone}`)
        .join(" "),
      siteConfig.contact.content,
    ].join("\n"),
  },
  {
    href: "/registration",
    label: "Registration",
    text: [
      siteConfig.registration.description,
      siteConfig.registration.noticeBody,
      siteConfig.registration.introBody,
    ].join("\n"),
  },
  {
    href: "/keynote-speakers",
    label: "Keynote Speakers",
    text: "Keynote invited talks speakers plenary",
  },
];

/** Strip markdown to plain text for search. */
function markdownToPlainText(md: string): string {
  const text = md
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ") // images
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1") // links -> link text
    .replace(/^#{1,6}\s+/gm, " ") // headings
    .replace(/\*\*([^*]+)\*\*/g, "$1") // bold
    .replace(/\*([^*]+)\*/g, "$1") // italic
    .replace(/__([^_]+)__/g, "$1")
    .replace(/_([^_]+)_/g, "$1")
    .replace(/`([^`]+)`/g, "$1") // code
    .replace(/^\s*[-*+]\s+/gm, " ") // list items
    .replace(/^\s*\d+\.\s+/gm, " ") // numbered list
    .replace(/\n+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text;
}

export function buildContentIndex(): Map<
  string,
  { label: string; text: string }
> {
  const index = new Map<string, { label: string; text: string }>();
  for (const page of SEARCH_PAGES) {
    if (!index.has(page.href)) {
      index.set(page.href, {
        label: page.label,
        text: markdownToPlainText(page.text),
      });
    }
  }

  return index;
}

/** Returns the full search index as an array for JSON export (build script) or server use. */
export function getSearchIndexArray(): SearchIndexEntry[] {
  const index = buildContentIndex();
  return Array.from(index.entries()).map(([href, { label, text }]) => ({
    href,
    label,
    text,
  }));
}

export function searchContent(query: string): ContentSearchEntry[] {
  return searchEntries(getSearchIndexArray(), query);
}
