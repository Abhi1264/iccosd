import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { InfoBlock } from "@/components/info-block";
import {
  getRegistrationContent,
  type RegistrationTextPart,
} from "@/lib/registration-content";

function ProcessText({ parts }: { parts: RegistrationTextPart[] }) {
  return parts.map((part, index) => {
    if (!part.href) {
      return <span key={`${part.text}-${index}`}>{part.text}</span>;
    }

    const className =
      "font-semibold text-primary underline underline-offset-2 hover:text-primary/80";

    if (part.href.startsWith("http")) {
      return (
        <a
          key={`${part.text}-${index}`}
          href={part.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {part.text}
        </a>
      );
    }

    return (
      <Link
        key={`${part.text}-${index}`}
        href={part.href}
        className={className}
      >
        {part.text}
      </Link>
    );
  });
}

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
    processTitle,
    processSteps,
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

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <InfoBlock title={noticeTitle} type="highlight">
            <p className="text-justify">{noticeBody}</p>
          </InfoBlock>

          <div className="mt-12 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                {introHeading}
              </h2>
              <p className="text-lg text-foreground/80 mb-4 leading-relaxed text-justify">
                {introBody}
              </p>
            </div>

            <div id="registration-process" className="scroll-mt-28">
              <h2 className="text-3xl font-bold text-primary mb-6">
                {processTitle}
              </h2>
              <ol className="list-decimal ml-6 space-y-3 text-lg text-foreground/80 marker:font-bold marker:text-gold-accent">
                {processSteps.map((step) => (
                  <li
                    key={step.map((part) => part.text).join("")}
                    className="leading-relaxed pl-1"
                  >
                    <ProcessText parts={step} />
                  </li>
                ))}
              </ol>
            </div>

            <div id="registration-categories" className="scroll-mt-28">
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
                        {row.fees.map((fee, feeIdx) => (
                          <td
                            key={`${row.category}-${feeIdx}`}
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
              <div className="p-6 rounded-lg">
                <p className="text-foreground/80 mb-4 text-justify">
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
