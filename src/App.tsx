import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Ooty from './pages/Ooty';
import Pykara from './pages/Pykara';
import Coonoor from './pages/Coonoor';
import Avalanche from './pages/Avalanche';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/ooty" element={<Ooty />} />
        <Route path="/pykara" element={<Pykara />} />
        <Route path="/coonoor" element={<Coonoor />} />
        <Route path="/avalanche" element={<Avalanche />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
