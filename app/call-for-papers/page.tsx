import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { CTAButton } from "@/components/cta-button";
import { InfoBlock } from "@/components/info-block";
import { getCallForPapersContent } from "@/lib/call-for-papers-content";
import {
  FormattedDate,
  renderTextWithStrikethroughSegments,
} from "@/lib/formatted-date";
import Image from "next/image";

const cfpContent = getCallForPapersContent();

export const metadata = {
  title: cfpContent.title,
  description: cfpContent.description,
};

function renderBulletList(content: string, className = "") {
  const renderWithLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, idx) => {
      if (/^https?:\/\//.test(part)) {
        return (
          <a
            key={`${part}-${idx}`}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-2 hover:text-primary/80"
          >
            {part}
          </a>
        );
      }

      return <span key={`${part}-${idx}`}>{part}</span>;
    });
  };

  const lines = content.split("\n").filter((line) => line.trim().length > 0);

  const structuredItems = lines
    .map((line) => {
      const match = line.match(/^(\s*)-\s+(.*)$/);
      if (!match) return null;

      const [, spaces, text] = match;
      return {
        level: Math.floor(spaces.length / 2),
        text,
      };
    })
    .filter((item): item is { level: number; text: string } => item !== null);

  return (
    <ul
      className={`list-disc ml-6 space-y-2 text-foreground/80 ${className}`.trim()}
    >
      {structuredItems.map((item) => (
        <li
          key={`${item.level}-${item.text}`}
          className={`leading-relaxed ${item.level > 0 ? "ml-6 list-[circle]" : ""}`}
        >
          {renderWithLinks(item.text)}
        </li>
      ))}
    </ul>
  );
}

export default function CallForPapers() {
  const {
    heroTitle,
    heroSubtitle,
    heroImage,
    noticeTitle,
    noticeBody,
    submissionGuidelinesTitle,
    generalGuidelinesTitle,
    acceptedPapersTitle,
    researchTopicsTitle,
    importantDatesTitle,
    // authorGuidelinesTitle,
    contactButtonText,
    generalGuidelines,
    acceptedPapers,
    topics,
    dates,
    // authorGuidelines,
    ctaText,
  } = cfpContent;

  return (
    <main>
      <HeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        backgroundImage={heroImage}
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <InfoBlock title={noticeTitle} type="highlight">
            <p className="text-justify">
              {renderTextWithStrikethroughSegments(noticeBody)}
            </p>
          </InfoBlock>
          <CTAButton
            href={cfpContent.registrationLink}
            variant="primary"
            className="mt-6"
          >
            Click this link to Submit Camera Ready Paper on CMT (follow the
            instructions given below)
          </CTAButton>
          <section className="my-12">
            <InfoBlock title="QR Code to Submit Your Paper" type="highlight">
              <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col items-center">
                  <Image
                    src={cfpContent.registrationQrCode}
                    alt="Submission QR Code"
                    width={144}
                    height={144}
                    className="w-36 h-36"
                  />
                  <p className="text-sm text-foreground/80">
                    Scan to submit your paper
                  </p>
                </div>
              </div>
            </InfoBlock>
          </section>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            {submissionGuidelinesTitle}
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {generalGuidelinesTitle}
              </h3>
              {renderBulletList(generalGuidelines, "text-justify")}
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {acceptedPapersTitle}
              </h3>
              <p className="mb-4 whitespace-pre-line text-justify">
                {acceptedPapers}{" "}
                <Link
                  href="/registration#registration-process"
                  className="text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  Follow the registration process
                </Link>
                .
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {researchTopicsTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {topics.map((topic) => (
                  <div key={topic.title}>
                    <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                      <span className="text-gold-accent">▸</span> {topic.title}
                    </h4>
                    <ul className="space-y-2 text-sm text-foreground/80 ml-6">
                      {topic.items.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            {importantDatesTitle}
          </h2>
          <div className="space-y-3">
            {dates.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row md:justify-between p-4 bg-white rounded-lg border-l-4 border-gold-accent"
              >
                <span className="font-bold text-primary mb-1 md:mb-0">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="underline underline-offset-2 hover:text-primary/80"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    item.label
                  )}
                </span>
                <FormattedDate
                  text={item.date}
                  className="text-foreground/70"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            {authorGuidelinesTitle}
          </h2> */}
          {/*
          <InfoBlock type="highlight">
            {renderBulletList(authorGuidelines, "text-justify")}
          </InfoBlock>
          */}
          <div className="text-center">
            <p className="text-foreground/80 mb-6 whitespace-pre-line text-justify">
              {ctaText}
            </p>
            <CTAButton href="/contact" variant="primary">
              {contactButtonText}
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
