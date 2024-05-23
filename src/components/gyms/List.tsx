"use client";
import { IGym } from "@/lib/types";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";
import { Clock, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useSearch } from "@/hooks/searchContext";
import { useFilters } from "@/hooks/filtersContext";
import { processFilteration } from "@/lib/filters";

interface IGymList {
  gyms: IGym[];
}

const List = ({ gyms }: IGymList) => {
  const { searchInput } = useSearch();
  const { filters } = useFilters();

  const filteredGyms = processFilteration(gyms, filters, searchInput);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
      {filteredGyms.map((item: IGym) => (
        <Card className="h-full flex flex-col justify-between" key={item.id}>
          <CardContent className="h-full">
            <div className="h-full flex flex-col justify-between pt-6 gap-4">
              <div className="flex flex-col gap-1">
                <h1 className="text-xl font-semibold tracking-tight">
                  {item.name || "N.A"}
                </h1>
                <span className="flex items-center gap-3 text-sm rounded-lg text-muted-foreground transition-all hover:text-primary">
                  {item.location}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <Badge variant="outline">
                    <Star className="h-3 w-3 mr-1 " />
                    {item.star}
                  </Badge>
                  <Badge variant="outline">
                    <Clock className="h-3 w-3 mr-1 " />
                    {item.timings}
                  </Badge>
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
