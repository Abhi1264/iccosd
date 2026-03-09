import { siteConfig } from "@/content/site-config";

export interface DistanceInfo {
  city: string;
  distance: string;
}

export interface DirectionsContent {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  intro: string;
  transportTitles: {
    byAir: string;
    byTrain: string;
    byRoad: string;
    localTransport: string;
  };
  locationTitle: string;
  distanceTitle: string;
  accommodationTitle: string;
  byAir: string;
  byTrain: string;
  byRoad: string;
  localTransport: string;
  location: string;
  distances: DistanceInfo[];
  accommodation: string;
}

export function getDirectionsContent(): DirectionsContent {
  const directions = siteConfig.directions;
  return {
    ...directions,
    distances: [...directions.distances],
  };
}
