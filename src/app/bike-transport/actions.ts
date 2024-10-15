import firebase_app from "@/firebase/config";
import { IBikeTransport, IFilterState } from "@/lib/types";
import {
    query,
    QuerySnapshot,
    collection,
    getDocs,
    getFirestore,
} from "firebase/firestore";

export async function getData(filters: IFilterState) {
    const db = getFirestore(firebase_app);
    let q = query(collection(db, "transport"));

    const querySnapshot = (await getDocs(q)) as QuerySnapshot<IBikeTransport>;
    return querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));
}
