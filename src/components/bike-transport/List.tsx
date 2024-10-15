"use client";
import { IBikeTransport } from "@/lib/types";
import { Card, CardContent } from "../ui/card";

import { Mail, MapPin, PhoneCall } from "lucide-react";
import { useSearch } from "@/hooks/searchContext";
import { useFilters } from "@/hooks/filtersContext";
import { processFilteration } from "@/lib/filters";

interface IBikeTransportList {
    bikeTransports: IBikeTransport[];
}

const List = ({ bikeTransports }: IBikeTransportList) => {
    const { searchInput } = useSearch();
    const { filters } = useFilters();

    const filteredBikeTransport = processFilteration(bikeTransports, filters, searchInput);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            {filteredBikeTransport.map((item: IBikeTransport) => (
                <Card className="h-full flex flex-col justify-between" key={item.id}>
                    <CardContent className="h-full">
                        <div className="h-full flex flex-col justify-between pt-6 gap-4">
                            <div className="flex flex-col gap-1">
                                <h1 className="text-xl font-semibold tracking-tight">
                                    {item.name}
                                </h1>
                            </div>
                            <span className="flex items-center gap-3 text-sm rounded-lg text-muted-foreground transition-all hover:text-primary">
                                {item.address}
                            </span>
                            <div className="flex flex-col gap-2">
                                <span className="flex items-center gap-3 text-sm rounded-lg text-muted-foreground transition-all hover:text-primary">
                                    <MapPin className="h-4 w-4  text-md text-primary" />
                                    {item.city}

                                </span>
                                <span className="flex items-center gap-3 text-sm rounded-lg text-muted-foreground transition-all hover:text-primary">
                                    <PhoneCall className="h-4 w-4  text-md text-primary" />
                                    Phone: {item.phone}
                                </span>
                                <span className="flex items-center gap-3 text-sm rounded-lg text-muted-foreground transition-all hover:text-primary">
                                    <Mail className="h-4 w-4  text-md text-primary" />
                                    Phone: {item.email}
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
