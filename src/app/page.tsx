import { getPost } from "@/api/post";
import Posts from "./components/posts";

export default async function Home() {
  const postsArray = await getPost();

  console.log({ postsArray });

  const posts = postsArray?.docs.map((dato) => {
    let data = dato.data();
    return {
      id: dato.id,
      ...data,
    };
  }) as Post[];

  return <Posts arrayPosts={posts} />;
}
