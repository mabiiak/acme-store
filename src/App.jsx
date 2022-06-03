import { HashRouter, Routes, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Provider>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/cart" element={ <Cart /> } />
          <Route path="/product" element={ <ProductDetails /> } />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
