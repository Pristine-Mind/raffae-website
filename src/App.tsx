import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import ProductShowcase from './components/ProductShowcase/ProductShowcase';
import Footer from './components/Footer/Footer';
import AboutSection from './components/AboutSection/AboutSection';
import ProductTabs from './components/ProductTabs/ProductTabs';
import PromoBanners from './components/PromoBanners/PromoBanners';
import MultiReviewSection from './components/MultiReviewSection/MultiReviewSection';
import Shop from './components/Shop/Shop';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ProductShowcase />
      <AboutSection />
      <ProductTabs />
      <PromoBanners />
      <MultiReviewSection />
    </>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/shop"
          element={<Shop />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
