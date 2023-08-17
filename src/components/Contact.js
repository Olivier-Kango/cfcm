import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../styling/Contact.scss';

const Contact = () => (
  <div className="contact">
    <h4>
      COMMUNAUTE DE LA FOI CHRETIENNE DANS LE MONDE
    </h4>
    <br />
    <p>
      Adresse: C.F.C.M, R.D.Congo
      {' '}
      <br />
      Nord Kivu, Ville de Goma, Commune de Karisimbi, Av. Kasindi II, N°51.
      {' '}
      Q. Katoyi
      <br />
      Contact: (+243)995-865-149; (+243)997-604-877;
      <br />
      E-mail:
      {' '}
      <span>cfcmgoma@gmail.com</span>
    </p>
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

export default Contact;
