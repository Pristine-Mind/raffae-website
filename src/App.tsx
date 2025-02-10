import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import ProductShowcase from './components/ProductShowcase/ProductShowcase';
import Footer from './components/Footer/Footer';
import AboutSection from './components/AboutSection/AboutSection';
import ProductTabs from './components/ProductTabs/ProductTabs';
import PromoBanners from './components/PromoBanners/PromoBanners';
import MultiReviewSection from './components/MultiReviewSection/MultiReviewSection';
import Shop from './components/Shop/Shop';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Subscribe from './components/Subscribe/Subscribe';
import ContactUs from './components/ContactUs/ContactUs';
import AboutUs from './components/AboutUs/AboutUs';
import LoginRegister from './components/LoginRegister';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ProductShowcase />
      <AboutSection />
      <ProductTabs />
      <PromoBanners />
      <MultiReviewSection />
      <Subscribe />
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
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path="/login" element={<LoginRegister defaultTab="login" />} />
        <Route path="/register" element={<LoginRegister defaultTab="register" />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
