import { createContext, useReducer } from "react";
import ProductReducer from "../reducers/ProductReducer";

const initialState = { products: [], cart: [] };

export const ProductContext = createContext(initialState);

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  return <ProductContext.Provider value={{state, dispatch}}>{children}</ProductContext.Provider>;
};
