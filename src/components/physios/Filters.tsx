import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "../ui/slider";
import { IPhysio } from "@/lib/types";
import { useFilters } from "@/hooks/filtersContext";
import {
  MAX_AIRBNB_DISTANCE_TO_START,
  MAX_PHYSIO_DISTANCE_TO_MIRAMAR,
  MIN_AIRBNB_DISTANCE_TO_START,
  MIN_PHYSIO_DISTANCE_TO_MIRAMAR,
  NUMBER_OF_BEDROOMS,
} from "@/lib/constants";
import { useEffect, useMemo, useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Badge } from "../ui/badge";

interface IPhysioFilters {
  physios: IPhysio[];
}

const Filters = ({ physios }: IPhysioFilters) => {
  const { filters, updateDistanceToMiramar } = useFilters();

  return (
    <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
      <Card className="sticky top-8">
        <CardHeader>
          <p className="text-xl font-semibold tracking-tight">Filters</p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <div className="flex justify-between w-full">
                <Label htmlFor="costPd">{`Distance from Miramar`}</Label>
                <Badge>{`< ${filters.distanceToMiramar[0] / 1000} kms`}</Badge>
              </div>

              <div>
                <Slider
                  id="distanceToMiramar"
                  defaultValue={[MIN_PHYSIO_DISTANCE_TO_MIRAMAR]}
                  value={filters.distanceToMiramar}
                  onValueChange={(value) => updateDistanceToMiramar(value)}
                  max={MAX_PHYSIO_DISTANCE_TO_MIRAMAR}
                  min={MIN_PHYSIO_DISTANCE_TO_MIRAMAR}
                  step={100}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Filters;
