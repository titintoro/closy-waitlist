
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import StyleDiscoverySection from '../components/StyleDiscoverySection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="opacity-100">
        <HeroSection />
        <FeaturesSection />
        <StyleDiscoverySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
