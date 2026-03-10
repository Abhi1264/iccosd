import { HeroSection } from "@/components/hero-section";
import { getKeynoteSpeakersContent } from "@/lib/keynote-speakers-content";

const keynoteContent = getKeynoteSpeakersContent();

export const metadata = {
  title: keynoteContent.title,
  description: keynoteContent.description,
};

export default function KeynoteSpeakers() {
  const { heroTitle, heroSubtitle, heroImage } = keynoteContent;

  return (
    <main>
      <HeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        backgroundImage={heroImage}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="p-8 rounded-lg border-l-4 border-gold-accent">
            <p className="text-center text-foreground/80 text-lg">
              Our distinguished keynote speakers will be revealed soon. Please
              check back later.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
