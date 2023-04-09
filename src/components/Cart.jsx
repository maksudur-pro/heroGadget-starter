import React from "react";
import { getStoredCart } from "./Utils/FakeDb";
import { useLoaderData } from "react-router-dom";
import CartItem from "./Cards/CartItem";

const Cart = () => {
  const { cartArray } = useLoaderData();
  console.log(cartArray);
  return (
    <div className="flex min-h-screen justify-center items-start  bg-gray-100 text-gray-900">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:10">
        <h2 className="text-xl font-semibold">
          {cartArray.length ? "Review carts items" : "Cart is EMPTY !!"}
        </h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          {cartArray.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
