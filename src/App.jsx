import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import SellerPage from './pages/SellerPage';
import CartPage from './pages/CartPage';
import AddToCartPage from './pages/AddToCartPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SellerPage/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/addcart' element={<AddToCartPage/>} />
      </Routes>
    </Router>
  )
}

export default App
