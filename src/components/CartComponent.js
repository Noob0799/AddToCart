import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import CartProduct from "./CartProduct";

const CartComponent = () => {
  const { state, dispatch } = useContext(ProductContext);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(
      state.cart?.reduce((acc, curr) => {
        acc += curr.count * curr.price;
        return acc;
      }, 0)
    );
  }, [state.cart]);

  return (
    <div className="container cart-container">
      <header className="cart-header">
        <h4>Cart (Price: {totalPrice.toFixed(2)})</h4>
      </header>
      <div className="cart-main">
        {state.cart?.length ? (
          <>
            {state.cart.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))}
          </>
        ) : (
          <p>No Items</p>
        )}
      </div>
    </div>
  );
};

export default CartComponent;
