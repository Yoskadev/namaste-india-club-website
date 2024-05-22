"use client";

import { IAirbnb } from "@/lib/types";
import List from "@/components/airbnbs/List";
import Title from "@/components/Title";
import { useFilters } from "@/hooks/filtersContext";
import { useEffect, useState } from "react";
import { getData } from "./actions";
import Filters from "@/components/airbnbs/Filters";

const Airbnbs = () => {
  const { filters } = useFilters();
  const [airbnbs, setAirbnbs] = useState<IAirbnb[]>([]);

  // Function to fetch data and update state
  const fetchAirbnbs = async () => {
    const fetchedAirbnbs = await getData(filters);
    setAirbnbs(fetchedAirbnbs);
  };

  useEffect(() => {
    fetchAirbnbs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]); // Re-run when filters change

  const sortOptions = [
    {
      label: "Distance from Race",
      value: "distanceToStartPointApprox",
    },
    {
      label: "Price: Low to High",
      value: "<costPd",
    },
    {
      label: "Price: High to Low",
      value: ">costPd",
    },
    {
      label: "Bedrooms: Low to High",
      value: "<noOfBedrooms",
    },
    {
      label: "Bedrooms: High to Low",
      value: ">noOfBedrooms",
    },
  ];

  return (
    <div className="mx-auto grid flex-1 auto-rows-max gap-4 w-full">
      <Title text="Airbnb" sort={sortOptions} />
      <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
        <Filters airbnbs={airbnbs || []} />
        <List airbnbs={airbnbs || []} />
      </div>
    </div>
  );
};

export default Airbnbs;
