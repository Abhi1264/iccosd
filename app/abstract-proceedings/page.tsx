import { HeroSection } from "@/components/hero-section";
import { CTAButton } from "@/components/cta-button";
import { InfoBlock } from "@/components/info-block";
import { getAbstractProceedingsContent } from "@/lib/abstract-proceedings-content";

const proceedingsContent = getAbstractProceedingsContent();

export const metadata = {
  title: proceedingsContent.title,
  description: proceedingsContent.description,
};

export default function AbstractProceedings() {
  const {
    heroTitle,
    heroSubtitle,
    heroImage,
    intro,
    proceedingsTitle,
    aboutTitle,
    downloadTitle,
    downloadButtonText,
    downloadHelpText,
    publicationTitle,
    citationTitle,
    aboutProceedings,
    downloadSection,
    publication,
    note,
    citation,
  } = proceedingsContent;

  return (
    <main>
      <HeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        backgroundImage={heroImage}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="prose prose-invert max-w-none text-foreground/80">
              <div className="text-3xl font-bold text-primary mb-6">
                {proceedingsTitle}
              </div>
              <p className="text-lg">{intro}</p>
            </div>
          </div>

          <div className="space-y-8">
            <InfoBlock title={aboutTitle} type="highlight">
              <p className="whitespace-pre-line">{aboutProceedings}</p>
            </InfoBlock>

            <div className="bg-gold-accent/10 border-l-4 border-gold-accent p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {downloadTitle}
              </h3>
              <p className="text-foreground/80 mb-6 whitespace-pre-line">
                {downloadSection}
              </p>
              <div className="space-y-4">
                <CTAButton href="#" variant="primary">
                  {downloadButtonText}
                </CTAButton>
                <p className="text-sm text-foreground/70">{downloadHelpText}</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {publicationTitle}
              </h3>
              <ul className="space-y-3 text-foreground/80">
                {publication.map((item) => (
                  <li key={item.label} className="flex gap-3">
                    <span className="text-gold-accent font-bold shrink-0">
                      •
                    </span>
                    <span>
                      <strong>{item.label}:</strong> {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <InfoBlock type="notice">
              <p className="whitespace-pre-line">{note}</p>
            </InfoBlock>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {citationTitle}
              </h3>
              <div className="bg-light-gray p-4 rounded-lg font-mono text-sm text-foreground/70 overflow-x-auto">
                <pre className="whitespace-pre-wrap">{citation}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
