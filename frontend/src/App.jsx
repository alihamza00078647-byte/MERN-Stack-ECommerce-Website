import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Collection from "./pages/collection";
import About from "./pages/about";
import Contact from "./pages/contact";
import Product from "./pages/Product";
import Cart from "./pages/cart";
import Login from "./pages/Login";
import OrderPlace from "./pages/PlaceOrder";
import Order from "./pages/Order";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Searchbar from "./components/Searchbar";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/ReactToastify.css"


function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Searchbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<OrderPlace />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
