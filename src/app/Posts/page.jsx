import Link from "next/link";
import React from "react";

export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export const metadata = {
  title: "All Posts",
  description: "Loading all posts using Next.js",
};

export default async function Posts() {
  const posts = await getPosts();
  return (
    <div className="pt-20 gap-8 grid grid-cols-4">
      {posts.map((singlePost) => {
        return (
          <div
            className="border-4 rounded-2xl bg-red-700 p-2"
            key={singlePost.id}
          >
            <p>{singlePost.title}</p>
            <p className="mb-10">{singlePost.body}</p>
            <Link
              className="btn bg-blue-500  text-black  w-10 h-5 p-2 rounded-b-3xl "
              href={`/Posts/${singlePost.id}`}
            >
              Details
            </Link>
          </div>
        );
      })}
    </div>
  );
}
