import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  // Featured products data (mock)
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Headphones",
      price: 199.99,
      image: "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Electronics"
    },
    {
      id: 2,
      name: "Stylish Watch",
      price: 299.99,
      image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Accessories"
    },
    {
      id: 3,
      name: "Designer Sunglasses",
      price: 149.99,
      image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Fashion"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Welcome to ShopNow
            </h1>
            <p className="text-xl mb-8">
              Discover amazing products at unbeatable prices. Shop now and get exclusive deals!
            </p>
            <Link
              to="/products"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-blue-500 opacity-50 transform skew-x-12"></div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-semibold">{product.category}</span>
                  <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
                  <p className="text-gray-600 mt-2">${product.price}</p>
                  <Link
                    to={`/products/${product.id}`}
                    className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Electronics', 'Fashion', 'Home & Living', 'Sports'].map(category => (
              <Link
                key={category}
                to={`/products?category=${category}`}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition duration-300"
              >
                <i className={`fas fa-${
                  category === 'Electronics' ? 'laptop' :
                  category === 'Fashion' ? 'tshirt' :
                  category === 'Home & Living' ? 'home' :
                  'running'
                } text-3xl text-blue-600 mb-4`}></i>
                <h3 className="text-lg font-semibold">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-blue-600 rounded-lg p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-6">Get the latest updates on new products and upcoming sales</p>
            <form className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
