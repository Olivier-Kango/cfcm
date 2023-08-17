import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styling/Footer.scss';

const Footer = () => {
  const whatsappIconStyle = {
    color: 'green',
    marginRight: '5px',
    fontSize: '1.2em'
  };

  const gmailIconStyle = {
    marginRight: '5px',
  };

  return (
    <div id="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h4>Nous contacter </h4>
          <p className="mail">
            <FontAwesomeIcon icon={faEnvelope} style={gmailIconStyle} />
            &ensp;cfcmgoma@gmail.com
          </p>
          <p className="whatsapp">
            <FontAwesomeIcon icon={faWhatsapp} style={whatsappIconStyle} />
            (+243)995-865-149
          </p>
          <p className="whatsapp">
            <FontAwesomeIcon icon={faWhatsapp} style={whatsappIconStyle} />
            (+243)997-604-877
          </p>
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
      </div>
      <div className="copyright">
        <p>
          &copy;
          {' '}
          {new Date().getFullYear()}
          {' '}
          Église C.F.C.M. Tous droits réservés.
        </p>
      </div>
    </div>
  );
}

export default Footer;
