import { HeroSection } from "@/components/hero-section";
import { MapPin, Plane, Train, Car } from "lucide-react";
import { getDirectionsContent } from "@/lib/directions-content";

const directionsContent = getDirectionsContent();

export const metadata = {
  title: directionsContent.title,
  description: directionsContent.description,
};

export default function Directions() {
  const {
    heroTitle,
    heroSubtitle,
    heroImage,
    intro,
    transportTitles,
    locationTitle,
    distanceTitle,
    accommodationTitle,
    byAir,
    byTrain,
    byRoad,
    localTransport,
    location,
    distances,
    accommodation,
  } = directionsContent;
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

          {/* Embedded Map */}
          <div className="mb-12 rounded-lg overflow-hidden border border-gray-200 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8860.198380764401!2d85.43843282694293!3d23.415091825241728!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4fb53f0c27be7%3A0x66180c1cf3c5e704!2sBirla%20Institute%20of%20Technology%20-%20Mesra!5e0!3m2!1sen!2sin!4v1773163182875!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BIT Mesra - Map Location"
              className="w-full h-[450px] min-w-0"
            />
          </div>

          {/* Transportation Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* By Air */}
            <div className="p-8 rounded-lg border-l-4 border-gold-accent hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Plane className="w-8 h-8 text-gold-accent" />
                <h3 className="text-2xl font-bold text-primary">
                  {transportTitles.byAir}
                </h3>
              </div>
              <p className="space-y-3 text-foreground/80 whitespace-pre-line">
                {byAir}
              </p>
            </div>

            {/* By Train */}
            <div className="p-8 rounded-lg border-l-4 border-teal-accent hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Train className="w-8 h-8 text-teal-accent" />
                <h3 className="text-2xl font-bold text-primary">
                  {transportTitles.byTrain}
                </h3>
              </div>
              <p className="space-y-3 text-foreground/80 whitespace-pre-line">
                {byTrain}
              </p>
            </div>

            {/* By Road */}
            <div className="p-8 rounded-lg border-l-4 border-gold-accent hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Car className="w-8 h-8 text-gold-accent" />
                <h3 className="text-2xl font-bold text-primary">
                  {transportTitles.byRoad}
                </h3>
              </div>
              <p className="space-y-3 text-foreground/80 whitespace-pre-line">
                {byRoad}
              </p>
            </div>

            {/* Local Transport */}
            <div className="p-8 rounded-lg border-l-4 border-teal-accent hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-8 h-8 text-teal-accent" />
                <h3 className="text-2xl font-bold text-primary">
                  {transportTitles.localTransport}
                </h3>
              </div>
              <p className="space-y-3 text-foreground/80 whitespace-pre-line">
                {localTransport}
              </p>
            </div>
          </div>

          {/* Location Information */}
          <div className="bg-gold-accent/10 border-l-4 border-gold-accent p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-primary mb-4">
              {locationTitle}
            </h3>
            <p className="space-y-3 text-foreground/80 whitespace-pre-line">
              {location}
            </p>
          </div>

          {/* Distance Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">{distanceTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {distances.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-gold-accent/20"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-primary">{item.city}</span>
                    <span className="text-foreground/70">{item.distance}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Accommodation */}
          <div className="mt-12 p-8 rounded-lg border-l-4 border-teal-accent">
            <h3 className="text-2xl font-bold text-primary mb-4">
              {accommodationTitle}
            </h3>
            <p className="text-foreground/80 whitespace-pre-line">
              {accommodation}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
