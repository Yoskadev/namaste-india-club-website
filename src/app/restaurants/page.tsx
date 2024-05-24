"use client";

import { IRestaurant } from "@/lib/types";
import List from "@/components/restaurants/List";
import Title from "@/components/Title";
import { useFilters } from "@/hooks/filtersContext";
import { useEffect, useState } from "react";
import { getData } from "./actions";
import Filters from "@/components/restaurants/Filters";

const Restaurants = () => {
  const { filters, resetFilters } = useFilters();
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

  // Function to fetch data and update state
  const fetchRestaurants = async () => {
    const fetchedRestaurants = await getData(filters);
    setRestaurants(fetchedRestaurants);
  };

  useEffect(() => {
    fetchRestaurants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]); // Re-run when filters change

  useEffect(() => {
    resetFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sortOptions = [
    {
      label: "Price: Low to High",
      value: "<averagePerPersonMealCost",
    },
    {
      label: "Price: High to Low",
      value: ">averagePerPersonMealCost",
    },
    {
      label: "Rating: High to Low",
      value: ">rating",
    },
  ];

  return (
    <div className="mx-auto grid flex-1 auto-rows-max gap-4 w-full">
      <Title text="Restaurants" sort={sortOptions} />
      <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
        <Filters restaurants={restaurants || []} />
        <List restaurants={restaurants || []} />
      </div>
    </div>
  );
};

export default Restaurants;
