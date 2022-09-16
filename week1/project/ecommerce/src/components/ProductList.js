import React, { useState } from "react";
import categories from "../fake-data/all-categories";
import products from "./../fake-data/all-products";
import ProductCard from "./ProductCard";
import ProductFilterButton from "./ProductFilterButton";

export default function ProductList() {
  const [category, setCategory] = useState("jewelery");
  const [selectedId, setSelectedId] = useState("1");

  const selectCategory = (e) => {
    const buttonText = e.target.innerText;
    const categoryName = buttonText.slice(6);
    setCategory(categoryName);
    setSelectedId(e.target.id);
  };

  return (
    <>
      <h1>Products</h1>
      <div className="product-filter-bar">
        {categories.map((elm, index) => (
          <ProductFilterButton
            id={index}
            text={elm}
            eventHandler={selectCategory}
            selected={selectedId}
          />
        ))}
      </div>
      <div className="product-list">
        {products
          .filter((product) => product.category === category)
          .map((product) => (
            <ProductCard value={product} />
          ))}
      </div>
    </>
  );
}
