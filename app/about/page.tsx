import { HeroSection } from "@/components/hero-section";
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
    aboutBitMesraTitle,
    aboutBitMesraImageCaption,
    aboutBitMesraBody,
    aboutConferenceTitle,
    aboutConferenceBody,
  } = aboutContent;

  return (
    <main>
      <HeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        backgroundImage={heroImage}
        heroTagline=""
      />

      {/* Main content - dark background with gold headings, matching reference layout */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Section 1: About BIT Mesra */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              {aboutBitMesraTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                  <Image
                    src="/hero-conference.jpg"
                    alt={aboutBitMesraImageCaption}
                    width={360}
                    height={430}
                    className="w-full h-auto object-cover rounded-md"
                    sizes="(max-width: 768px) 100vw, 360px"
                    draggable={false}
                  />
                <p className="text-white/80 text-sm mt-3 italic">
                  {aboutBitMesraImageCaption}
                </p>
              </div>
              <div className="md:col-span-2">
                <MarkdownContent
                  content={aboutBitMesraBody}
                  className="prose-invert prose-p:text-white/90 prose-headings:text-white prose-strong:text-white"
                />
              </div>
            </div>
          </div>

          {/* Section 2: About ICCoSD */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gold-accent mb-8">
              {aboutConferenceTitle}
            </h2>
              <MarkdownContent
                content={aboutConferenceBody}
                className="prose-invert prose-p:text-white/90 prose-headings:text-white prose-strong:text-gold-accent"
              />
          </div>
        </div>
      </section>
    </main>
  );
}
