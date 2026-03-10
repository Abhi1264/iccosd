// import Image from "next/image";
import { Mail, Phone, ExternalLink } from "lucide-react";
import { getFooterContent, type FooterConfig } from "@/lib/footer-content";
import { IntentLink } from "@/components/intent-link";

export function Footer() {
  let footerData: FooterConfig | null = null;

  try {
    footerData = getFooterContent();
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error loading footer content:", error.message);
    } else {
      console.error("Error loading footer content:", String(error));
    }
  }

  if (!footerData) {
    return null;
  }

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        {/* Top Section - About & Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-2 text-white">
              {footerData.siteName}
            </h3>
            <p className="text-sm text-white/80 mb-4 leading-relaxed">
              {footerData.siteTagline}
            </p>
            <p className="text-xs text-white/60 leading-relaxed">
              {footerData.address}
            </p>
          </div>

          {/* Footer Sections */}
          {footerData.footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <IntentLink
                      href={link.href}
                      className="link-underline text-xs text-white/70 hover:text-accent transition-colors duration-300"
                    >
                      {link.label}
                    </IntentLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* Middle Section - Important Dates & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Important Dates */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">
              Important Dates
            </h4>
            <ul className="space-y-3">
              {footerData.importantDates.map((date) => (
                <li key={date.label} className="text-xs">
                  <div className="text-white/60">{date.label}</div>
                  <div className="text-white/90 font-medium text-sm mt-0.5">
                    {date.value}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-accent mt-0.5 shrink-0 icon-hover" />
                <a
                  href={`mailto:${footerData.email}`}
                  className="link-underline text-white/70 hover:text-accent transition-colors duration-300 break-all"
                >
                  {footerData.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-accent mt-0.5 shrink-0 icon-hover" />
                <a
                  href={`tel:${footerData.phone.replace(/\D/g, "")}`}
                  className="link-underline text-white/70 hover:text-accent transition-colors duration-300"
                >
                  {footerData.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerData.quickLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <IntentLink
                    href={link.href}
                    className="link-underline text-xs text-white/70 hover:text-accent transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.title}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </IntentLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        {/* <div className="border-t border-white/10 my-10" /> */}

        {/* Acknowledgments Section */}
        {/* {footerData.acknowledgments.length > 0 && (
          <>
            <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-wider text-center">
              Acknowledgments & Partners
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {footerData.acknowledgments.map((ack) => (
                <a
                  key={ack.title}
                  href={ack.website}
                  target={ack.website.startsWith("http") ? "_blank" : undefined}
                  rel={
                    ack.website.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden flex items-center justify-center">
                    <Image
                      src={ack.imageUrl}
                      alt={ack.title}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-semibold text-white/80 group-hover:text-white transition-colors">
                      {ack.title}
                    </p>
                    <p className="text-xs text-white/50 mt-1">
                      {ack.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </>
        )} */}
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <p className="text-sm text-white/60 text-center">
            {footerData.copyright} | {footerData.departmentName}
          </p>
        </div>
      </div>
    </footer>
  );
}
