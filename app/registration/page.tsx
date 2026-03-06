import { HeroSection } from "@/components/hero-section";
import { InfoBlock } from "@/components/info-block";
import { getRegistrationContent } from "@/lib/registration-content";

const registrationContent = getRegistrationContent();

export const metadata = {
  title: registrationContent.title,
  description: registrationContent.description,
};

export default function Registration() {
  const {
    heroTitle,
    heroSubtitle,
    heroImage,
    noticeTitle,
    noticeBody,
    introHeading,
    introBody,
  } = registrationContent;

  return (
    <main>
      <HeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        backgroundImage={heroImage}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <InfoBlock title={noticeTitle} type="highlight">
            <p>{noticeBody}</p>
          </InfoBlock>

          <div className="mt-12 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                {introHeading}
              </h2>
              <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                {introBody}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Registration Categories
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary">
                      <th className="border border-gray-300 px-4 py-3 text-left">
                        Category
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-center">
                        Indian (IEEE Member)
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-center">
                        Indian (Non-IEEE)
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-center">
                        Foreign (IEEE Member)
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-center">
                        Foreign (Non-IEEE)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-yellow-100">
                      <td className="border border-gray-300 px-4 py-3 font-bold">
                        Student
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        ₹7,000
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        ₹8,000
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        US $180
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        US $200
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-3 font-bold">
                        Academician
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        ₹9,000
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        ₹10,000
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        US $240
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        US $250
                      </td>
                    </tr>
                    <tr className="bg-yellow-100">
                      <td className="border border-gray-300 px-4 py-3 font-bold">
                        Industry Professional
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        ₹11,000
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        ₹12,000
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        US $290
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        US $300
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-3 font-bold">
                        Attendee Only
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        ₹4,000
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        ₹4,000
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        US $100
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        US $100
                      </td>
                    </tr>
                    <tr className="bg-yellow-100">
                      <td className="border border-gray-300 px-4 py-3 font-bold">
                        Additional Paper
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        ₹4,000
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        ₹4,000
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        US $100
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        US $100
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <InfoBlock
              title="Important Registration Information"
              type="highlight"
            >
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-gold-accent font-bold shrink-0">•</span>
                  <span>
                    The registration fee includes conference materials, meals,
                    and certificate of participation.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-accent font-bold shrink-0">•</span>
                  <span>
                    IEEE members must provide proof of active membership during
                    registration to avail the discount.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-accent font-bold shrink-0">•</span>
                  <span>
                    At least one author of each accepted paper must register to
                    present the work.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-accent font-bold shrink-0">•</span>
                  <span>
                    Participation certificate will be awarded to all registered
                    participants.
                  </span>
                </li>
              </ul>
            </InfoBlock>

            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Registration Contact
              </h2>
              <div className="bg-light-gray p-6 rounded-lg">
                <p className="text-foreground/80 mb-4">
                  For registration inquiries and support, please contact:
                </p>
                <ul className="space-y-2 text-foreground/80">
                  <li>
                    <strong>Registration Officer:</strong> Dr. Rupesh Kumar
                    Sinha
                  </li>
                  <li>
                    <strong>Email:</strong> rupesh@bitmesra.ac.in
                  </li>
                  <li>
                    <strong>Phone:</strong> +91-6203905197
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
