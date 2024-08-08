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

  //   Star Filter
  if (filters.stars) {
    filteredArray = filteredArray?.filter((item: any) =>
      item.star || item.rating ? item.star || item.rating > filters.stars : true
    );
  }

  //   Distance to Start Filter
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

  // Distance to Miramar Filter
  if (filters.distanceToMiramar) {
    filteredArray = filteredArray?.filter((item: any) =>
      item.distanceFromMiramarCircle
        ? item.distanceFromMiramarCircle < filters.distanceToMiramar[0]
        : true
    );
  }

  // Cuisine Filter
  if (filters.cuisines.length !== 0) {
    filteredArray = filteredArray?.filter((item: any) => {
      if (!item.cuisine) return true;
      let isFound = false;
      filters.cuisines.forEach((cuisine) => {
        if (item.cuisine.includes(cuisine)) {
          isFound = true;
        }
      });

      return isFound;
    });
  }

  // bike repair filter
  if (filters.distanceToStartPointApprox) {
    filteredArray = filteredArray?.filter((item: any) =>
      item.distanceToStartPointApprox ?
        item.distanceToStartPointApprox < filters.distanceToStartPointApprox[0] :
        true
    )

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
        case ">rating":
          return b.rating - a.rating;
        case "<averagePerPersonMealCost":
          return a.averagePerPersonMealCost - b.averagePerPersonMealCost;
        case ">averagePerPersonMealCost":
          return b.averagePerPersonMealCost - a.averagePerPersonMealCost;
        case "distanceToMiramar":
          return a.distanceFromMiramarCircle - b.distanceFromMiramarCircle;
        default:
          return a[filters.sort] - b[filters.sort];
      }
    });
  }
  return filteredArray;
};
