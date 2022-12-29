import '../styling/Accueil.scss';
import React from 'react';
import Slider from './Slider';

const Accueil = () => (
  <div className="div-accueil">
    <section className="home">
      <div className="div-home">
        <Slider />
        <p className="home-content">
          Lorem
        </p>
        <p className="date">
          Ipsum
        </p>
        <p className="footer">@ Communauté de la Foi chrétienne dans le Monde, CFCM en sigle. Goma - DRC Congo</p>
      </div>
    </section>
  </div>
);

export default Accueil;
