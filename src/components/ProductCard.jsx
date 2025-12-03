export default function ProductCard({ product, addToCart }) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 w-48 m-2 shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="mt-2 font-semibold text-lg">{product.name}</h3>
      <p className="text-gray-700 mt-1">₱{product.price}</p>
      <button 
        className="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        onClick={addToCart}
      >
        Add to Cart
      </button>
      
    </div>
  );
}
