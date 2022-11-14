import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand">Logos</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link active">Accueil</Link>
          </li>
          <li className="nav-item">
            <Link to="/formation" className="nav-link active">Formation</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link active">Nos Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/qui-sommes-nous" className="nav-link active">Qui sommes-nous?</Link>
          </li>
          <li className="nav-item">
            <Link to="/medias" className="nav-link active">Médias</Link>
          </li>
          <li className="nav-item active">
            <Link to="/direct" className="nav-link active">Direct</Link>
          </li>
          <li className="nav-item active">
            <Link to="/contact" className="nav-link active">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
