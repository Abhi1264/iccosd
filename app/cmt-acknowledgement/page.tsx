import { HeroSection } from "@/components/hero-section";
import { siteConfig } from "@/content/site-config";

const cmtContent = siteConfig.cmtAcknowledgement;

export const metadata = {
  title: cmtContent.title,
  description: cmtContent.description,
};

export default function CMTAcknowledgement() {
  const { heroTitle, heroSubtitle, heroImage, heroImageUrlMobile, body } =
    cmtContent;

  return (
    <main>
      <HeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        backgroundImage={heroImage}
        backgroundImageMobile={heroImageUrlMobile}
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-foreground/80 text-justify text-lg leading-relaxed">
            {body}
          </p>
        </div>
      </section>
    </main>
  );
}
