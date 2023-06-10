import { getPost } from "@/api/post";
import Posts from "./components/posts";

export default async function Home() {
  const postsArray = await getPost();
  const posts = (await postsArray?.docs.map((dato) => {
    return dato.data();
  })) as Post[];

  return <Posts arrayPosts={posts} />;
}
