import firebase_app from "@/firebase/config";
import {
  QuerySnapshot,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { IAirbnb } from "@/lib/types";
import AirbnbList from "@/components/AirbnbList";

const Airbnbs = async () => {
  // const { searchInput } = useSearch();
  const db = getFirestore(firebase_app);

  const querySnapshot = (await getDocs(
    collection(db, "airbnbs")
  )) as QuerySnapshot<IAirbnb>;
  const airbnbs = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return (
    <div className="mx-auto grid flex-1 auto-rows-max gap-4">
      <div className="flex items-center gap-4">
        <h1 className="flex-1 shrink-0 whitespace-nowrap text-3xl font-semibold sm:grow-0">
          Airbnb
        </h1>
        <div className="flex items-center gap-2 md:ml-auto ">
          <div className="grid gap-3">
            <Select>
              <SelectTrigger id="status" aria-label="Select status">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Active</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
        <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
          <Card className="sticky top-8">
            <CardHeader>
              <p className="text-xl font-semibold tracking-tight">Filters</p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="status">Status</Label>
                  <Select>
                    <SelectTrigger id="status" aria-label="Select status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Active</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <AirbnbList airbnbs={airbnbs} />
      </div>
    </div>
  );
};

export default Airbnbs;
