import { HeroSection } from "@/components/hero-section";
import { getOrganizingCommitteeContent } from "@/lib/committee-organizing-content";

const organizingContent = getOrganizingCommitteeContent();

export const metadata = {
  title: organizingContent.title,
  description: organizingContent.description,
};

export default function OrganizingCommittee() {
  const {
    heroTitle,
    heroSubtitle,
    heroImage,
    committee,
    publicity,
    accommodation,
    registration,
  } = organizingContent;

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
            {Object.entries(committee).map(([section, members]) => (
              <div key={section}>
                <h2 className="text-2xl font-bold text-primary mb-6 capitalize">
                  {section.replace(/([A-Z])/g, " $1").trim()}
                </h2>
                <div className="space-y-4">
                  {members.map((member, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-light-gray rounded-lg border-l-4 border-gold-accent hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <p className="text-sm font-semibold text-gold-accent uppercase tracking-wide">
                            {member.title}
                          </p>
                          <h3 className="text-lg font-bold text-primary mt-1">
                            {member.name}
                          </h3>
                        </div>
                        <p className="text-sm text-foreground/70 md:text-right">
                          {member.position}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                Publicity and Media Committee Chair
              </h2>
              <div className="space-y-4">
                {publicity.map((member, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-light-gray rounded-lg border-l-4 border-teal-accent"
                  >
                    <h3 className="font-bold text-primary">{member.name}</h3>
                    <p className="text-sm text-foreground/70">
                      {member.position}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                Accommodation and Transport Committee Chair
              </h2>
              <div className="space-y-4">
                {accommodation.map((member, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-light-gray rounded-lg border-l-4 border-teal-accent"
                  >
                    <h3 className="font-bold text-primary">{member.name}</h3>
                    <p className="text-sm text-foreground/70">
                      {member.position}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                Registration and Hospitality Committee Chair
              </h2>
              <div className="space-y-4">
                {registration.map((member, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-light-gray rounded-lg border-l-4 border-teal-accent"
                  >
                    <h3 className="font-bold text-primary">{member.name}</h3>
                    <p className="text-sm text-foreground/70">
                      {member.position}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
