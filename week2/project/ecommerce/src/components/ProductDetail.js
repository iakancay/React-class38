import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductDetail() {
  const [product, setProduct] = useState("");
  let params = useParams();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${params.productId}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [params.productId]);
  return (
    <div className="product-detail">
      <img src={product?.image} alt={product.id} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>
        <strong>$</strong>
        {product.price}
      </p>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}
