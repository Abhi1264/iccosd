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

          {/* Transportation Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* By Air */}
            <div className="p-8 bg-light-gray rounded-lg border-l-4 border-gold-accent hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Plane className="w-8 h-8 text-gold-accent" />
                <h3 className="text-2xl font-bold text-primary">By Air</h3>
              </div>
              <p className="space-y-3 text-foreground/80 whitespace-pre-line">
                {byAir}
              </p>
            </div>

            {/* By Train */}
            <div className="p-8 bg-light-gray rounded-lg border-l-4 border-teal-accent hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Train className="w-8 h-8 text-teal-accent" />
                <h3 className="text-2xl font-bold text-primary">By Train</h3>
              </div>
              <p className="space-y-3 text-foreground/80 whitespace-pre-line">
                {byTrain}
              </p>
            </div>

            {/* By Road */}
            <div className="p-8 bg-light-gray rounded-lg border-l-4 border-gold-accent hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Car className="w-8 h-8 text-gold-accent" />
                <h3 className="text-2xl font-bold text-primary">By Road</h3>
              </div>
              <p className="space-y-3 text-foreground/80 whitespace-pre-line">
                {byRoad}
              </p>
            </div>

            {/* Local Transport */}
            <div className="p-8 bg-light-gray rounded-lg border-l-4 border-teal-accent hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-8 h-8 text-teal-accent" />
                <h3 className="text-2xl font-bold text-primary">
                  Local Transport
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
              BIT Mesra Location
            </h3>
            <p className="space-y-3 text-foreground/80 whitespace-pre-line">
              {location}
            </p>
          </div>

          {/* Distance Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">
              Distance from Major Cities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {distances.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-light-gray rounded-lg border border-gold-accent/20"
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
          <div className="mt-12 p-8 bg-light-gray rounded-lg border-l-4 border-teal-accent">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Accommodation
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
