import ProductCard from "./components/ProductCard";
import products from './data/products'

function App() {
  return (
    <div className="flex flex-wrap justify-center mt-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default App;