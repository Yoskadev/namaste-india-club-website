import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "../ui/slider";
import { IBikeTransport } from "@/lib/types";
import { useFilters } from "@/hooks/filtersContext";
import {
    MAX_AIRBNB_DISTANCE_TO_START,
    MAX_PHYSIO_DISTANCE_TO_MIRAMAR,
    MIN_AIRBNB_DISTANCE_TO_START,
    MIN_PHYSIO_DISTANCE_TO_MIRAMAR,
    NUMBER_OF_BEDROOMS,
} from "@/lib/constants";
import { useEffect, useMemo, useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Badge } from "../ui/badge";
import Disclaimer from "../Disclaimer";
import { removeDuplicates } from "@/lib/utils";

interface IBikeTransportFilters {
    bikeTransports: IBikeTransport[];
}

const Filters = ({ bikeTransports }: IBikeTransportFilters) => {
    const { filters, updateCities } = useFilters();

    const [cities, setCities] = useState<string[]>([]);

    const uniqueCuisines = useMemo(() => {
        const transportCities = bikeTransports.map(
            (bikeTransport) => bikeTransport.city
        );
        return transportCities.sort();
    }, [bikeTransports]);


    useEffect(() => {
        const allCities: string[] = [...cities, ...uniqueCuisines];

        const filteredCities = removeDuplicates(allCities);
        setCities(filteredCities);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uniqueCuisines]);

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
                                <Label>{`Cities`}</Label>
                                <Badge>
                                    {filters.cities.length > 0
                                        ? filters.cities.length
                                        : "All"}
                                </Badge>
                            </div>

                            <div className="grid gap-3">
                                {cities?.map((city) => (
                                    <div className="flex items-center space-x-2" key={city}>
                                        <Checkbox
                                            name="cities"
                                            checked={filters.cities.includes(city)}
                                            onCheckedChange={(value) =>
                                                updateCities(value, city)
                                            }
                                        />
                                        <label
                                            htmlFor="terms"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            {city}
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
