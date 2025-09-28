import React from "react";

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  // const { NEXT_PUBLIC_SERVER_ADDRESS } = process.env;
  // console.log(NEXT_PUBLIC_SERVER_ADDRESS);
  const res = await fetch("http://localhost:3000/api/items");
  const data = await res.json();

  return (
    <ul className="text-center mt-9">
      {data?.map((singleProduct) => {
        return <li key={singleProduct._id}>{singleProduct?.productName}</li>;
      })}
    </ul>
  );
}
