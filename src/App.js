import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Carousel from './component/Carousel';
import Womens from './pages/Womens';
import Footer from './component/Footer';
import Mens from './component/Men';
import MenShoppingPage from './component/MenShoppingPage';
import WomenShoppingPage from './component/WomeShoppingPage';
import ProductDetailsPage from './component/ShoppindDetails';
import MenProductDetailsPage from './component/MenShoppingDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Carousel />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/menshopping" element={<MenShoppingPage />} />
          <Route path="/womenshopping" element={<WomenShoppingPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/menproduct-details" element={<MenProductDetailsPage />} />
          {/* Add valid paths and components here */}
          {/* <Route path="/about" element={<About /> 
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
