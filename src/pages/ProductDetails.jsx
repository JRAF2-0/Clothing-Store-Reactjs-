import { useParams } from "react-router-dom";

export default function ProductDetails({ products, addToCart }) {
  const { id } = useParams(); // URL = /product/:id
  const product = products.find(p => p.id === Number(id));

  if (!product) return <div className="p-10 text-center">Product not found.</div>;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-10">
      
      <img
        src={product.image}
        alt={product.name}
        className="w-80 h-80 object-cover rounded shadow"
      />

      <div className="max-w-md">
        <h2 className="text-4xl font-bold">{product.name}</h2>
        <p className="text-xl text-gray-600 mt-2">₱{product.price}</p>

        <p className="mt-4 text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          This is a clothing item description example.
        </p>

        <button
          onClick={addToCart}
          className="mt-6 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
}
