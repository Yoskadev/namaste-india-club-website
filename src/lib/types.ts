export interface ISort {
  label: string;
  value: string;
}

export interface ITitle {
  text: string;
  sort: ISort[];
}

export interface IAirbnb {
  id: string;
  location: string;
  costPd: number;
  link: any;
  distanceFromAirportApproxGox: number;
  description: string;
  distanceToStartPointApprox: number;
  noOfBedrooms: number;
  name: string;
  distanceFromAirportApproxGoi: number;
}

export interface IHotel {
  id: string;
  location: string;
  costPd: number;
  link: any;
  distanceFromAirportGox: number;
  description: string;
  distanceToStartPoint: number;
  name: string;
  distanceFromAirportGoi: number;
}

export interface IGym {
  id: string;
  name: string;
  location: string;
  timings: string;
  star: number;
}

export interface IPhysio {
  id: string;
  name: string;
  contactInfo91: number;
  distanceFromMiramarCircle: number;
}

export interface IRestaurant {
  id: string;
  location: string;
  averagePerPersonMealCost: number;
  cuisine: string;
  rating: number;
}

export interface IFilterState {
  sort: string;
  costPd: number[];
  distanceToStart: number[];
  locations: string[];
  noOfBedrooms: number[];
  stars: number;
  distanceToMiramar: number[];
  cuisines: string[];
}

export interface ITodo {
  id: string;
  name: string;
  contactInfo91: number;
  distanceFromMiramarCircle: number;
}

export interface IBikeRepair {
  id: string;
  name: string;
  distanceToStartPointApprox: number;
}

export interface IFilterContext {
  filters: IFilterState;
  resetFilters: () => void;
  updateSort: (value: string) => void;
  updateCostPd: (value: number[]) => void;
  updateDistanceToStart: (value: number[]) => void;
  updateLocations: (push: boolean | string, value: string) => void;
  updateNoOfBedrooms: (push: boolean | string, value: number) => void;
  updateStars: (value: number) => void;
  updateDistanceToMiramar: (value: number[]) => void;
  updateCuisines: (push: boolean | string, value: string) => void;
}
