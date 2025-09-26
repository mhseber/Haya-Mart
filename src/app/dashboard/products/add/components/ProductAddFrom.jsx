"use client";

import { useRouter } from "next/navigation";

export default function ProductAddFrom() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const payload = { productName };
    const res = await fetch("http://localhost:3000/api/items", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    console.log(result);
    form.reset();
    //alert("Product Added");
    router.push("/products");
    router.refresh();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="border-2 rounded-2xl h-8 p-4 border-amber-200"
          type="text"
          name="productName"
          placeholder="Product Name"
        />
        <button
          className="btn ml-4 bg-red-600 h-8 w-15 rounded-4xl "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
