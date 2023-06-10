import { db } from "@/app/firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

export async function savePost(post: Post) {
  try {
    const docRef = await addDoc(collection(db, "posts"), post);
    return docRef;
  } catch (error) {
    console.error(error);
  }
}

export async function getPost() {
  try {
    const querySnapShot = await getDocs(collection(db, "posts"));
    return querySnapShot;
  } catch (error) {
    console.error(error);
  }
}

export async function deletePost(id: string) {
  try {
    return await deleteDoc(doc(db, "posts", id));
  } catch (error) {
    console.error(error);
  }
}
