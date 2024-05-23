"use client";

import { IGym } from "@/lib/types";
import List from "@/components/gyms/List";
import Title from "@/components/Title";
import { useFilters } from "@/hooks/filtersContext";
import { useEffect, useState } from "react";
import { getData } from "./actions";
import Filters from "@/components/gyms/Filters";

const Gyms = () => {
  const { filters, resetFilters } = useFilters();
  const [gyms, setGyms] = useState<IGym[]>([]);

  // Function to fetch data and update state
  const fetchGyms = async () => {
    const fetchedGyms = await getData(filters);
    setGyms(fetchedGyms);
  };

  useEffect(() => {
    fetchGyms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]); // Re-run when filters change

  useEffect(() => {
    resetFilters();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  ];

  return (
    <div className="mx-auto grid flex-1 auto-rows-max gap-4 w-full">
      <Title text="Gyms" sort={sortOptions} />
      <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
        <Filters gyms={gyms || []} />
        <List gyms={gyms || []} />
      </div>
    </div>
  );
};

export default Gyms;
