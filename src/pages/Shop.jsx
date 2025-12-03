import ProductCard from "../Components/ProductCard"

export default function Shop({ products, addToCart }) {
  return (
    <div className="flex flex-wrap justify-center mt-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}