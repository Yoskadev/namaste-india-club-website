import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const extractRepeatedLocations = (addresses: string[]): string[] => {
  // Object to keep track of location occurrence counts
  const locationCounts: Record<string, number> = {};

  addresses.forEach((address) => {
    const parts = address.split(",").map((part) => part.trim()); // Split by comma and trim spaces
    if (parts.length >= 2) {
      const location2 = parts[parts.length - 2]; // Get the third-last component
      if (locationCounts.hasOwnProperty(location2)) {
        locationCounts[location2]++;
      } else {
        locationCounts[location2] = 1;
      }

      const location3 = parts[parts.length - 3]; // Get the third-last component
      if (locationCounts.hasOwnProperty(location3)) {
        locationCounts[location3]++;
      } else {
        locationCounts[location3] = 1;
      }
    }
  });

  // Filter locations to find those that appear more than once
  const repeatedLocations = Object.keys(locationCounts).filter(
    (location) => locationCounts[location] > 1
  );

  return repeatedLocations;
};

export const getLocation = (address: string) => {
  const parts = address.split(",").map((part) => part.trim()); // Split by comma and trim spaces
  if (parts.length >= 3) {
    const location = parts[parts.length - 3]; // Get the third-last component
  }

  return parts.length >= 3 ? parts[parts.length - 3] : "N.A";
};
