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
          <div key={singlePost.id}>
            <p>{singlePost.title}</p>
            <p>{singlePost.body}</p>
            <Link href={`/Posts/${singlePost.id}`}>Details</Link>
          </div>
        );
      })}
    </div>
  );
}
