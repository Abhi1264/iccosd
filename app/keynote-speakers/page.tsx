import Image from "next/image";
import { HeroSection } from "@/components/hero-section";
import { getKeynoteSpeakersContent } from "@/lib/keynote-speakers-content";
import type { SpeakerAccent } from "@/lib/keynote-speakers-content";

const keynoteContent = getKeynoteSpeakersContent();

export const metadata = {
  title: keynoteContent.title,
  description: keynoteContent.description,
};

const accentClasses: Record<SpeakerAccent, string> = {
  gold: "border-gold-accent",
  teal: "border-teal-accent",
  blue: "border-blue-500",
  green: "border-green-500",
};

const accentTextClasses: Record<SpeakerAccent, string> = {
  gold: "text-gold-accent",
  teal: "text-teal-accent",
  blue: "text-blue-500",
  green: "text-green-500",
};

export default function KeynoteSpeakers() {
  const { heroTitle, heroSubtitle, heroImage, featuredSpeakers, sections } =
    keynoteContent;

  return (
    <main>
      <HeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        backgroundImage={heroImage}
      />

      {/* Featured Speakers Grid */}
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

      {/* Session-wise Speaker Sections */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
          {Object.values(sections).map((section) => (
            <div key={section.heading}>
              <h2
                className={`text-2xl font-bold text-primary mb-6 pb-2 border-b-2 ${accentClasses[section.accentColor]}`}
              >
                {section.heading}
              </h2>
              <div className="space-y-4">
                {section.speakers.map((speaker, idx) => (
                  <div
                    key={idx}
                    className={`p-6 rounded-lg border-l-4 ${accentClasses[section.accentColor]} hover:shadow-md transition-shadow bg-white`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <p
                          className={`text-sm font-semibold uppercase tracking-wide ${accentTextClasses[section.accentColor]}`}
                        >
                          {speaker.role}
                        </p>
                        <h3 className="text-lg font-bold text-primary mt-1">
                          {speaker.name}
                        </h3>
                      </div>
                      <p className="text-sm text-foreground/70 md:text-right">
                        {speaker.position}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
