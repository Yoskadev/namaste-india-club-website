import firebase_app from "@/firebase/config";
import { IHotel, IFilterState } from "@/lib/types";
import {
  query,
  where,
  QuerySnapshot,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";

export async function getData(filters: IFilterState) {
  const db = getFirestore(firebase_app);
  let q = query(collection(db, "hotels"));

  const querySnapshot = (await getDocs(q)) as QuerySnapshot<IHotel>;
  return querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
}
