import { collection, getDocs, addDoc, doc, getDoc, deleteDoc } from "firebase/firestore";
import db from '../config/firebase'; 

export const getCoffee = async () => {
  const collectionRef = collection(db, 'coffee');

  const querySnapshot = await getDocs(collectionRef);

  const cleanedData = querySnapshot.docs.map((rawDocument) => {
    const id = rawDocument.id;
    const restOfData = rawDocument.data();
    return {id, ...restOfData};
  });

  return cleanedData;
};

export const getCoffeeByID = async (id) => {

  const docRef = doc(db, 'coffee', id);

  const querySnapshot = await getDoc(docRef);

  return { id: querySnapshot.id, ...querySnapshot.data() };
}