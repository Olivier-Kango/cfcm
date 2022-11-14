import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Accueil from './components/Accueil';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Medias from './components/Medias';
import Formation from './components/Formation';
import Services from './components/Services';
import Direct from './components/Direct';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/services" element={<Services />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/qui-sommes-nous" element={<About />} />
        <Route path="/medias" element={<Medias />} />
        <Route path="/direct" element={<Direct />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
