import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUS from "./components/AboutUS";
import Carousal from "./components/Carousal";
import Cart from "./components/Cart";
import Categories from "./components/Categories";
import CategoryHomePage from "./components/CategoryHomePage";
import Checkout from "./components/Checkout";
import ContactUS from "./components/ContactUS";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import OrderConfirmation from "./components/OrderConfirmation";
import ProductDetail from "./components/ProductDetail";
import ProductHomepage from "./components/ProductHomepage";
import Products from "./components/Products";
import Search from "./components/Search";
function App() {
  return (
    <main>
      {/* <h1>E-Commerce Project</h1> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/HomePage" element={<HomePage />} />
        <Route path="/AboutUS" element={<AboutUS />} /> */}

        <Route path="/AboutUS" element={<AboutUS />} />
        <Route path="/Carousal" element={<Carousal />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/CategoryHomePage" element={<CategoryHomePage />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/ContactUS" element={<ContactUS />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/OrderConfirmation" element={<OrderConfirmation />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/ProductHomepage" element={<ProductHomepage />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </main>
  );
}

export default App;
