import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Academics from './pages/Academics';
import ContactMe from './pages/Contactme';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
