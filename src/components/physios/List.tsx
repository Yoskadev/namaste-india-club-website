"use client";
import { IPhysio } from "@/lib/types";
import { Card, CardContent, CardFooter } from "../ui/card";

import { MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useSearch } from "@/hooks/searchContext";
import { useFilters } from "@/hooks/filtersContext";
import { processFilteration } from "@/lib/filters";

interface IPhysioList {
  physios: IPhysio[];
}

const List = ({ physios }: IPhysioList) => {
  const { searchInput } = useSearch();
  const { filters } = useFilters();

  const filteredPhysios = processFilteration(physios, filters, searchInput);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
      {filteredPhysios.map((item) => (
        <Card className="h-full flex flex-col justify-between" key={item.id}>
          <CardContent className="h-full pb-4">
            <div className="h-full flex flex-col justify-between pt-6 gap-4">
              <div className="flex flex-col gap-1">
                <h1 className="text-xl font-semibold tracking-tight">
                  {item.name}
                </h1>
              </div>
              <div className="flex flex-col gap-2">
                <span className="flex items-center gap-3 text-sm rounded-lg text-muted-foreground transition-all hover:text-primary">
                  <MapPin className="h-4 w-4  text-md text-primary" />
                  Miramar Circle: {item.distanceFromMiramarCircle / 1000} kms
                  away
                </span>
                <span className="flex items-center gap-3 text-sm rounded-lg text-muted-foreground transition-all hover:text-primary">
                  <PhoneCall className="h-4 w-4  text-md text-primary" />
                  Phone: {item.contactInfo91}
                </span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Link href={`tel:+91${item.contactInfo91}`} target="_blank">
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary"
              >
                <PhoneCall className="mr-2 h-4 w-4" />
                Call Physio
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default List;
