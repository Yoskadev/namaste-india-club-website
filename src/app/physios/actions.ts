import firebase_app from "@/firebase/config";
import { IPhysio, IFilterState } from "@/lib/types";
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
  let q = query(collection(db, "physios"));

  const querySnapshot = (await getDocs(q)) as QuerySnapshot<IPhysio>;
  return querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
}
