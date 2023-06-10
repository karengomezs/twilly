import { db } from "@/app/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function savePost(post: Post) {
  try {
    const docRef = await addDoc(collection(db, "posts"), post);
    return docRef;
  } catch (error) {
    console.error(error);
  }
}
