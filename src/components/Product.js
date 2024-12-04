import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../contexts/ProductContext";

const Product = ({ product }) => {
  const { state, dispatch } = useContext(ProductContext);
  const [isPresentInCart, setIsPresentInCart] = useState(false);
  useEffect(() => {
    setIsPresentInCart(state.cart?.some(prod => prod.id === product.id));
  }, [state.cart]);
  const handleClick = (type) => {
    dispatch({
      type,
      payload: {
        id: product.id,
        title: product.title,
        thumbnail: product.thumbnail,
        price: product.price,
        count: 1,
      },
    });
  };
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.title}</p>
      <p>
        <b>Category: </b>
        {product.category}
      </p>
      <p>
        <b>Price: </b>
        {product.price}
      </p>
      {isPresentInCart ? (
        <button
          className="prod-card-btn remove-from-cart-btn"
          onClick={() => handleClick("REMOVE_FROM_CART")}
        >
          Remove From Cart
        </button>
      ) : (
        <button
          className="prod-card-btn add-to-cart-btn"
          onClick={() => handleClick("ADD_TO_CART")}
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default Product;
