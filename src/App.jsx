import React from 'react';
import ScrollToTop from "./scrollToTop.jsx";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RoyalOakWebsite from './RoyalOakCC';
import AboutUs from './AboutUs';
import ContactUs from './contactUs.jsx';
import MenuPage from './menuPage.jsx';


function App() {
  return (
    <BrowserRouter basename="/RoyalOakCC">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RoyalOakWebsite />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/menus" element={<MenuPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;