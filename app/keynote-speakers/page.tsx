import { HeroSection } from "@/components/hero-section";
import { getKeynoteSpeakersContent } from "@/lib/keynote-speakers-content";

const keynoteContent = getKeynoteSpeakersContent();

export const metadata = {
  title: keynoteContent.title,
  description: keynoteContent.description,
};

export default function KeynoteSpeakers() {
  const { heroTitle, heroSubtitle, heroImage, sections } = keynoteContent;

  const accentClasses = {
    gold: {
      border: "border-gold-accent",
      roleText: "text-gold-accent",
      bg: "bg-light-gray",
    },
    teal: {
      border: "border-teal-accent",
      roleText: "text-teal-accent",
      bg: "bg-light-gray",
    },
    blue: {
      border: "border-blue-500",
      roleText: "text-blue-600",
      bg: "bg-blue-50",
    },
    green: {
      border: "border-green-500",
      roleText: "text-green-600",
      bg: "bg-green-50",
    },
  } as const;

  return (
    <main>
      <HeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        backgroundImage={heroImage}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-12">
            {Object.values(sections).map((section) => {
              const accent = accentClasses[section.accentColor];
              return (
                <div key={section.heading}>
                  <h2 className="text-3xl font-bold text-primary mb-8">
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.speakers.map((speaker) => (
                      <div
                        key={`${speaker.role}-${speaker.name}`}
                        className={`p-6 ${accent.bg} rounded-lg border-l-4 ${accent.border}`}
                      >
                        <p
                          className={`text-sm font-semibold uppercase tracking-wide mb-2 ${accent.roleText}`}
                        >
                          {speaker.role}
                        </p>
                        <h3 className="text-lg font-bold text-primary mb-1">
                          {speaker.name}
                        </h3>
                        <p className="text-foreground/70">{speaker.position}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
