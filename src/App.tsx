import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import ProductShowcase from './components/ProductShowcase/ProductShowcase';
import Footer from './components/Footer/Footer';
import AboutSection from './components/AboutSection/AboutSection';
import ProductTabs from './components/ProductTabs/ProductTabs';
import PromoBanners from './components/PromoBanners/PromoBanners';
import MultiReviewSection from './components/MultiReviewSection/MultiReviewSection';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductShowcase />
      <AboutSection />
      <ProductTabs />
      <PromoBanners />
      <MultiReviewSection />
      <Footer />
    </>
  );
};

export default App;
