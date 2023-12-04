import './Ccsreset/reset.css';
import './Ccsreset/normalizer.css';
import './App.css';
import React, { useState } from 'react';
import {Routes, Route} from "react-router-dom";
import Header from "../src/Components/Header/Header"
import Footer from "../src/Components/Footer/Footer"
import Home from './Pages/Home/Home';
import Alta from './Pages/Alta/Alta';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <> 
      <Header cartItems={cartItems} setCart={setCartItems} />
      <Routes>
        <Route path="/" element={<Home setCart={setCartItems} />} />
        <Route path="/Alta" element={<Alta/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/About" element={<About/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
