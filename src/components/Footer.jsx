function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            JRAF's Clothing Store
          </h2>
          <p className="text-sm">
            Premium quality clothing to elevate your everyday style.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Men</li>
            <li className="hover:text-white cursor-pointer">Women</li>
            <li className="hover:text-white cursor-pointer">Kids</li>
            <li className="hover:text-white cursor-pointer">New Arrivals</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Shipping</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
          <p className="text-sm mb-2">
            Join our newsletter for exclusive offers.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-3 py-2 text-sm rounded-l-md outline-none text-gray-900"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 text-center py-4 text-sm">
        © {new Date().getFullYear()} JRAF's Clothing Store — All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
