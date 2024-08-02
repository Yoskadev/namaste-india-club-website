"use client";
import { ITitle } from "@/lib/types";
import { useFilters } from "@/hooks/filtersContext";

const Empty = ({ text, sort }: ITitle) => {
  const { filters, updateSort } = useFilters();

  return <div className="flex items-center gap-4"></div>;
};

export default Empty;
