import React, { useEffect, useState } from "react";
import products from "./../fake-data/all-products";
import ProductCard from "./ProductCard";
import ProductFilterButton from "./ProductFilterButton";

export default function ProductList() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const data = await response.json();
        setCategories(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (selectedCategory) {
          const response = await fetch(
            `https://fakestoreapi.com/products/category/${selectedCategory}`
          );
          const data = await response.json();
          setFilteredProducts(data);
          setIsLoading(false);
        } else {
          const response = await fetch("https://fakestoreapi.com/products");
          const data = await response.json();
          setFilteredProducts(data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [selectedCategory]);

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <>
      <h1>Products</h1>
      <div className="product-filter-bar">
        {categories.map((ctg) => (
          <ProductFilterButton
            key={ctg}
            category={ctg}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        ))}
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard value={product} key={product.id} />
        ))}
      </div>
    </>
  );
}
