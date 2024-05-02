import Link from "next/link";
import {
  FaHotel,
  FaAirbnb,
  FaUtensils,
  FaDumbbell,
  FaHandHoldingMedical,
} from "react-icons/fa";

import NavButton from "./NavButton";

const Header: React.FC = () => {
  return (
    <div
      className=" w-full z-10 py-2 mt-8 rounded-full"
      style={{ paddingTop: "10px" }}
    >
      <div className="px-6 flex items-center justify-between">
        <div className="flex-1">
          <Link href="/" passHref>
            <div className="text-xl font-semibold text-gray-700">NIC</div>
          </Link>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <NavButton icon={<FaHotel />} to="/" title="Hotels" />
          <NavButton icon={<FaAirbnb />} to="/airbnbs" title="Airbnbs" />
          <NavButton icon={<FaUtensils />} to="/restaurants" title="Restaurants" />
          <NavButton icon={<FaDumbbell />} to="/gyms" title="Gyms" />
          <NavButton icon={<FaHandHoldingMedical />} to="/physios" title="Physios" />
        </div>
        <div className="flex-1 flex justify-end">
          <Link href="/" passHref>
            <div className="text-xl font-semibold text-gray-700">Yoska</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
