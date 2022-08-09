import Header from './components/header';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import ShoppingCart from './components/ShoppingCart';
import Home from './components/Home';
import Product from './components/Product';

function App() {
  return (
    <div className="header">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Products/:id" element={<Product />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default App;
