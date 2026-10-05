import Image from "next/image";
import { HeroSection } from "@/components/hero-section";
import { siteConfig } from "@/content/site-config";

const keynoteContent = siteConfig.keynoteSpeakers;

export const metadata = {
  title: keynoteContent.title,
  description: keynoteContent.description,
};

export default function KeynoteSpeakers() {
  const { heroTitle, heroSubtitle, heroImage, featuredSpeakers } =
    keynoteContent;

  return (
    <main>
      <HeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        backgroundImage={heroImage}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-primary mb-2 text-center">
            Keynote &amp; Invited Speakers
          </h2>
          <p className="text-center text-foreground/60 mb-12">
            Distinguished experts from leading institutions worldwide
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredSpeakers.map((speaker) => (
              <div
                key={speaker.name}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4 rounded-full overflow-hidden border-4 border-gold-accent shadow-md group-hover:shadow-lg transition-shadow">
                  <Image
                    src={speaker.imageUrl}
                    alt={speaker.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 128px, 160px"
                  />
                </div>
                <h3 className="text-sm md:text-base font-bold text-primary leading-tight">
                  {speaker.name}
                </h3>
                <p className="text-xs md:text-sm text-foreground/70 mt-1">
                  {speaker.position}
                </p>
                <p className="text-xs text-gold-accent font-medium mt-0.5">
                  {speaker.affiliation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
