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
          backgroundSize: "1536px auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {title && (
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-balance drop-shadow-md mb-4">
            {title}
          </h1>
        )}
        {heroTagline && (
          <div className="inline-block px-6 py-2 bg-yellow-500 text-white text-xl font-bold rounded-full">
            {heroTagline}
          </div>
        )}
        {subtitle && (
          <p className="text-xl md:text-2xl font-bold drop-shadow-md text-balance my-4 whitespace-pre-line">
            {subtitle}
          </p>
        )}
        {organizedBy && (
          <p className="text-lg md:text-xl font-semibold drop-shadow-lg mb-6 whitespace-pre-line">
            Organized by {organizedBy}
          </p>
        )}
        {ctaText && <CTAButton href={ctaLink}>{ctaText}</CTAButton>}
      </div>
    </section>
  );
}
