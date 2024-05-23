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

export interface IFilterState {
  sort: string;
  costPd: number[];
  distanceToStart: number[];
  locations: string[];
  noOfBedrooms: number[];
}

export interface IFilterContext {
  filters: IFilterState;
  updateSort: (value: string) => void;
  updateCostPd: (value: number[]) => void;
  updateDistanceToStart: (value: number[]) => void;
  updateLocations: (push: boolean | string, value: string) => void;
  updateNoOfBedrooms: (push: boolean | string, value: number) => void;
}
