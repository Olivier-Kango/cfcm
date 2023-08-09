import '../styling/Accueil.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPrayingHands, faCross, faFire, faBible, faWater, faMale, faFemale,
} from '@fortawesome/free-solid-svg-icons';
import Slider from './Slider';
import Speakers from './Speakers';

const Accueil = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleImageLoad = () => {
    const images = document.querySelectorAll('img');
    if (images[images.length - 1].complete) {
      setImagesLoaded(true);
    }
  };

  // Disable scroll when images are not loaded
  if (!imagesLoaded) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <div className="div-accueil">
      <>
        <section className="home">
          <div className="div-home">
            <Slider onLoad={handleImageLoad} />
          </div>
        </section>
        <section className="main-program">
          <div className="div-main-program">
            <h2>Nous croyons en: </h2>
            <div className="underline" />
            <div className="program-flex">
              <div className="program">
                <i>
                  <FontAwesomeIcon icon={faPrayingHands} />
                </i>
                <h3>Un seul Dieu</h3>
                <p>
                  Souverain, Tout Puissant et Sage. Créateur des choses visibles et invisibles.
                </p>
              </div>
              <div className="program">
                <i>
                  <FontAwesomeIcon icon={faCross} />
                </i>
                <h3>Jésus Christ</h3>
                <p>
                  Fils unique du Père qu&apos;il nous a fait connaître, vrai Dieu et vrai Homme.
                </p>
              </div>
              <div className="program">
                <i>
                  <FontAwesomeIcon icon={faFire} />
                </i>
                <h3>Saint-Esprit</h3>
                <p>Il agit encore aujourd&apos;hui en révélant J-C comme Sauveur et Seigneur.</p>
              </div>
              <div className="program">
                <i>
                  <FontAwesomeIcon icon={faBible} />
                </i>
                <h3>La Bible</h3>
                <p>
                  Composée des écrits canoniques de l&apos;Ancien et Nouveau Testament.
                  {' '}
                  (66 Livres)
                </p>
              </div>
              <div className="program">
                <i>
                  <FontAwesomeIcon icon={faWater} />
                </i>
                <h3>Au Baptême</h3>
                <p>
                  Par immersion comme acte de soumission au Seigneur et acquis par tout chrétien.
                </p>
              </div>
              <div className="program">
                <i className="male-female">
                  <FontAwesomeIcon icon={faMale} />
                  <FontAwesomeIcon icon={faFemale} />
                </i>
                <h3>Au Mariage monogamique</h3>
                <p>Genèse 2: 24, Mat 12: 4 - 6, Hé 13: 4 - 6, Mat 5: 4 - 6, 1 Cor 7: 2 - 11</p>
              </div>
              <div className="program">
                <i>
                  <FontAwesomeIcon icon={faPrayingHands} />
                </i>
                <h3>La Sainteté</h3>
                <p>La Sainteté dans la pensée, dans la parole et dans la conduite.</p>
              </div>
            </div>
            <Link to="/formation">
              <button type="button">
                Voir nos Formations
              </button>
            </Link>
            <Link to="/nos-programmes" className="see-whole-program">VOIR TOUS NOS PROGRAMMES</Link>
          </div>
        </section>
        <Speakers />
        <footer id="footer">
          {' '}
        </footer>
      </>
    </div>
  );
};

export default Accueil;
