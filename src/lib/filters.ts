import { IFilterState } from "./types";

export const processFilteration = (
  itemArray: any,
  filters: IFilterState,
  searchInput: string
) => {
  let filteredArray = [...itemArray];
  // Search
  if (searchInput) {
    filteredArray = filteredArray?.filter((item: any) => {
      const itemName = item?.name?.toLowerCase() || "N.A";
      const searchText = searchInput.toLowerCase();
      return itemName.includes(searchText);
    });
  }

  // Location Filter
  if (filters.locations.length !== 0) {
    filteredArray = filteredArray?.filter((item: any) => {
      if (!item.location) return true;
      let isFound = false;
      filters.locations.forEach((location) => {
        if (item.location.includes(location)) {
          isFound = true;
        }
      });

      return isFound;
    });
  }

  //   Star filter
  if (filters.stars) {
    filteredArray = filteredArray?.filter((item: any) =>
      item.star ? item.star > filters.stars : true
    );
  }

  //   Distance filter
  if (filters.distanceToStart) {
    filteredArray = filteredArray?.filter((item: any) =>
      item.distanceToStart
        ? item.distanceToStart < filters.distanceToStart[0]
        : true
    );
  }

  // Bedroom Filter
  if (filters.noOfBedrooms.length !== 0) {
    filteredArray = filteredArray?.filter((item: any) =>
      item.noOfBedrooms
        ? filters.noOfBedrooms.includes(item.noOfBedrooms)
        : true
    );
  }

  //   Sort
  if (filters.sort) {
    filteredArray = filteredArray.sort((a, b) => {
      switch (filters.sort) {
        case "<costPd":
          return a.costPd - b.costPd;
        case ">costPd":
          return b.costPd - a.costPd;
        case "<noOfBedrooms":
          return a.noOfBedrooms - b.noOfBedrooms;
        case ">noOfBedrooms":
          return b.noOfBedrooms - a.noOfBedrooms;
        default:
          return a[filters.sort] - b[filters.sort];
      }
    });
  }
  return filteredArray;
};
