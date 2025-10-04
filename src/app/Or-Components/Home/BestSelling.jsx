import React from "react";
import { FaFire } from "react-icons/fa";

const BestSelling = () => {
  return (
    <div>
      <section className="flex justify-start gap-3 my-8 pl-5">
        <FaFire className="text-4xl text-blue-400" />
        <h2 className="text-3xl text-blue-200 font-bold">Best Selling</h2>
      </section>
      <div className="divider divide-gray-300"></div>

      <section></section>
    </div>
  );
};

export default BestSelling;
