const ProductReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PRODUCTS":
      return { ...state, products: [...action.payload] };
    case "ADD_TO_CART":
      return { ...state, cart: [action.payload, ...state.cart] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: [...state.cart].filter((prod) => prod.id !== action.payload.id),
      };
    case "INCREMENT_COUNT":
      return {
        ...state,
        cart: [...state.cart].map((prod) => {
          if (prod.id === action.payload.id) {
            prod.count++;
          }
          return prod;
        }),
      };
    case "DECREMENT_COUNT":
      return {
        ...state,
        cart: [...state.cart]
          .map((prod) => {
            if (prod.id === action.payload.id && prod.count > 0) {
              prod.count--;
            }
            return prod;
          })
          .filter((prod) => prod.count > 0),
      };
    default:
      return { ...state };
  }
};

export default ProductReducer;
