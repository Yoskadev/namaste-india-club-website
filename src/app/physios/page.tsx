"use client";

import { IPhysio } from "@/lib/types";
import List from "@/components/physios/List";
import Title from "@/components/Title";
import { useFilters } from "@/hooks/filtersContext";
import { useEffect, useState } from "react";
import { getData } from "./actions";
import Filters from "@/components/physios/Filters";

const Physios = () => {
  const { filters, resetFilters } = useFilters();
  const [physios, setPhysios] = useState<IPhysio[]>([]);

  // Function to fetch data and update state
  const fetchPhysios = async () => {
    const fetchedPhysios = await getData(filters);
    setPhysios(fetchedPhysios);
  };

  useEffect(() => {
    fetchPhysios();
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
      <Title text="Physios" sort={sortOptions} />
      <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
        <Filters physios={physios || []} />
        <List physios={physios || []} />
      </div>
    </div>
  );
};

export default Physios;
