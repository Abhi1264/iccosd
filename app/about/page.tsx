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
  const {
    heroTitle,
    heroSubtitle,
    heroImage,
    badgeLabel,
    highlightsTitle,
    highlights,
    content,
  } = aboutContent;

  return (
    <main>
      <HeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        backgroundImage={heroImage}
        heroTagline={""}
      />

      <section className="pt-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <TwoColumnSection
            left={
              <div>
                <div className="inline-block px-4 py-2 bg-yellow-500 text-white font-bold rounded-full">
                  {badgeLabel}
                </div>
                <MarkdownContent content={content} />
              </div>
            }
            right={
              <Image
                src="/hero-conference.jpg"
                alt="BIT Mesra Campus"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
                width={420}
                height={280}
                sizes="(max-width: 768px) 100vw, 420px"
                draggable={false}
                priority
              />
            }
          />
        </div>
      </section>

      <section className="pb-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <InfoBlock title={highlightsTitle} type="highlight">
            <ul className="space-y-2">
              {highlights.map((item) => (
                <li key={item.title} className="flex gap-2">
                  <span className="font-bold">•</span>
                  <span>
                    <strong>{item.title}:</strong> {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </InfoBlock>
        </div>
      </section>
    </main>
  );
}
