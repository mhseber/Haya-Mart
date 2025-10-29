// import React from "react";

// export const dynamic = "force-dynamic";

// export default async function ProductsPage() {
//   const res = await fetch("http://localhost:3000/api/items");
//   const data = await res.json();

//   return (
//     <ul className="text-center mt-9">
//       {data?.map((singleProduct) => {
//         return <li key={singleProduct._id}>{singleProduct?.productName}</li>;
//       })}
//     </ul>
//   );
// }
import React from "react";

const OfferZonePage = () => {
  return (
    <div className="pt-20 p-40">
      <h1 className="text-center  text-3xl font-bold">
        Welcome to Offer Zone!
      </h1>
    </div>
  );
};

export default OfferZonePage;
