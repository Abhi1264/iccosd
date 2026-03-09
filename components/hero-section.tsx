import { CTAButton } from "@/components/cta-button";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  heroTagline?: string;
  ctaText?: string;
  ctaLink?: string;
  overlayOpacity?: number;
}

export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  heroTagline = "",
  ctaText,
  ctaLink = "#",
  overlayOpacity = 0.4,
}: HeroSectionProps) {
  return (
    <section
      className="relative h-198 md:h-190 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,${overlayOpacity}), rgba(0,0,0,0.6))`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="inline-block px-6 py-2 bg-yellow-500 text-white text-xl font-bold rounded-full mb-6">
          {heroTagline}
        </div>
        <h1 className="text-5xl font-bold mb-4 leading-tight text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/90 mb-8 text-balance">
            {subtitle}
          </p>
        )}
        {ctaText && <CTAButton href={ctaLink}>{ctaText}</CTAButton>}
      </div>
    </section>
  );
}
