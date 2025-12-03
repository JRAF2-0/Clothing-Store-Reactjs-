import { useState } from "react";
import ProductCard from "./components/ProductCard";
import products from "./data/products";
import NavBar from "./components/NavBar";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <>
      <NavBar cartCount = {cartCount} />
      <div className="flex flex-wrap justify-center mt-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
}

export default App;
