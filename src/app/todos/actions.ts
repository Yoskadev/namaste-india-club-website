import firebase_app from "@/firebase/config";
import { ITodo, IFilterState } from "@/lib/types";
import {
  query,
  where,
  QuerySnapshot,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";

export async function getData(filters: IFilterState) {
  "use server"
  const db = getFirestore(firebase_app);
  let q = query(collection(db, "todos"));

  const querySnapshot = (await getDocs(q)) as QuerySnapshot<ITodo>;
  return querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
}
