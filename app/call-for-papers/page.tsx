import { HeroSection } from "@/components/hero-section";
import { CTAButton } from "@/components/cta-button";
import { InfoBlock } from "@/components/info-block";
import { getCallForPapersContent } from "@/lib/call-for-papers-content";

const cfpContent = getCallForPapersContent();

export const metadata = {
  title: cfpContent.title,
  description: cfpContent.description,
};

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
    authorGuidelinesTitle,
    contactButtonText,
    generalGuidelines,
    acceptedPapers,
    topics,
    dates,
    authorGuidelines,
    ctaText,
  } = cfpContent;

  return (
    <main>
      <HeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        backgroundImage={heroImage}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <InfoBlock title={noticeTitle} type="highlight">
            <p>{noticeBody}</p>
          </InfoBlock>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            {submissionGuidelinesTitle}
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {generalGuidelinesTitle}
              </h3>
              <p className="text-foreground/80 whitespace-pre-line">
                {generalGuidelines}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {acceptedPapersTitle}
              </h3>
              <p className="mb-4 whitespace-pre-line">{acceptedPapers}</p>
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

      <section className="py-16 md:py-24 bg-light-gray">
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
                  {item.label}
                </span>
                <span className="text-foreground/70">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            {authorGuidelinesTitle}
          </h2>
          <InfoBlock type="highlight">
            <p className="whitespace-pre-line">{authorGuidelines}</p>
          </InfoBlock>

          <div className="mt-12 text-center">
            <p className="text-foreground/80 mb-6 whitespace-pre-line">
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
