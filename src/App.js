import ProductComponent from "./components/ProductComponent.js";
import CartComponent from "./components/CartComponent.js";
import { ProductContextProvider } from "./contexts/ProductContext.js";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>List of Products</h1>
      </header>
      <div className="main">
        <ProductContextProvider>
          <ProductComponent />
          <CartComponent />
        </ProductContextProvider>
      </div>
    </div>
  );
}

export default App;
