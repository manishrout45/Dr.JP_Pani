import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FloatingButtons from "./components/FloatingButtons";


// Page imports
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import ServicesDetails from "./pages/ServicesDetails";


// AOS for scroll animations
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Ensures page scroll resets on route change */}
      <Navbar />

      <FloatingButtons />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/services/:slug" element={<ServicesDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
