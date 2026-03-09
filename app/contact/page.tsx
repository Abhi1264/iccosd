import { HeroSection } from "@/components/hero-section";
import { Mail, Phone, MapPin } from "lucide-react";
import { getContactContent } from "@/lib/contact-content";
import { MarkdownContent } from "@/components/markdown-content";

const contactContent = getContactContent();

export const metadata = {
  title: contactContent.title,
  description: contactContent.description,
};

export default function Contact() {
  const {
    heroTitle,
    heroSubtitle,
    heroImage,
    contactInfoTitle,
    generalInquiriesTitle,
    keyContactsTitle,
    sendMessageTitle,
    addressLabel,
    emailLabel,
    phoneLabel,
    formLabels,
    formPlaceholders,
    submitButtonText,
    responseTimeText,
    mainEmail,
    mainPhone,
    organizingContacts,
    secretaries,
    department,
    quickContacts,
    content,
  } = contactContent;

  return (
    <main>
      <HeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        backgroundImage={heroImage}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">
                {contactInfoTitle}
              </h2>

              <div className="space-y-8">
                {/* General */}
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {generalInquiriesTitle}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <MapPin className="w-6 h-6 text-gold-accent shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-foreground">
                          {addressLabel}
                        </p>
                        <p className="text-foreground/70">
                          {department?.name}
                          <br />
                          {department?.institution}
                          <br />
                          {department?.city}, {department?.state}-
                          {department?.pincode}, {department?.country}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Mail className="w-6 h-6 text-gold-accent shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-foreground">
                          {emailLabel}
                        </p>
                        <a
                          href={`mailto:${mainEmail}`}
                          className="text-primary hover:text-gold-accent transition-colors"
                        >
                          {mainEmail}
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Phone className="w-6 h-6 text-gold-accent shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-foreground">
                          {phoneLabel}
                        </p>
                        <p className="text-foreground/70">{mainPhone}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Contacts */}
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {keyContactsTitle}
                  </h3>
                  <div className="space-y-3 text-foreground/80">
                    {organizingContacts.map((c) => (
                      <div key={c.role}>
                        <p className="font-bold text-primary">{c.role}</p>
                        <p>
                          {c.name}: {c.phone}
                        </p>
                      </div>
                    ))}
                    {secretaries.map((s) => (
                      <div key={s.name}>
                        <p className="font-bold text-primary">{s.title}</p>
                        <p>
                          {s.name}: {s.phone}
                        </p>
                      </div>
                    ))}
                    {quickContacts.map((q) => (
                      <div key={q.category}>
                        <p className="font-bold text-primary">{q.category}</p>
                        <p>
                          {q.person}: {q.phone}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">
                {sendMessageTitle}
              </h2>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">
                    {formLabels.fullName}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-accent focus:ring-2 focus:ring-gold-accent/20"
                    placeholder={formPlaceholders.fullName}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary mb-2">
                    {formLabels.emailAddress}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-accent focus:ring-2 focus:ring-gold-accent/20"
                    placeholder={formPlaceholders.emailAddress}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary mb-2">
                    {formLabels.subject}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-accent focus:ring-2 focus:ring-gold-accent/20"
                    placeholder={formPlaceholders.subject}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary mb-2">
                    {formLabels.message}
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-accent focus:ring-2 focus:ring-gold-accent/20 resize-none"
                    rows={6}
                    placeholder={formPlaceholders.message}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-[#D4A574] text-[#0D5B6F] font-bold rounded-lg hover:bg-[#B89A60] transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  {submitButtonText}
                </button>
              </form>

              <p className="text-sm text-foreground/70 mt-4 text-center">
                {responseTimeText}
              </p>
            </div>
          </div>

          {/* Department Information */}
          <div className="mt-12 p-8 bg-light-gray rounded-lg border-l-4 border-gold-accent">
            <h3 className="text-2xl font-bold text-primary mb-4">
              {department?.name}
            </h3>
            <MarkdownContent content={content} />
          </div>
        </div>
      </section>
    </main>
  );
}
