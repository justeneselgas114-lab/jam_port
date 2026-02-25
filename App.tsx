import React from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Expertise from './components/sections/Expertise';
import Experience from './components/sections/Experience';
import UniquePositioning from './components/sections/UniquePositioning';
import Portfolio from './components/sections/Portfolio';
import IdealClient from './components/sections/IdealClient';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <UniquePositioning />
        <Portfolio />
        <IdealClient />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
