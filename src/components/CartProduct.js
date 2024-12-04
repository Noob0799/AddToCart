import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

const CartProduct = ({ product }) => {
  const { state, dispatch } = useContext(ProductContext);
  const handleClick = (type) => {
    dispatch({ type, payload: { id: product.id } });
  };
  return (
    <div className="cart-product-card">
      <img src={product.thumbnail} alt={product.title} />
      <div className="cart-product-details">
        <p>{product.title}</p>
        <p>
          <b>Price: </b>
          {product.price}
        </p>
        <p>Count: {product.count}</p>
      </div>
      <div className="cart-product-btns">
        <button onClick={() => handleClick("DECREMENT_COUNT")}>-</button>
        <button onClick={() => handleClick("INCREMENT_COUNT")}>+</button>
      </div>
    </div>
  );
};

export default CartProduct;
