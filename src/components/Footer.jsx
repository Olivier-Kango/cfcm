import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../styling/Footer.scss';

const Footer = () => (
  <>
    <div className="footer-content">
      <div className="contact-info">
        <h4>Nous contacter</h4>
        <p>Email : cfcmgoma@gmail.com</p>
        <p>Téléphone 1 :  (+243)995-865-149</p>
        <p>Téléphone 2 :  (+243)997-604-877</p>
      </div>
      <div className="social-media">
        <h4>Suivez-nous sur les réseaux sociaux</h4>
        <div className="social-icons">
          <a href="https://web.facebook.com/profile.php?id=100082159523264" className="facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.youtube.com/@eglisecfcm-ci5kn" className="youtube">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Église C.F.C.M. Tous droits réservés.</p>
      </div>
    </div>
  </>
);

export default Footer;
