import { HeroSection } from "@/components/hero-section";
import { CTAButton } from "@/components/cta-button";
import { TwoColumnSection } from "@/components/two-column-section";
import { InfoBlock } from "@/components/info-block";
import Image from "next/image";
import { getHomeContent } from "@/lib/home-content";

const homeContent = getHomeContent();

export const metadata = {
  title: homeContent.title,
  description: homeContent.description,
};

export default function Home() {
  const {
    heroTagline,
    heroTitle,
    heroDate,
    heroCTA,
    heroCTALink,
    heroImageUrl,
    highlights,
    aboutTitle,
    aboutLead,
    aboutBody,
    themeSectionTitle,
    themeHeadline,
    themeDescription,
    homeDates,
    homeCtas,
    homeOrganizers,
  } = homeContent;

  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        title={heroTagline}
        subtitle={`${heroTitle} | ${heroDate}`}
        backgroundImage={heroImageUrl}
        ctaText={heroCTA}
        ctaLink={heroCTALink}
      />

      {/* Highlights Section */}
      <section className="py-16 md:py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
            Why Attend {heroTitle}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl font-bold text-gold-accent mb-2">
                  {item.stat}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {item.label}
                </h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <TwoColumnSection
            left={
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  {aboutTitle}
                </h2>
                <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                  {aboutLead}
                </p>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  {aboutBody}
                </p>
                <CTAButton href="/about" variant="primary">
                  Learn More About ICCoSD
                </CTAButton>
              </div>
            }
            right={
              <div className="space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
                  alt="Conference venue"
                  width={500}
                  height={400}
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-sm text-foreground/60 italic">
                  Venue: BIT Mesra, Ranchi - A deemed university with
                  world-class facilities
                </p>
              </div>
            }
          />
        </div>
      </section>

      {/* Conference Theme */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-6 py-2 bg-[#D4A574] text-[#0D5B6F] font-bold rounded-full mb-6">
              {themeSectionTitle}
            </div>
            <InfoBlock title={themeSectionTitle}>
              <p className="text-2xl md:text-3xl font-bold mb-4">
                {themeHeadline}
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                {themeDescription}
              </p>
            </InfoBlock>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 md:py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">
            Important Dates
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {homeDates.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row md:items-center md:justify-between p-4 bg-white rounded-lg border-l-4 border-gold-accent"
              >
                <span className="font-bold text-primary mb-2 md:mb-0">
                  {item.label}
                </span>
                <span className="text-foreground/70 text-lg">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeCtas.map((item, idx) => (
              <div
                key={idx}
                className="p-8 text-center bg-light-gray rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-foreground/70 mb-6">{item.description}</p>
                <CTAButton href={item.link} variant="primary">
                  {item.cta}
                </CTAButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizing Partners */}
      <section className="py-16 md:py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">
            Organized By
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {homeOrganizers.map((org, idx) => (
              <div key={org.name} className="text-center">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {org.code}
                </div>
                <p className="text-lg font-bold text-primary">{org.name}</p>
                <p className="text-sm text-foreground/70">{org.tagline}</p>
                {idx === 0 && <span className="sr-only">Organizer</span>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
