import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "../ui/slider";
import { IRestaurant } from "@/lib/types";
import { useFilters } from "@/hooks/filtersContext";
import {
  MAX_AIRBNB_DISTANCE_TO_START,
  MIN_AIRBNB_DISTANCE_TO_START,
} from "@/lib/constants";
import { useEffect, useMemo, useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Badge } from "../ui/badge";
import { extractCuisines } from "@/lib/utils";
import { ScrollArea } from "../ui/scroll-area";
import Disclaimer from "../Disclaimer";

interface IRestaurantFilters {
  restaurants: IRestaurant[];
}

const Filters = ({ restaurants }: IRestaurantFilters) => {
  const { filters, updateStars, updateCuisines } = useFilters();

  const [cuisines, setCuisines] = useState<string[]>([]);

  const uniqueCuisines = useMemo(() => {
    const restaurantCuisines = restaurants.map(
      (restaurant) => restaurant.cuisine
    );
    const filteredCuisines = extractCuisines(restaurantCuisines);
    return filteredCuisines.sort();
  }, [restaurants]);

  useEffect(() => {
    const allCuisines: string[] = [...cuisines, ...uniqueCuisines];
    const filteredCuisines = Array.from(
      new Set(allCuisines.map((property) => property))
    ).sort();

    setCuisines(filteredCuisines);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uniqueCuisines]);

  return (
    <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
      <Disclaimer />
      <Card className="sticky top-8">
        <CardHeader>
          <p className="text-xl font-semibold tracking-tight">Filters</p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <div className="flex justify-between w-full">
                <Label htmlFor="costPd">{`Rating`}</Label>
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
                <Label>{`Cuisines`}</Label>
                <Badge>
                  {filters.cuisines.length > 0
                    ? filters.cuisines.length
                    : "All"}
                </Badge>
              </div>
              <ScrollArea className="h-72">
                <div className="grid gap-3">
                  {cuisines.map((cuisine) => (
                    <div className="flex items-center space-x-2" key={cuisine}>
                      <Checkbox
                        name="cuisines"
                        checked={filters.cuisines.includes(cuisine)}
                        onCheckedChange={(value) =>
                          updateCuisines(value, cuisine)
                        }
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {cuisine}
                      </label>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
};

export default Filters;
