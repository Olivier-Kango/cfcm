import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.jpg';
import '../styling/Navbar.scss';

const logos = {
  width: '15%',
};

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-white">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" style={logos}>
          <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"><img src={logo} alt="logo_cfcm" className="logo-cfcm" /></span>
        </Link>
        <button
          className="navbar-toggler ml-auto custom-toggler"
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="nav-ul">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" className={(pathname === '/') ? 'currentLink' : ''}>Accueil</span>
              </Link>
            </li>
            <li className="nav-item">
              {/* <Link to="/nos-extensions" className="nav-link active">
                <span
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                  className={(pathname === '/nos-extensions') ? 'currentLink' : ''}
                >
                  Nos extensions
                </span>
              </Link> */}
            </li>
            <li className="nav-item">
              <Link to="/nos-programmes" className="nav-link active">
                <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" className={(pathname === '/nos-programmes') ? 'currentLink' : ''}>Nos Programmes</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/formation" className="nav-link active">
                <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" className={(pathname === '/formation') ? 'currentLink' : ''}>Formation</span>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/medias" className="nav-link active">
                <span
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                  className={(pathname === '/medias') ? 'currentLink' : ''}
                >
                  Espace Médias
                </span>
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/direct" className="nav-link active">
                <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" className={(pathname === '/direct') ? 'directLink' : 'direct-button'}>Direct</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link active">
                <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" className={(pathname === '/contact') ? 'currentLink' : ''}>Contact</span>
              </Link>
            </li>
            <li className="nav-item">
              <a href="https://web.facebook.com/profile.php?id=100082159523264" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook-official fa-2x" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
