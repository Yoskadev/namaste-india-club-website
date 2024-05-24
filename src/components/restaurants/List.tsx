"use client";
import { IRestaurant } from "@/lib/types";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Bed,
  ExternalLink,
  IndianRupee,
  MapPin,
  PlaneLanding,
  PlaneTakeoff,
  Route,
  Star,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useSearch } from "@/hooks/searchContext";
import { useFilters } from "@/hooks/filtersContext";
import { getLocation } from "@/lib/utils";
import { processFilteration } from "@/lib/filters";

interface IRestaurantList {
  restaurants: IRestaurant[];
}

const List = ({ restaurants }: IRestaurantList) => {
  const { searchInput } = useSearch();
  const { filters } = useFilters();

  const filteredRestaurants = processFilteration(
    restaurants,
    filters,
    searchInput
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
      {filteredRestaurants.map((item) => (
        <Card className="h-full flex flex-col justify-between" key={item.id}>
          <CardContent className="h-full">
            <div className="h-full flex flex-col justify-between pt-6 gap-4">
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <h1 className="text-xl font-semibold tracking-tight">
                    {item.name || "N.A"}
                  </h1>
                  <span className="flex items-center gap-1 text-sm rounded-lg text-muted-foreground transition-all hover:text-primary">
                    <Star className="h-4 w-4 text-md text-primary" />
                    {item.rating}
                  </span>
                </div>
                <span className="flex items-center gap-3 text-sm rounded-lg text-muted-foreground transition-all hover:text-primary">
                  {item.location}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="flex items-center gap-3 text-sm rounded-lg text-muted-foreground transition-all hover:text-primary">
                  <IndianRupee className="h-4 w-4  text-md text-primary" />
                  Price : {item.averagePerPersonMealCost} /person
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex gap-2 flex-wrap">
                  {item.cuisine.split(",").map((cuisine: string) => (
                    <Badge variant="outline" key={`${item.id}-${cuisine}`}>
                      {cuisine}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default List;
