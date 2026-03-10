import { CTAButton } from "@/components/cta-button";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage: string;
  backgroundImageMobile?: string;
  heroTagline?: string;
  organizedBy?: string;
  ctaText?: string;
  ctaLink?: string;
}

export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  backgroundImageMobile,
  heroTagline = "",
  organizedBy,
  ctaText,
  ctaLink = "#",
}: HeroSectionProps) {
  const mobileBg = backgroundImageMobile ?? backgroundImage;

  return (
    <section className="relative h-200 md:h-190 flex items-center justify-center overflow-hidden">
      {/* Mobile background */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: `url('${mobileBg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      {/* Desktop background */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {heroTagline && (
          <div className="inline-block px-6 py-2 bg-yellow-500 text-white text-xl font-bold rounded-full my-3">
            {heroTagline}
          </div>
        )}
        {title && (
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-balance drop-shadow-md">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="text-xl md:text-2xl font-bold drop-shadow-md text-balance my-8">
            {subtitle}
          </p>
        )}
        {organizedBy && (
          <p className="text-base md:text-lg font-semibold drop-shadow-lg mb-6">
            Organized by {organizedBy}
          </p>
        )}
        {ctaText && <CTAButton href={ctaLink}>{ctaText}</CTAButton>}
      </div>
    </section>
  );
}
