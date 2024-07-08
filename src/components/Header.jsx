import { FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <header className="bg-purple-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">TIMBU CLOUD SHOP</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:underline">Shop</Link></li>
              <li><Link to="/addcart" className="hover:underline">Wishlist</Link></li>
              <li><Link to="/cart" className="hover:underline">Cart</Link></li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <FiSearch size={24} />
            <FiShoppingCart size={24} />
            <FiUser size={24} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
