import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import PopupPlayer from "./Components/PopupPlayer/PopupPlayer";
import TopList from "./Components/TopList/TopList";
import Testimonial from "./Components/Testimonial/Testimonial";
import AboutSection from "./Components/About/AboutSection";
import ProductSection from "./Components/Product/ProductSection";
import ProductDetail from "./Components/Product/ProductDetail";

import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = ({ togglePlay, isPlay }) => {
  return (
    <main className="overflow-x-hidden bg-white text-black duration-300">
      <Navbar />
      <Hero togglePlay={togglePlay} />
      <AboutSection />
      <ProductSection />
      <TopList />
      <Features />
      <Testimonial />
      <Footer />
      <PopupPlayer isPlay={isPlay} togglePlay={togglePlay} />
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