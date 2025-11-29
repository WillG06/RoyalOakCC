import React from 'react';
import ScrollToTop from "./scrollToTop.jsx";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RoyalOakWebsite from './RoyalOakCC';
import AboutUs from './AboutUs';
import ContactUs from './contactUs.jsx';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RoyalOakWebsite />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;