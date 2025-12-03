import ProductCard from "./components/ProductCard";

function App() {
  const products = [
    {
      id: 1,
      name: "Black Hoodie",
      price: 799,
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR7oCnAdsWiQGzvkjN-6fi7z8xmBOi7LAEHPL3xztBcd7NM0KIG1TArBfsj6IBjvaMzdsb7qjvAFUj52zsN6a7aoWZGJj8V_cU97JqJD8g_SpjM1RjX-A4-b4E",
    },
    {
      id: 2,
      name: "White T-shirt",
      price: 399,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9kP07nn4wVfzvkxDdwjJahYOmhODMFvS7zqCYV8u695rL71Ond5vu74c&s",
    },
    {
      id: 3,
      name: "Blue Jeans",
      price: 1200,
      image: "data:image/jpeg;base64,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",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center mt-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default App;
