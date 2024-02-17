import React from 'react';
// import './style.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import Tasku from './components/Tasku';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Content />} />
          <Route path="/tasku" element={<Tasku />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
