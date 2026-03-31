import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";

import AboutSection from "./Components/About/AboutSection";
import ProductSection from "./Components/Product/ProductSection";
import ProductDetail from "./Components/Product/ProductDetail";
import OurProductSection from "./Components/Product/OurProductSection";
import CategoryProductSection from "./Components/Product/CategoryProductSection";

import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = ({ togglePlay, isPlay }) => {
  return (
    <main className="overflow-x-hidden text-black duration-300 bg-[#FBF9F5]">
      <Navbar />
      <Hero togglePlay={togglePlay} />
      <AboutSection />
      <ProductSection />
      <OurProductSection />
      <CategoryProductSection />
      <Footer />
    </main>
  );
};

const App = () => {
  const [isPlay, setIsPlay] = useState(false);

  const togglePlay = () => {
    setIsPlay(!isPlay);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage togglePlay={togglePlay} isPlay={isPlay} />}
        />
        <Route path="/product/:slug" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;