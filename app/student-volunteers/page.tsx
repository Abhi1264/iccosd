import { HeroSection } from "@/components/hero-section";
import { getStudentVolunteersContent } from "@/lib/student-volunteers-content";

const volunteersContent = getStudentVolunteersContent();

export const metadata = {
  title: volunteersContent.title,
  description: volunteersContent.description,
};

export default function StudentVolunteers() {
  const {
    heroTitle,
    heroSubtitle,
    heroImage,
    intro,
    volunteers,
    contributions,
  } = volunteersContent;

  return (
    <main>
      <HeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        backgroundImage={heroImage}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-12 text-center">
            <p className="text-lg text-foreground/80">{intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {volunteers.map((volunteer, idx) => (
              <div
                key={idx}
                className="p-5 bg-light-gray rounded-lg border-l-4 border-gold-accent hover:shadow-md transition-shadow text-center md:text-left"
              >
                <p className="text-lg font-semibold text-primary">
                  {volunteer}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-gold-accent">
            <h3 className="text-xl font-bold text-primary mb-4">
              Volunteer Contributions
            </h3>
            <p className="text-foreground/80 whitespace-pre-line">
              {contributions}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
