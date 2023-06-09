"use client";
import { useUser } from "@clerk/nextjs";
import * as Form from "@radix-ui/react-form";
import * as Avatar from "@radix-ui/react-avatar";
import { useState } from "react";
import { deletePost, savePost } from "@/api/post";

export default function Posts(props: { arrayPosts: Post[] }) {
  const { user } = useUser();
  const [postContent, setPostContent] = useState<string>("");
  const [postsArray, setPostsArray] = useState<Post[]>(props?.arrayPosts || []);

  console.log(props?.arrayPosts);

  let posts = postsArray.map((post) => {
    return (
      <div
        key={post.id}
        className="bg-gray-900 py-5 px-5 w-[70%] mx-auto rounded-md  text-lime-500 font-semibold"
      >
        <div className="flex gap-8 items-center">
          <Avatar.Root className="">
            <Avatar.Image
              className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center object-cover"
              src={post.userImg}
              alt="Colm Tuite"
            />
            <Avatar.Fallback className="" delayMs={600}>
              CT
            </Avatar.Fallback>
          </Avatar.Root>
          <p className="text-xl">{post.userName}</p>
        </div>
        <div className="ml-20">
          <p className=" text-gray-300 pb-3">{post.content}</p>
          <div className="flex gap-3 [&>button]:p-2 [&>button]:bg-gray-950 [&>button]:rounded-md">
            <button>💚</button>
            <button>🔗</button>
            {user?.id === post.userId && (
              <button
                onClick={async () => {
                  try {
                    await deletePost(post.id);

                    let newArray = postsArray.filter((postContent) => {
                      return postContent.id !== post.id;
                    });
                    setPostsArray(newArray);
                  } catch (error) {
                    console.error(error);
                  }
                }}
                type="button"
              >
                🗑️
              </button>
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="bg-gray-900 py-5 px-5 mt-20 w-[70%] mx-auto rounded-md flex gap-5 text-lime-500 font-semibold">
        <Avatar.Root className="">
          <Avatar.Image
            className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center object-cover"
            src={user?.imageUrl}
            alt="Colm Tuite"
          />
          <Avatar.Fallback className="" delayMs={600}>
            CT
          </Avatar.Fallback>
        </Avatar.Root>

        <Form.Root
          className="flex items-center gap-5 w-full"
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              if (postContent && user?.id && user.fullName) {
                let post = {
                  userId: user?.id,
                  content: postContent,
                  date: new Date(),
                  userName: user?.fullName,
                  userImg: user.imageUrl,
                } as Post;

                const doc = await savePost(post);
                post.id = doc?.id ?? Date.now().toString();

                setPostsArray([post, ...postsArray]);
                setPostContent("");
              }
            } catch (error) {
              console.error(error);
            }
          }}
        >
          <Form.Field className="w-full" name="text">
            <Form.Control className="w-full" asChild>
              <input
                onChange={(e) => {
                  setPostContent(e.target.value);
                }}
                value={postContent}
                className="flex-1 w-full p-2 rounded-md"
                placeholder="What're you thinking...? 🧐"
                type="text"
                required
              />
            </Form.Control>
          </Form.Field>

          <Form.Submit asChild>
            <button
              type="submit"
              className=" p-2 rounded-md bg-lime-500 text-center text-gray-950"
            >
              POST
            </button>
          </Form.Submit>
        </Form.Root>
      </div>

      {/* ------------ posts div */}
      <div className="mt-10 flex flex-col gap-5">{posts}</div>
      {/* ------------ posts div */}
    </div>
  );
}
