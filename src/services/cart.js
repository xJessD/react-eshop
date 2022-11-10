import { async } from "@firebase/util";
import { collection, getDocs, addDoc, doc, getDoc, deleteDoc, updateDoc, increment, setDoc } from "firebase/firestore";


import db from '../config/firebase'; 


export const getCart = async () => {
  const collectionRef = collection(db, 'cart');

  const querySnapshot = await getDocs(collectionRef);

  const cleanedData = querySnapshot.docs.map((rawDocument) => {
    const id = rawDocument.id;
    const restOfData = rawDocument.data();
    return {id, ...restOfData};
  });
  return cleanedData;
};

//   querySnap = await docRef.get();
//   const { items: updatedItems } = querySnap.data();
//   return updatedItems;
// };

/**
 * @param {object} coffee 
 * IncreaseQty also works as an add to cart. 
 * Checks if item exists in cart, and either adds, or updates the qty. 
 */
export const increaseQty = async (coffee) => {
  const {id, name, imageUrl, variant} = coffee;
  const collectionRef = collection(db, 'cart');

  const docRef = doc(db, 'cart', id);
  const querySnapshot = await getDoc(docRef);

  

  if (!querySnapshot.exists()) {
    const newCoffee = {name, qty: 1}; 
    const response = await setDoc(docRef, newCoffee);
  } else {
    await updateDoc(docRef, {
      qty: increment(1)
    });
  };

};


/**
 * 
 * @param {object} coffee 
 * Checks if item exists in cart, then decrements or deletes item. 
 */
export const decreaseQty = async (coffee) => {
  const {id, name, imageUrl, variant} = coffee;
  const collectionRef = collection(db, 'cart');

  const docRef = doc(db, 'cart', id);
  const querySnapshot = await getDoc(docRef);

  if (querySnapshot.exists()) {
    if (querySnapshot.data()['qty'] > 1 ) {
      await updateDoc(docRef, {
        qty: increment(-1)
      });
    } else if (querySnapshot.data()['qty'] == 1 ) {
      await deleteDoc(doc(db, "cart", id));
    }
  };

};


export const deleteFromCart = async (coffee) => {
  const {id} = coffee;

  const docRef = doc(db, 'cart', id);
  const querySnapshot = await getDoc(docRef);

  if (querySnapshot.exists()) {
    await deleteDoc(doc(db, "cart", id));
  }
}