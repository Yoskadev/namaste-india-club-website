"use client";
import { ITitle } from "@/lib/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useFilters } from "@/hooks/filtersContext";

const Title = ({ text, sort }: ITitle) => {
  const { filters, updateSort } = useFilters();

  return (
    <div className="flex items-center gap-4">
      <h1 className="flex-1 shrink-0 whitespace-nowrap text-3xl font-semibold sm:grow-0">
        {text}
      </h1>
      <div className="flex items-center gap-2 md:ml-auto ">
        <div className="grid gap-3">
          <Select
            onValueChange={(value) => {
              updateSort(value);
            }}
            value={filters.sort || ""}
          >
            <SelectTrigger id="status" aria-label="Select status">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              {sort.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Title;
