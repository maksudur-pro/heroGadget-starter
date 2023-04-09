import React from "react";
import { useLoaderData } from "react-router-dom";

const Shop = () => {
  const productData = useLoaderData();
  console.log(productData);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3">
      {productData.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  );
};

export default Shop;
