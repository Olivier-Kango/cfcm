import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../styling/Footer.scss';

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
          <a href="https://web.facebook.com/profile.php?id=100082159523264">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.youtube.com/@eglisecfcm-ci5kn">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </div>
    <div className="copyright">
      <p>&copy; 2023 Église C.F.C.M. Tous droits réservés.</p>
    </div>
  </>
);

export default Footer;
