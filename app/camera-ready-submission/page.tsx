import Image from "next/image";
import { HeroSection } from "@/components/hero-section";
import { CTAButton } from "@/components/cta-button";
import { InfoBlock } from "@/components/info-block";
import { siteConfig } from "@/content/site-config";
import { renderTextWithStrikethroughSegments } from "@/lib/formatted-date";

const content = siteConfig.submission;
const cfp = siteConfig.callForPapers;

export const metadata = {
  title: content.title,
  description: content.description,
};

const textLinkClass =
  "text-primary underline underline-offset-2 hover:text-primary/80";

export default function Submission() {
  return (
    <main>
      <HeroSection
        title={content.heroTitle}
        subtitle={content.heroSubtitle}
        backgroundImage={content.heroImage}
        backgroundImageMobile={content.heroImageUrlMobile}
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          <InfoBlock title={content.paperSizeTitle}>
            <p className="text-justify">
              {renderTextWithStrikethroughSegments(content.paperSize)}
            </p>
          </InfoBlock>

          <InfoBlock title={content.templateTitle}>
            <p className="text-justify">{content.templateBody}</p>
            <p className="flex flex-wrap gap-x-4 gap-y-2">
              {content.templates.map((template) => (
                <a
                  key={template.href}
                  href={template.href}
                  target={template.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    template.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={textLinkClass}
                >
                  {template.label}
                </a>
              ))}
            </p>
          </InfoBlock>

          <InfoBlock title={content.stepsTitle}>
            <p className="text-justify">{content.step}</p>
            <p className="text-justify">{content.cmtLead}</p>
            <p>
              {content.cmtHelp}{" "}
              <a href={`mailto:${siteConfig.footer.email}`} className={textLinkClass}>
                {siteConfig.footer.email}
              </a>
            </p>
          </InfoBlock>
          <CTAButton href={cfp.registrationLink} newTab>
            {content.cmtButton}
          </CTAButton>

          <InfoBlock title={content.qrTitle}>
            <div className="flex flex-col items-center">
              <Image
                src={cfp.registrationQrCode}
                alt="CMT submission QR code"
                width={144}
                height={144}
                className="w-36 h-36"
              />
              <p className="text-sm text-foreground/80">{content.qrCaption}</p>
            </div>
          </InfoBlock>

          <p className="text-foreground/80 leading-relaxed text-justify">
            {siteConfig.cmtAcknowledgement.body}
          </p>

          <InfoBlock title={content.policyTitle}>
            <p className="text-justify">{content.policyBody}</p>
          </InfoBlock>

          <InfoBlock title={content.plagiarismTitle}>
            <p className="text-justify">{content.plagiarismBody}</p>
            <p className="text-justify">
              {renderTextWithStrikethroughSegments(content.plagiarismCheck)}
            </p>
          </InfoBlock>
        </div>
      </section>
    </main>
  );
}
