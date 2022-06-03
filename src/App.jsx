import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/cart" element={ <Cart /> } />
        <Route path="/product" element={ <ProductDetails /> } />
      </Routes>
    </HashRouter>
  );
}

export default App;
