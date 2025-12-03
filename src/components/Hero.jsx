function Hero() {
  return (
    <section className="bg-gray-100 py-20 px-8 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Elevate Your Style
      </h1>

      <p className="text-lg text-gray-600 max-w-xl mb-6">
        Discover the latest fashion trends and premium quality clothing tailored just for you.
      </p>

      <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
        Shop Now
      </button>
    </section>
  );
}

export default Hero;
