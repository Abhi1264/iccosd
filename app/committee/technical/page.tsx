import { HeroSection } from "@/components/hero-section";
import { getTechnicalCommitteeContent } from "@/lib/committee-technical-content";

const technicalContent = getTechnicalCommitteeContent();

export const metadata = {
  title: technicalContent.title,
  description: technicalContent.description,
};

export default function TechnicalCommittee() {
  const { heroTitle, heroSubtitle, heroImage, intro, members, note } =
    technicalContent;

  return (
    <main>
      <HeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        backgroundImage={heroImage}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-8 text-center">
            <p className="text-lg text-foreground/80">{intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {members.map((member, idx) => (
              <div
                key={idx}
                className="p-4 bg-light-gray rounded-lg border-l-4 border-gold-accent hover:shadow-md transition-shadow"
              >
                <p className="text-foreground font-medium">{member}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-lg border-l-4 border-gold-accent">
            <p className="text-foreground/80">{note}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
