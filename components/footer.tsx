import { Mail, Phone, ExternalLink } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { FormattedDate } from "@/lib/formatted-date";
import { IntentLink } from "@/components/intent-link";

export function Footer() {
  const footerData = siteConfig.footer;

  return (
    <footer className="bg-neutral-900 text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">

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


        <div className="border-t border-white/10 my-10" />


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div>
            <h4 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">
              Important Dates
            </h4>
            <ul className="space-y-3">
              {footerData.importantDates.map((date) => (
                <li key={date.label} className="text-xs">
                  <div className="text-white/60">
                    {"href" in date && date.href ? (
                      <IntentLink
                        href={date.href}
                        className="hover:text-accent hover:underline underline-offset-2"
                      >
                        {date.label}
                      </IntentLink>
                    ) : (
                      date.label
                    )}
                  </div>
                  <FormattedDate
                    text={date.value}
                    className="text-white/90 font-medium text-sm mt-0.5 block"
                  />
                </li>
              ))}
            </ul>
          </div>


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

      </div>


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
