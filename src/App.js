import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/landingPage/Index';
import Footer from './components/Footer';
import OurWork from './components/ourWork';
import ContactUs from './components/contactUs';
import Blog from './components/blog';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/work" element={<OurWork />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
