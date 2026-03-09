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
    categoriesTitle,
    registrationInfoTitle,
    registrationContactTitle,
    registrationContactIntro,
    tableHeaders,
    feeRows,
    registrationInfoPoints,
    registrationContactDetails,
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
                {categoriesTitle}
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary">
                      {tableHeaders.map((header, idx) => (
                        <th
                          key={header}
                          className={`border border-gray-300 px-4 py-3 ${
                            idx === 0 ? "text-left" : "text-center"
                          }`}
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {feeRows.map((row, idx) => (
                      <tr
                        key={row.category}
                        className={idx % 2 === 0 ? "bg-yellow-100" : "bg-white"}
                      >
                        <td className="border border-gray-300 px-4 py-3 font-bold">
                          {row.category}
                        </td>
                        {row.fees.map((fee) => (
                          <td
                            key={`${row.category}-${fee}`}
                            className="border border-gray-300 px-4 py-3 text-center"
                          >
                            {fee}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <InfoBlock title={registrationInfoTitle} type="highlight">
              <ul className="space-y-3">
                {registrationInfoPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="text-gold-accent font-bold shrink-0">
                      •
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </InfoBlock>

            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                {registrationContactTitle}
              </h2>
              <div className="bg-light-gray p-6 rounded-lg">
                <p className="text-foreground/80 mb-4">
                  {registrationContactIntro}
                </p>
                <ul className="space-y-2 text-foreground/80">
                  <li>
                    <strong>{registrationContactDetails.officerLabel}:</strong>{" "}
                    {registrationContactDetails.officerName}
                  </li>
                  <li>
                    <strong>{registrationContactDetails.emailLabel}:</strong>{" "}
                    {registrationContactDetails.email}
                  </li>
                  <li>
                    <strong>{registrationContactDetails.phoneLabel}:</strong>{" "}
                    {registrationContactDetails.phone}
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
