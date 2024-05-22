"use client";
import { IAirbnb } from "@/lib/types";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";
import { Bed, MapPin, PlaneLanding, PlaneTakeoff, Route } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useSearch } from "@/hooks/searchContext";

interface IAirbnbList {
  airbnbs: IAirbnb[];
}

const List = ({ airbnbs }: IAirbnbList) => {
  const { searchInput } = useSearch();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
      {airbnbs
        ?.filter((item) => {
          const itemName = item.name.toLowerCase();
          const searchText = searchInput.toLowerCase();
          return itemName.includes(searchText);
        })
        .map((item) => (
          <Card className="h-full flex flex-col justify-between" key={item.id}>
            <CardContent>
              <div className="grid gap-2 pt-6 ">
                <div>
                  <Badge
                    variant="outline"
                    // className="border-primary text-primary"
                  >
                    <MapPin className="h-3 w-3 mr-1" />
                    {item.location}
                  </Badge>
                </div>
                <h1 className="text-xl font-semibold tracking-tight">
                  {item.name}
                </h1>
                <p className="text-md line-clamp-3">{item.description}</p>

                <div className="flex flex-col gap-2 py-2">
                  <div className="flex items-center gap-3 rounded-lg text-muted-foreground transition-all hover:text-primary">
                    <Bed className="h-4 w-4  text-primary" /># of bedrooms:{" "}
                    {item.noOfBedrooms}
                  </div>
                  <div className="flex items-center gap-3 rounded-lg text-muted-foreground transition-all hover:text-primary">
                    <Route className="h-4 w-4 text-primary" />
                    Race Start: {item.distanceToStartPointApprox / 1000}km away
                  </div>
                  <div className="flex items-center gap-3 rounded-lg text-muted-foreground transition-all hover:text-primary">
                    <PlaneTakeoff className="h-4 w-4  text-primary" />
                    From GOX: {item.distanceFromAirportApproxGox}km away
                  </div>
                  <div className="flex items-center gap-3 rounded-lg text-muted-foreground transition-all hover:text-primary">
                    <PlaneLanding className="h-4 w-4  text-primary" />
                    From GOI: {item.distanceFromAirportApproxGoi}km away
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div>
                <div className="p-1 mx-2 flex-1">
                  <p className="text-gray-500 text-xs">Price</p>
                  <span className="text-primary text-md font-semibold">
                    ₹{item.costPd}
                    <span className="text-gray-500 text-sm"> / night</span>
                  </span>
                </div>
              </div>
              <Link href={item.link || "#"} target="_blank">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary"
                >
                  View Property
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
    </div>
  );
};

export default List;
