import React from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
  // Mock products data
  const products = [
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      
      {/* Filters */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="accessories">Accessories</option>
          </select>
          
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Sort By</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span className="text-sm text-blue-600 font-semibold">{product.category}</span>
              <h3 className="text-lg font-semibold mt-1">{product.name}</h3>
              <p className="text-gray-600 mt-1">${product.price}</p>
              <div className="mt-4 flex justify-between items-center">
                <Link
                  to={`/products/${product.id}`}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  View Details
                </Link>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <nav className="flex items-center space-x-2">
          <button className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-2 rounded-lg bg-blue-600 text-white">
            1
          </button>
          <button className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
            2
          </button>
          <button className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
            3
          </button>
          <button className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
            Next
          </button>
        </nav>
      </div>
    </div>
  );
}

export default ProductList;
