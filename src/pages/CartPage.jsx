import { useState } from 'react';
import { FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CheckoutSummaryModal from '../pages/CheckoutSummaryModal';


const CartPage = () => {
  const [cart, setCart] = useState([
    { id: 1, name: 'One Life Graphic T-Shirt', price: 260, quantity: 1, color: 'Brown', image: '/src/assets/shirt2.png' },
    { id: 2, name: 'Vertical Striped Shirt', price: 212, quantity: 1, color: 'Green', image: '/src/assets/shirt5.png' },
    { id: 3, name: 'Skinny Fit Jeans', price: 240, quantity: 1, color: 'Blue', image: '/src/assets/shirt6.png' },
  ]);

  const updateQuantity = (id, change) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    ));
  
    // Update orderSummary based on new cart state
    const newSubtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const newDiscount = newSubtotal * 0.2;
    const newTotal = newSubtotal - newDiscount + deliveryFee;
  
    setOrderSummary({
      subtotal: newSubtotal,
      discount: newDiscount,
      deliveryFee: deliveryFee,
      total: newTotal
    });
  };
  

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal * 0.2;
  const deliveryFee = 20;
  const total = subtotal - discount + deliveryFee;

  
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [orderSummary, setOrderSummary] = useState({
    subtotal: 712,
    discount: 142,
    deliveryFee: 20,
    total: 590
  });
  

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-purple-900">Your cart</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            {cart.map(item => (
              <div key={item.id} className="flex items-center border-b py-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4" />
                <div className="flex-grow">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Color: {item.color}</p>
                  <p className="font-bold">${item.price}</p>
                </div>
                <div className="flex items-center">
                  <button onClick={() => updateQuantity(item.id, -1)} className="bg-gray-200 p-2 rounded-full">
                    <FaMinus className="text-gray-600" />
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="bg-gray-200 p-2 rounded-full">
                    <FaPlus className="text-gray-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:w-1/3 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between text-red-500">
                <span>Discount (20%)</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>${deliveryFee}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <div className="mt-6">
              <input type="text" placeholder="Add promo code" className="w-full p-2 border rounded mb-2" />
              <button className="w-full bg-purple-600 text-white py-2 rounded">Apply</button>
            </div>
            <button 
        onClick={() => setIsCheckoutModalOpen(true)}
        className="w-full bg-purple-800 text-white py-3 rounded mt-4 flex items-center justify-center"
      >
         <FaShoppingCart className="mr-2" /> Go to Checkout
      </button>

      <CheckoutSummaryModal 
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        orderSummary={orderSummary}
      />
          </div>
        </div>
        <div className="mt-12 bg-purple-900 text-white p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <input type="email" placeholder="Enter your email address" className="flex-grow p-2 rounded text-black" />
            <button className="bg-white text-purple-900 px-4 py-2 rounded">Subscribe to Newsletter</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
