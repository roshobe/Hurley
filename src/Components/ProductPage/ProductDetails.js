import React, { useState } from "react";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [material, setMaterial] = useState("Wood");
  const [color, setColor] = useState("White");

  return (
    <div className="max-w-2xl mx-auto p-9 bg-white shadow-lg rounded-lg ">
      <h1 className="text-3xl font-bold">Minimal Bar Stool</h1>
      <div className="flex items-center mt-2">
        <span className="text-yellow-400 text-xl">★ ★ ★ ★ ☆</span>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Price</h2>
        <p className="text-2xl">$1,419</p>
        <span className="inline-block bg-green-200 text-green-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
          In Stock
        </span>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Description</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            The most beautiful curves of this swivel stool adds an elegant touch
            to any environment
          </li>
          <li>Memory swivel seat returns to original seat position</li>
          <li>Comfortable integrated layered chair seat cushion design</li>
          <li>Fully assembled! No assembly required</li>
        </ul>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Frame Material</h3>
        <select
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option>Wood</option>
          <option>Metal</option>
          <option>Plastic</option>
        </select>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Color</h3>
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option>White</option>
          <option>Black</option>
          <option>Grey</option>
        </select>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Quantity</h3>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="mt-8">
        <button className="w-full bg-pink-500 text-white p-3 rounded-md font-semibold hover:bg-pink-700">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
