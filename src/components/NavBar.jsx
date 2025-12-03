import { Link } from "react-router-dom";

export default function Navbar({ cartCount }) {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">JRAF's Clothing Store</h1>

      <div className="flex items-center gap-4">

        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>

        <Link to="/shop" className="hover:text-gray-300">
          Shop
        </Link>

        <Link to="/cart" className="relative">
          <span className="text-2xl">🛒</span>

          {cartCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-500 text-xs text-white w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>

      </div>
    </nav>
  );
}
