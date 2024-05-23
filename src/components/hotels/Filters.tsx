import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "../ui/slider";
import { IHotel } from "@/lib/types";
import { useFilters } from "@/hooks/filtersContext";
import {
  MAX_AIRBNB_DISTANCE_TO_START,
  MIN_AIRBNB_DISTANCE_TO_START,
  NUMBER_OF_BEDROOMS,
} from "@/lib/constants";
import { useEffect, useMemo, useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Badge } from "../ui/badge";
import { extractRepeatedLocations } from "@/lib/hotels";

interface IHotelFilters {
  hotels: IHotel[];
}

const Filters = ({ hotels }: IHotelFilters) => {
  const {
    filters,
    updateDistanceToStart,
    updateLocations,
    updateNoOfBedrooms,
  } = useFilters();

  const [locations, setLocations] = useState<string[]>([]);
  const [bedrooms, setBedrooms] = useState<number[]>([]);

  const uniqueLocations = useMemo(() => {
    const hotelLocations = hotels.map((hotel) => hotel.location);
    const filteredLocations = extractRepeatedLocations(hotelLocations);
    return filteredLocations.sort();
  }, [hotels]);

  useEffect(() => {
    const allLocations: string[] = [...locations, ...uniqueLocations];
    const filteredLocations = Array.from(
      new Set(allLocations.map((property) => property))
    ).sort();

    setLocations(filteredLocations);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uniqueLocations]);

  return (
    <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
      <Card className="sticky top-8">
        <CardHeader>
          <p className="text-xl font-semibold tracking-tight">Filters</p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <div className="flex justify-between w-full">
                <Label htmlFor="costPd">{`Distance from start`}</Label>
                <Badge>{`< ${filters.distanceToStart[0] / 1000} kms`}</Badge>
              </div>

              <div>
                <Slider
                  id="distanceToStartPointApprox"
                  defaultValue={[MAX_AIRBNB_DISTANCE_TO_START]}
                  value={filters.distanceToStart}
                  onValueChange={(value) => updateDistanceToStart(value)}
                  max={MAX_AIRBNB_DISTANCE_TO_START}
                  min={MIN_AIRBNB_DISTANCE_TO_START}
                  step={100}
                />
              </div>
            </div>
            <div className="grid gap-3">
              <div className="flex justify-between w-full">
                <Label>{`Locations`}</Label>
                <Badge>
                  {filters.locations.length > 0
                    ? filters.locations.length
                    : "All"}
                </Badge>
              </div>

              <div className="grid gap-3">
                {locations.map((location) => (
                  <div className="flex items-center space-x-2" key={location}>
                    <Checkbox
                      name="locations"
                      checked={filters.locations.includes(location)}
                      onCheckedChange={(value) =>
                        updateLocations(value, location)
                      }
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {location}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Filters;
