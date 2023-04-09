import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./Cards/ProductCard";
import { addToDb } from "./Utils/FakeDb";

const Shop = () => {
  const productData = useLoaderData();

  const handleAddCart = (id) => {
    addToDb(id);
  };

  return (
    <div className="product-container">
      {productData.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          handleAddCart={handleAddCart}></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
