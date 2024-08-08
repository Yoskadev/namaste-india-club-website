"use client";
import { IBikeRepair, ITodo } from "@/lib/types";
import { Card, CardContent, CardFooter } from "../ui/card";

import { MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useSearch } from "@/hooks/searchContext";
import { useFilters } from "@/hooks/filtersContext";
import { processFilteration } from "@/lib/filters";

interface IBikeRepairList {
    bike: IBikeRepair[];
}

const List = ({ bike }: IBikeRepairList) => {
    const { searchInput } = useSearch();
    const { filters } = useFilters();

    const filteredBikeRepair = processFilteration(bike, filters, searchInput);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            {filteredBikeRepair.map((item: IBikeRepair) => (
                <Card className="h-full flex flex-col justify-between" key={item.id}>
                    <CardContent className="h-full">
                        <div className="h-full flex flex-col justify-between pt-6 gap-4">
                            <div className="flex flex-col gap-1">
                                <h1 className="text-xl font-semibold tracking-tight">
                                    {item.name}
                                </h1>
                                {/* <span className="text-sm rounded-lg text-muted-foreground transition-all hover:text-primary">
                                    {item.distanceToStartPointApprox}
                                </span> */}
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="flex items-center gap-3 text-sm rounded-lg text-muted-foreground transition-all hover:text-primary">
                                    <MapPin className="h-4 w-4  text-md text-primary" />
                                    Miramar Circle: {item.distanceToStartPointApprox / 1000} kms
                                    away
                                </span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default List;
