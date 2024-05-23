export const extractRepeatedLocations = (addresses: string[]): string[] => {
  // Object to keep track of location occurrence counts
  const locationCounts: Record<string, number> = {};

  addresses.forEach((address) => {
    const parts = address.split(",").map((part) => part.trim()); // Split by comma and trim spaces
    if (parts.length >= 3) {
      const location = parts[parts.length - 3]; // Get the third-last component
      if (locationCounts.hasOwnProperty(location)) {
        locationCounts[location]++;
      } else {
        locationCounts[location] = 1;
      }
    }
  });

  // Filter locations to find those that appear more than once
  const repeatedLocations = Object.keys(locationCounts).filter(
    (location) => locationCounts[location] > 1
  );

  return repeatedLocations;
};
