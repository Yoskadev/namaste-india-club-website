import { Bed, Cross, Dumbbell, Home, MapPin, Utensils } from "lucide-react";

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
    icon: <Cross className="h-5 w-5" />,
  },
  {
    label: "Restaurants",
    link: "/restaurants",
    icon: <Utensils className="h-5 w-5" />,
  },
  {
    label: "Activities",
    link: "/activities",
    icon: <MapPin className="h-5 w-5" />,
  },
];


