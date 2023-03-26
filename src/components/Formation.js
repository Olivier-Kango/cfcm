import React, { useEffect } from 'react';
import '../styling/Formation.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBookOpen } from '@fortawesome/free-solid-svg-icons';

const Formation = () => {
  const pdfFileName = 'Afferm_franc.pdf';
  const pdfFileSw = 'Afferm_swah.pdf';
  const folderName = 'pdf';
  const pdfPath = `${process.env.PUBLIC_URL}/${folderName}/${pdfFileName}`;
  const pdfPathSw = `${process.env.PUBLIC_URL}/${folderName}/${pdfFileSw}`;

  useEffect(() => {
    AOS.init({ duration: 1000 }); // initialize AOS
  }, []);

  return (
    <div className="formation">
      <h1>Nos Formations</h1>
      <br />
      <div className="download-container">
        <h2>
          Les Affermissements
          {' '}
          <FontAwesomeIcon icon={faBookOpen} />
        </h2>
        <br />
        <div className="download">
          <a href={pdfPath} download>
            Télécharger le PDF en français
          </a>
          <br />
          <a href={pdfPathSw} download>
            Télécharger le PDF en swahili
          </a>
        </div>
      </div>
      <br />
      <br />
      <div className="cours-container">
        <h2>
          Formation à l&apos;IBTM
          {' '}
          <FontAwesomeIcon icon={faGraduationCap} />
        </h2>
        <p className="formation-para">
          L&apos;Institut Biblique et Théologique pour la Mission (IBTM) propose une formation&nbsp;
          de deux ans pour équiper les serviteurs de Dieu dans leur ministère.
        </p>

        <h4>Programme de l&apos;IBTM</h4>
        <p>
          Le programme de l&apos;IBTM comprend des cours à caractère biblique,
          théologique, ministériel et général.
          <br />
          Le programme de l&apos;IBTM prend deux ans de formation avec deux vacations (jour et soir)
          <br />
          Jour: 08h00 - 14h00 (Du Lundi au Vendredi)
          <br />
          Soir: 16h00 - 19h00 (Du Lundi au Vendredi)
        </p>
        <div className="cours" data-aos="fade-up">
          <div>
            <h4>Cours à caractère biblique</h4>
            <hr />
            <ul>
              <li>Affermissements: 45h</li>
              <li>Bibliologie (Histoire de la bible et étude systématique de la bible): 90h</li>
              <li>Géographie biblique: 45h</li>
              <li>Doctrine de la bible et de l&apos;église: 90h</li>
              <li>Tabernacle et le culte: 45h</li>
              <li>Prière: 30h</li>
            </ul>
          </div>
          <div className="first" />
        </div>

        <div className="cours" data-aos="fade-up">
          <div>
            <h4>Cours à caractère théologique</h4>
            <hr />
            <ul>
              <li>Doctrine de l&apos;évolution et de la création: 30h</li>
              <li>Anthropologie et angéologie: 30h</li>
              <li>Christologie et sotériologie: 30h</li>
              <li>Pneumatologie et action dans l&apos;église: 45h</li>
              <li>Etique et déontologie: 30h</li>
              <li>Secte et déviation spirituelle: 45h</li>
              <li>Eschatologie: 30h</li>
              <li>Méthode d&apos;enseignement (Herméneutique, Exégèse et Homilétique): 90h</li>
            </ul>
          </div>
          <div className="second" />
        </div>

        <div className="cours" data-aos="fade-up">
          <div>
            <h4>Cours à caractère ministériel</h4>
            <hr />
            <ul>
              <li>Leadership spirituel (model chrétien): 45h</li>
              <li>Leadership ecclésiastique: 45h</li>
              <li>Mission commando (Missiologie pratique): 45h</li>
              <li>Missiologie et implantation (évangélisation): 60h</li>
              <li>Dialogue pastoral et résolution des conflits: 45h</li>
            </ul>
          </div>
          <div className="third" />
        </div>

        <div className="cours" data-aos="fade-up">
          <div>
            <h4>Cours à caractère général</h4>
            <hr />
            <ul>
              <li>Notion des droits humains: 50h</li>
              <li>Introduction à la psychologie générale: 45h</li>
              <li>Développement communautaire: 45h</li>
              <li>Agriculture et élévage: 60h</li>
              <li>Santé et secourisme (Croix Rouge): 50h</li>
            </ul>
          </div>
          <div className="fourth" />
        </div>
        <div data-aos="fade-up">
          <p>
            <span>NB: </span>
            La formation prendra deux (2) ans inclus deux (2) mois de stage
            et quatre (4) mois de pratique ministérielle.
          </p>
          <p>
            Adresse: IBTM Nord Kivu, Ville de Goma, Commune de Karisimbi, Av. Kasindi II, N°51.
            {' '}
            Q. Katoyi
            <br />
            Contact: (+243)995-865-149; (+243)997-604-877;
            <br />
            E-mail: IbtmCfcm@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Formation;
