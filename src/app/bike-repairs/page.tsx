"use client";

import { IBikeRepair, ITodo } from "@/lib/types";
import List from "@/components/bike-repairs/List";
import Title from "@/components/Title";
import { useFilters } from "@/hooks/filtersContext";
import { useEffect, useState } from "react";
import { getData } from "./actions";
import Filters from "@/components/bike-repairs/Filter";

const BikeRepair = () => {
    const { filters, resetFilters } = useFilters();
    const [bikeRepair, setBikeRepair] = useState<IBikeRepair[]>([]);

    // Function to fetch data and update state
    const fetchBikeRepair = async () => {
        const fetchedBikeRepair = await getData(filters);
        console.log(fetchedBikeRepair);
        setBikeRepair(fetchedBikeRepair);
    };

    useEffect(() => {
        fetchBikeRepair();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters]); // Re-run when filters change

    useEffect(() => {
        resetFilters();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const sortOptions = [
        {
            label: "Distance from Miramar",
            value: "distanceToMiramar",
        },
    ];

    return (
        <div className="mx-auto grid flex-1 auto-rows-max gap-4 w-full">
            <Title text="Bike Repairs" sort={sortOptions} />
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                <Filters bike={bikeRepair || []} />
                <List bike={bikeRepair || []} />
            </div>
        </div>
    );
};

export default BikeRepair;
