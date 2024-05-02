import { FaFilter } from "react-icons/fa";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Filters: React.FC = () => {
  return (
    <div className="w-full flex gap-4">
      <Input />
      <Button variant="outline">
        <FaFilter />
      </Button>
    </div>
  );
};

export default Filters;
