import React from 'react';
// import './style.css';
import { FC } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import AddTask from './components/AddTask';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
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
