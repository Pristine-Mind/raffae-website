import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import ProductShowcase from './components/ProductShowcase/ProductShowcase';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductShowcase />
      <Footer />
    </>
  );
};

export default App;
