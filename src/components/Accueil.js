import '../styling/Accueil.scss';
import React from 'react';
import Slider from './Slider';

const Accueil = () => (
  <div className="div-accueil">
    <section className="home">
      <div className="div-home">
        <Slider />
      </div>
    </section>
  </div>
);

export default Accueil;
