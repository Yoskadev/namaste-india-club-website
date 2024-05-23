"use client";
import { IHotel } from "@/lib/types";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";
import { Bed, PlaneLanding, PlaneTakeoff, Route } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useSearch } from "@/hooks/searchContext";

interface IHotelList {
  hotels: IHotel[];
}

const List = ({ hotels }: IHotelList) => {
  const { searchInput } = useSearch();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
      {hotels
        ?.filter((item) => {
          const itemName = item.name.toLowerCase();
          const searchText = searchInput.toLowerCase();
          return itemName.includes(searchText);
        })
        .map((item) => (
          <Card className="h-full flex flex-col justify-between" key={item.id}>
            <CardContent className="h-full pb-2">
              <div className="h-full flex flex-col justify-between pt-6 gap-4">
                <div className="flex flex-col gap-1">
                  <h1 className="text-xl font-semibold tracking-tight">
                    {item.name}
                  </h1>
                  <p className="text-md line-clamp-3">{item.description}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="flex items-center gap-3 text-sm rounded-lg text-muted-foreground transition-all hover:text-primary">
                    <Route className="h-4 w-4  text-md text-primary" />
                    Race Start: {item.distanceToStartPoint / 1000} kms away
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <Badge variant="outline">
                      <PlaneTakeoff className="h-3 w-3 mr-1 " />
                      GOX: {item.distanceFromAirportGox}kms
                    </Badge>
                    <Badge variant="outline">
                      <PlaneLanding className="h-3 w-3 mr-1 " />
                      GOI: {item.distanceFromAirportGoi}kms
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
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
