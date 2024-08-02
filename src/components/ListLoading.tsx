"use client";
import { Skeleton } from "@/components/ui/skeleton";

const ListLoading = () => {
  return (
    <div className="w-full flex items-center gap-4">
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        
      </div>
    </div>
  );
};

export default ListLoading;
