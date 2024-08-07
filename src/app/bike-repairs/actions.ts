import firebase_app from "@/firebase/config";
import { IAirbnb, IBikeRepair, IFilterState } from "@/lib/types";
import {
    query,
    QuerySnapshot,
    collection,
    getDocs,
    getFirestore,
} from "firebase/firestore";

export async function getData(filters: IFilterState) {
    const db = getFirestore(firebase_app);
    let q = query(collection(db, "service"));

    const querySnapshot = (await getDocs(q)) as QuerySnapshot<IBikeRepair>;
    console.log(querySnapshot);
    return querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));
}
