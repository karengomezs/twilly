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

  return (
    <div className="pb-12">
      <Posts arrayPosts={posts} />
    </div>
  );
}
