import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import SellerPage from './pages/SellerPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SellerPage/>} />
        <Route path='/cart' element={<CartPage/>} />
      </Routes>
    </Router>
  )
}

export default App
