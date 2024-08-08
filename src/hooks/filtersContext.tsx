"use client";
import { IFilterContext, IFilterState } from "@/lib/types";
import { createContext, useContext, useState, ReactNode } from "react";

const defaultState: IFilterState = {
  sort: "",
  costPd: [100000],
  distanceToStart: [5000],
  locations: [],
  noOfBedrooms: [],
  stars: 3,
  distanceToMiramar: [10000],
  cuisines: [],
  distanceToStartPointApprox: [5000],
};

const FiltersContext = createContext<IFilterContext>({
  filters: defaultState,
  resetFilters: () => { },
  updateSort: () => { },
  updateCostPd: () => { },
  updateDistanceToStart: () => { },
  updateLocations: () => { },
  updateNoOfBedrooms: () => { },
  updateStars: () => { },
  updateDistanceToMiramar: () => { },
  updateCuisines: () => { },
  updateDistanceToStartPointApprox: () => { }
});

export const useFilters = () => useContext(FiltersContext);

interface FiltersProviderProps {
  children: ReactNode;
}

export const FiltersProvider: React.FC<FiltersProviderProps> = ({
  children,
}) => {
  const [filters, setFilters] = useState<IFilterState>(defaultState);

  const resetFilters = () => {
    setFilters((prev) => ({ ...defaultState }));
  };

  const updateSort = (value: string) => {
    setFilters((prev) => ({ ...prev, sort: value }));
  };

  const updateCostPd = (value: number[]) => {
    setFilters((prev) => ({ ...prev, costPd: value }));
  };

  const updateDistanceToStart = (value: number[]) => {
    setFilters((prev) => {
      return { ...prev, distanceToStart: value };
    });
  };

  const updateLocations = (isPush: boolean | string, value: string) => {
    setFilters((prev) => {
      let locations = [...prev.locations];
      if (isPush) {
        locations.push(value);
      } else {
        locations = locations.filter((item) => item !== value);
      }

      return { ...prev, locations: locations };
    });
  };

  const updateNoOfBedrooms = (isPush: boolean | string, value: number) => {
    setFilters((prev) => {
      let noOfBedrooms = [...prev.noOfBedrooms];
      if (isPush) {
        noOfBedrooms.push(value);
      } else {
        noOfBedrooms = noOfBedrooms.filter((item) => item !== value);
      }

      return { ...prev, noOfBedrooms: noOfBedrooms };
    });
  };

  const updateStars = (value: number) => {
    setFilters((prev) => ({ ...prev, stars: value }));
  };

  const updateDistanceToMiramar = (value: number[]) => {
    setFilters((prev) => {
      return { ...prev, distanceToMiramar: value };
    });
  };

  const updateDistanceToStartPointApprox = (value: number[]) => {
    setFilters((prev) => {
      return { ...prev, distanceToStartPointApprox: value }
    })
  }

  const updateCuisines = (isPush: boolean | string, value: string) => {
    setFilters((prev) => {
      let cuisines = [...prev.cuisines];
      if (isPush) {
        cuisines.push(value);
      } else {
        cuisines = cuisines.filter((item) => item !== value);
      }

      return { ...prev, cuisines: cuisines };
    });
  };

  return (
    <FiltersContext.Provider
      value={{
        filters,
        resetFilters,
        updateSort,
        updateCostPd,
        updateDistanceToStart,
        updateLocations,
        updateNoOfBedrooms,
        updateStars,
        updateDistanceToMiramar,
        updateCuisines,
        updateDistanceToStartPointApprox,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
