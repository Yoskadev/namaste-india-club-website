"use client";

import { IHotel } from "@/lib/types";
import List from "@/components/hotels/List";
import Title from "@/components/Title";
import { useFilters } from "@/hooks/filtersContext";
import { useEffect, useState } from "react";
import { getData } from "./actions";
import Filters from "@/components/hotels/Filters";

const Hotels = () => {
  const { filters, resetFilters } = useFilters();
  const [hotels, setHotels] = useState<IHotel[]>([]);

  // Function to fetch data and update state
  const fetchHotels = async () => {
    const fetchedHotels = await getData(filters);
    const normalisedHotels = fetchedHotels.map((hotel) => {
      return { ...hotel, distanceToStart: hotel.distanceToStartPoint };
    });
    setHotels(normalisedHotels);
  };

  useEffect(() => {
    fetchHotels();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]); // Re-run when filters change

  useEffect(() => {
    resetFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sortOptions = [
    {
      label: "Distance to Race",
      value: "distanceToStart",
    },
    {
      label: "Price: Low to High",
      value: "<costPd",
    },
    {
      label: "Price: High to Low",
      value: ">costPd",
    },
  ];

  return (
    <div className="mx-auto grid flex-1 auto-rows-max gap-4 w-full">
      <Title text="Hotels" sort={sortOptions} />
      <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
        <Filters hotels={hotels || []} />
        <List hotels={hotels || []} />
      </div>
    </div>
  );
};

export default Hotels;
