import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import Blogone from "./pages/Blogone";
import Blogtwo from "./pages/Blogtwo";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Product />} />
        <Route path="/Blogone" element={<Blogone />} />
        <Route path="/Blogtwo" element={<Blogtwo />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;