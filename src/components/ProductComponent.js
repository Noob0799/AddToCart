import React, { useContext, useEffect } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "./Product";

const ProductComponent = () => {
  const {state, dispatch} = useContext(ProductContext);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    dispatch({
      type: "UPDATE_PRODUCTS",
      payload: data.products,
    });
  };
  return (
    <div className="container product-container">
      {state.products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductComponent;
