import React from "react";

export const getSinglePost = async (post_id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`
  );
  const data = await res.json();
  return data;
};

export async function generateMetadata({ params }) {
  const singlePost = await getSinglePost(params.id);
  return {
    title: singlePost.title,
    description: singlePost.body,
  };
}

export default async function SinglePost({ params }) {
  const p = await params;
  const singlePost = await getSinglePost(p.id);
  return (
    <div>
      <p className="text-red-500 text-6xl font-extrabold">
        {JSON.stringify(singlePost)}
      </p>
      <h1 className="text-yellow-300">{singlePost.title}</h1>
      <p className="text-blue-600">{singlePost.body}</p>
    </div>
  );
}
