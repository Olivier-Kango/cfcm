import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';

const logoss = {
  width: '12%',
};

const logos = {
  width: '100%',
};

const Navbar = () => (
  <nav className="navbar navbar-expand-lg bg-white">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand" style={logoss}>
        <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"><img src={logo} alt="logo_cfcm" style={logos} /></span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span
          className="navbar-toggler-icon"
        />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/nos-extensions" className="nav-link active">
              <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Nos extensions</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/nos-programmes" className="nav-link active">
              <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Nos Programmes</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/formation" className="nav-link active">
              <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Formation</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/medias" className="nav-link active">
              <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"> Médias</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/direct" className="nav-link active">
              <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"> Direct</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link active">
              <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
