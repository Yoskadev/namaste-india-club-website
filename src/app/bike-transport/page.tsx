"use client";

import { IBikeTransport, ITodo } from "@/lib/types";
import List from "@/components/bike-transport/List";
import Title from "@/components/Title";
import { useFilters } from "@/hooks/filtersContext";
import { useEffect, useState } from "react";
import { getData } from "./actions";
import Filters from "@/components/bike-transport/Filters";

const BikeTransport = () => {
    const { filters, resetFilters } = useFilters();
    const [bikeTransport, setBikeTransport] = useState<IBikeTransport[]>([]);
    
    // Function to fetch data and update state
    const fetchBikeTransport = async () => {
        const fetchedBikeTransport = await getData(filters);
        setBikeTransport(fetchedBikeTransport);
    };

    useEffect(() => {
        fetchBikeTransport();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters]); // Re-run when filters change

    useEffect(() => {
        resetFilters();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="mx-auto grid flex-1 auto-rows-max gap-4 w-full">
            <Title text="Bike Transport" sort={[]} />
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                <Filters bikeTransports={bikeTransport || []} />
                <List bikeTransports={bikeTransport || []} />
            </div>
        </div>
    );
};

export default BikeTransport;
