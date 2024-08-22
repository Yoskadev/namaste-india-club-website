import { Bed, Cross, Dumbbell, Home, MapPin, Utensils, Bike, BriefcaseMedical } from "lucide-react";



export const navItems = [
  {
    label: "Hotels",
    link: "/hotels",
    icon: <Bed className="h-5 w-5" />,
  },
  {
    label: "Airbnbs",
    link: "/airbnbs",
    icon: <Home className="h-5 w-5" />,
  },
  {
    label: "Gyms",
    link: "/gyms",
    icon: <Dumbbell className="h-5 w-5" />,
  },
  {
    label: "Physios",
    link: "/physios",
    icon: <BriefcaseMedical className="h-5 w-5" />
  },
  {
    label: "Restaurants",
    link: "/restaurants",
    icon: <Utensils className="h-5 w-5" />,
  },
  {
    label: "Places to visit",
    link: "/todos",
    icon: <MapPin className="h-5 w-5" />,
  },
  {
    label: "Bike Repairs",
    link: "/bike-repairs",
    icon: <Bike className="h-5 w-5" />
  }
];


