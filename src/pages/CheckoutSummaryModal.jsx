// import React from 'react';
import PropTypes from 'prop-types';
import { FaCheckCircle, FaCreditCard } from 'react-icons/fa';

const CheckoutSummaryModal = ({ isOpen, onClose, orderSummary }) => {
  if (!isOpen) return null;

  const handleUpdateCard = () => {
    // Handle logic for updating credit/debit card
  };

  const handlePayment = () => {
    // Simulate payment processing
    console.log('Processing payment...');

    // Close the modal after payment
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
              <FaCheckCircle className="text-green-500 text-xl" />
            </div>
            <h2 className="text-xl font-semibold">Israeldkreator</h2>
          </div>

          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${orderSummary.subtotal}</span>
            </div>
            <div className="flex justify-between text-red-500">
              <span>Discount (20%)</span>
              <span>-${orderSummary.discount}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>${orderSummary.deliveryFee}</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2 border-t">
              <span>Total</span>
              <span>${orderSummary.total}</span>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold mb-2">Payment Method</h4>
            <div className="flex items-center bg-gray-100 p-3 rounded-lg">
              <FaCreditCard className="text-blue-500 mr-3" />
              <div>
                <p className="font-semibold">Visa **** **** **** 0789</p>
                <p className="text-sm text-gray-500">Expires 09/2028</p>
              </div>
            </div>
          </div>

          <button 
            className="text-purple-600 text-sm mb-6"
            onClick={handleUpdateCard}
          >
            Update Credit and Debit Card
          </button>

          <div className="mb-6">
            <h4 className="font-semibold mb-2">Cancellation Policy</h4>
            <p className="text-sm text-gray-600">
              If you are responsible for cancelling this title, the Cancellation fee will be non-refundable. <span className="text-purple-600">Learn more</span>
            </p>
          </div>

          <button 
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold"
            onClick={handlePayment}
          >
            Securely make payment
          </button>

          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

CheckoutSummaryModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  orderSummary: PropTypes.shape({
    subtotal: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    deliveryFee: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
};

export default CheckoutSummaryModal;
