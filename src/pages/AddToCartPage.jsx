import React, { useState, useEffect } from 'react';
import { FaSearch, FaShoppingCart, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AddToCartPage = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isCartOpen, setIsCartOpen] = useState(false);
  
    // Simulated product data fetch
    useEffect(() => {
      // In a real app, this would be an API call
      const fetchedProducts = Array.from({ length: 30 }, (_, i) => ({
        id: i + 1,
        name: `Product ${i + 1}`,
        price: Math.floor(Math.random() * 200) + 50,
        salePrice: Math.random() > 0.5 ? Math.floor(Math.random() * 150) + 30 : undefined,
        image: `/src/assets/${i + 1}.png`,
        rating: Math.random() * 5,
        reviews: Math.floor(Math.random() * 500),
      }));
      setProducts(fetchedProducts);
    }, []);
  
    const addToCart = (product) => {
      setCart(prevCart => {
        const existingItem = prevCart.find(item => item.id === product.id);
        if (existingItem) {
          return prevCart.map(item => 
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
        return [...prevCart, { ...product, quantity: 1 }];
      });
    };
  
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const updateCartItemQuantity = (id, change) => {
        setCart(prevCart => 
          prevCart.map(item => 
            item.id === id 
              ? { ...item, quantity: Math.max(1, item.quantity + change) } 
              : item
          )
        );
      };
      
      const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
      };
      
    const calculateTotal = () => {
      return cart.reduce((total, item) => total + (item.salePrice || item.price) * item.quantity, 0);
    };

  return (
    <>
    <div className="container mx-auto px-4 py-8 ">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-purple-900">TIMBU CLOUD SHOP</h1>
        <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:underline">Shop</Link></li>
              <li><Link to="/addcart" className="hover:underline">Wishlist</Link></li>
              <li><Link to="/cart" className="hover:underline">Cart</Link></li>
            </ul>
          </nav>
        <div className="flex items-center">
          <div className="relative mr-4">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 border rounded-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button
            className="bg-purple-600 text-white p-2 rounded-full relative"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <FaShoppingCart />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2">{product.name}</h2>
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'} />
                  ))}
                </div>
                <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  {product.salePrice ? (
                    <>
                      <span className="font-bold text-lg">${product.salePrice}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">${product.price}</span>
                    </>
                  ) : (
                    <span className="font-bold text-lg">${product.price}</span>
                  )}
                </div>
                <button
                  className="bg-purple-600 text-white px-4 py-2 rounded-full"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isCartOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
    <div className="bg-white w-full max-w-md p-6 overflow-y-auto h-full">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <div className="flex items-center mt-2">
              <button 
                className="bg-gray-200 px-2 py-1 rounded-l"
                onClick={() => updateCartItemQuantity(item.id, -1)}
              >
                -
              </button>
              <span className="bg-gray-100 px-4 py-1">{item.quantity}</span>
              <button 
                className="bg-gray-200 px-2 py-1 rounded-r"
                onClick={() => updateCartItemQuantity(item.id, 1)}
              >
                +
              </button>
            </div>
          </div>
          <div>
            <span className="font-bold">${((item.salePrice || item.price) * item.quantity).toFixed(2)}</span>
            <button 
              className="ml-2 text-red-500"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="border-t pt-4 mt-4">
        <div className="flex justify-between font-bold">
          <span>Total:</span>
          <span>${calculateTotal().toFixed(2)}</span>
        </div>
      </div>
      <button className="w-full bg-purple-600 text-white py-3 rounded-lg mt-6">
        Proceed to Checkout
      </button>
      <button
        className="w-full border border-purple-600 text-purple-600 py-3 rounded-lg mt-4"
        onClick={() => setIsCartOpen(false)}
      >
        Continue Shopping
      </button>
    </div>
  </div>
)}
    </div>
    </>
  );
};

export default AddToCartPage;