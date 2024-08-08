import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "../ui/slider";
import { IGym } from "@/lib/types";
import { useFilters } from "@/hooks/filtersContext";
import {
  MAX_AIRBNB_DISTANCE_TO_START,
  MIN_AIRBNB_DISTANCE_TO_START,
} from "@/lib/constants";
import { useEffect, useMemo, useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Badge } from "../ui/badge";
import { extractRepeatedLocations } from "@/lib/utils";
import Disclaimer from "../Disclaimer";

interface IGymFilters {
  gyms: IGym[];
}

const Filters = ({ gyms }: IGymFilters) => {
  const { filters, updateLocations, updateStars } = useFilters();

  const [locations, setLocations] = useState<string[]>([]);

  const uniqueLocations = useMemo(() => {
    const gymLocations = gyms.map((gym) => gym.location);
    const filteredLocations = extractRepeatedLocations(gymLocations);
    return filteredLocations.sort();
  }, [gyms]);

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
                <Label htmlFor="costPd">{`Stars`}</Label>
                <Badge>{`> ${filters.stars} stars`}</Badge>
              </div>

              <div>
                <Slider
                  id="stars"
                  defaultValue={[0, 3]}
                  value={[filters.stars]}
                  onValueChange={(value) => updateStars(value[0])}
                  max={5}
                  min={1}
                  step={0.1}
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
        <CardFooter>
          <Disclaimer />
        </CardFooter>
      </Card>
    </div>
  );
};

export default Filters;
