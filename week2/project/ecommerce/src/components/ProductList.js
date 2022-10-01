import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductFilterButton from "./ProductFilterButton";
import loading from "./../assets/200w.gif";
import { Link } from "react-router-dom";
import Error from "./Error";

export default function ProductList() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

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
        setIsLoading(false);
        setError(error.message);
      }
    })();
  }, []);

  useEffect(() => {
    const productsUrl = selectedCategory
      ? `https://fakestoreapi.com/products/category/${selectedCategory}`
      : "https://fakestoreapi.com/products";
    (async () => {
      try {
        const response = await fetch(productsUrl);
        const data = await response.json();
        setFilteredProducts(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    })();
  }, [selectedCategory]);

  return isLoading ? (
    <>
      <h2>Loading...</h2>
      <img src={loading} alt="loading.." />
    </>
  ) : error ? (
    <Error error={error} />
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
          <Link
            className="product-card"
            to={`/products/${product.id}`}
            key={product.id}
          >
            <ProductCard product={product} key={product.id} />
          </Link>
        ))}
      </div>
    </>
  );
}
