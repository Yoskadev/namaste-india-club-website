import firebase_app from "@/firebase/config";
import { IHotel, IFilterState } from "@/lib/types";
import {
  query,
  where,
  QuerySnapshot,
  collection,
  getDocs,
  getFirestore,
  orderBy,
  OrderByDirection,
} from "firebase/firestore";

export async function getData(filters: IFilterState) {
  const db = getFirestore(firebase_app);
  let q = query(collection(db, "hotels"));

  if (!true) {
    // QUERIES
    if (filters.costPd) {
      q = query(q, where("costPd", "<", filters.costPd[0]));
    }

    if (filters.distanceToStart) {
      q = query(
        q,
        where("distanceToStartPointApprox", "<", filters.distanceToStart[0])
      );
    }

    if (filters.locations.length > 0) {
      q = query(q, where("location", "in", filters.locations));
    }

    if (filters.noOfBedrooms.length > 0) {
      q = query(q, where("noOfBedrooms", "in", filters.noOfBedrooms));
    }

    //  SORT
    if (filters.sort) {
      let key = "column";
      let value: OrderByDirection = "asc";
      switch (filters.sort) {
        case "distanceToStartPointApprox":
          key = filters.sort;
          value = "asc";
          break;
        case "<costPd":
          key = "costPd";
          value = "asc";
          break;
        case ">costPd":
          key = "costPd";
          value = "desc";
          break;
        case "<noOfBedrooms":
          key = "costPd";
          value = "asc";
          break;
        case ">noOfBedrooms":
          key = "costPd";
          value = "desc";
          break;
        default:
          break;
      }
      q = query(q, orderBy(key, value));
    }
  }

  const querySnapshot = (await getDocs(q)) as QuerySnapshot<IHotel>;
  return querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
}
