import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
