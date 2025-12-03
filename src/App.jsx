// ...existing code...
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";

import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import products from "./data/products";
function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop products={products} addToCart={addToCart} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/product/:id"
          element={<ProductDetails products={products} addToCart={addToCart} />}
        />
      </Routes>
    </>
  );
}

export default App;
