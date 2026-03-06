import { HeroSection } from "@/components/hero-section";
import { TwoColumnSection } from "@/components/two-column-section";
import { InfoBlock } from "@/components/info-block";
import { MarkdownContent } from "@/components/markdown-content";
import Image from "next/image";
import { getAboutContent } from "@/lib/about-content";

const aboutContent = getAboutContent();

export const metadata = {
  title: aboutContent.title,
  description: aboutContent.description,
};

export default function About() {
  const { heroTitle, heroSubtitle, heroImage, highlights, content } =
    aboutContent;

  return (
    <main>
      <HeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        backgroundImage={heroImage}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <TwoColumnSection
            left={
              <div>
                <div className="inline-block px-4 py-2 bg-[#D4A574] text-[#0D5B6F] font-bold rounded-full mb-6">
                  BIT Mesra
                </div>
                <MarkdownContent content={content} />
              </div>
            }
            right={
              <Image
                src="/images/bit-mesra-campus.jpg"
                alt="BIT Mesra Campus"
                className="w-full rounded-lg shadow-lg"
                width={600}
                height={400}
              />
            }
          />
        </div>
      </section>

      {highlights.length > 0 && (
        <section className="py-16 md:py-24 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <InfoBlock title="Conference Highlights" type="highlight">
              <ul className="space-y-2">
                {highlights.map((item) => (
                  <li key={item.title} className="flex gap-2">
                    <span className="text-gold-accent font-bold">•</span>
                    <span>
                      <strong>{item.title}:</strong> {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </InfoBlock>
          </div>
        </section>
      )}
    </main>
  );
}
