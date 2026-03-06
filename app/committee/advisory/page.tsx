import { HeroSection } from "@/components/hero-section";
import { getAdvisoryCommitteeContent } from "@/lib/committee-advisory-content";

const advisoryContent = getAdvisoryCommitteeContent();

export const metadata = {
  title: advisoryContent.title,
  description: advisoryContent.description,
};

export default function AdvisoryCommittee() {
  const {
    heroTitle,
    heroSubtitle,
    heroImage,
    intro,
    international,
    national,
    note,
  } = advisoryContent;

  return (
    <main>
      <HeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        backgroundImage={heroImage}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <p className="text-lg text-foreground/80 text-center mb-8">
              {intro}
            </p>
          </div>

          <div className="space-y-12">
            {/* International Advisory */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">
                International Advisory Committee
              </h2>
              <div className="space-y-3">
                {international.map((member, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-light-gray rounded-lg border-l-4 border-gold-accent hover:shadow-md transition-shadow"
                  >
                    <p className="text-foreground font-medium">{member}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* National Advisory */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">
                National Advisory Committee
              </h2>
              <div className="space-y-3">
                {national.map((member, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-light-gray rounded-lg border-l-4 border-teal-accent hover:shadow-md transition-shadow"
                  >
                    <p className="text-foreground font-medium">{member}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-lg border-l-4 border-gold-accent">
            <p className="text-foreground/80">{note}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
