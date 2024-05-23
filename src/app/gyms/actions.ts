import firebase_app from "@/firebase/config";
import { IGym, IFilterState } from "@/lib/types";
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
  let q = query(collection(db, "gymnasiums"));

  const querySnapshot = (await getDocs(q)) as QuerySnapshot<IGym>;
  return querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
}
