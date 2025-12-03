import { Link } from "react-router-dom";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 w-48 m-2 shadow hover:shadow-lg transition">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded"
        />
      </Link>

      <h3 className="mt-2 font-semibold text-lg">{product.name}</h3>
      <p className="text-gray-700 mt-1">₱{product.price}</p>

      <div className="flex flex-col gap-2 mt-3">
        <button
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          onClick={addToCart}
        >
          Add to Cart
        </button>

        <Link
          to={`/product/${product.id}`}
          className="text-center bg-gray-100 text-gray-800 py-2 rounded hover:bg-gray-200 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
