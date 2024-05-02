import firebase_app from "@/firebase/config";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const Airbnbs = async () => {
  const db = getFirestore(firebase_app);

  const querySnapshot = await getDocs(collection(db, "airbnbs"));
  
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
  return <div>Airbnb</div>;
};

export default Airbnbs;
