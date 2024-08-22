"use client";

import { ITodo } from "@/lib/types";
import List from "@/components/todos/List";
import Title from "@/components/Title";
import { useFilters } from "@/hooks/filtersContext";
import { useEffect, useState } from "react";
import { getData } from "./actions";
import Filters from "@/components/todos/Filters";

const Todos = () => {
  const { filters, resetFilters } = useFilters();
  const [todos, setTodos] = useState<ITodo[]>([]);

  // Function to fetch data and update state
  const fetchTodos = async () => {
    const fetchedTodos = await getData(filters);
    setTodos(fetchedTodos);
  };

  useEffect(() => {
    fetchTodos();
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
      <Title text="Places to visit" sort={sortOptions} />
      <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
        <Filters todos={todos || []} />
        <List todos={todos || []} />
      </div>
    </div>
  );
};

export default Todos;
