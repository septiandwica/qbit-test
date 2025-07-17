import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/landing/Home";
import Testimonial from "./pages/landing/Testimonial";
import Contact from "./pages/Contact";
import PopularProducts from "./pages/landing/PopularProduct";
import Order from "./pages/Order";
import { useEffect } from "react";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Products from "./pages/Product";
import OrderList from "./pages/admin/OrderList";
import AddProduct from "./pages/admin/AddProduct";
import EditProduct from "./pages/admin/EditProduct";

function LandingPage() {
  useEffect(() => {
    const sectionId = sessionStorage.getItem("scrollToSection");
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        sessionStorage.removeItem("scrollToSection");
      }, 100);
    }
  }, []);

  return (
    <div className="mx-auto">
      <section id="home">
        <Home />
      </section>
      <section id="menu">
        <PopularProducts />
      </section>
      <section id="testimonial">
        <Testimonial />
      </section>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/order" element={<Order />} />
        <Route path="/product" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin/order" element={<OrderList />} />
        <Route path="/admin/product/add" element={<AddProduct />} />
        <Route path="/admin/product/edit/:id" element={<EditProduct />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
