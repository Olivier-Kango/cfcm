import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <>
    <div className="footer-content">
      <div className="contact-info">
        <h4>Nous contacter</h4>
        <p>Email : contact@example.com</p>
        <p>Téléphone : +123 456 7890</p>
      </div>
      <div className="social-media">
        <h4>Suivez-nous sur les réseaux sociaux</h4>
        <div className="social-icons">
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
    <div className="copyright">
      <p>&copy; 2023 Nom de Votre Église. Tous droits réservés.</p>
    </div>
  </>
);

export default Footer;
