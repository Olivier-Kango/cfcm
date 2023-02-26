import React from 'react';
import '../styling/Programmes.scss';

const Programmes = () => (
  <div className="programmes">
    <h2>NOS PROGRAMMES</h2>
    <p>Les Différents Programmes au sein de l&apos;église</p>
    <br />
    <div className="programme-details">
      <div className="programme-item">
        <img src="https://via.placeholder.com/150x150" alt="Church" />
        <h3>DIMANCHE</h3>
        Culte d&apos;adoration de 9h00 à 12h30
        <br />
        (diffusé en Live) 🔴
        <br />
        Culte des Jeunes de 13h00 à 14h30
      </div>
      <div className="programme-item">
        <img src="https://via.placeholder.com/150x150" alt="Church" />
        <h3>MARDI</h3>
        Culte des Mamans
        <br />
        De 7h30 à 9h30
      </div>
      <div className="programme-item">
        <img src="https://via.placeholder.com/150x150" alt="Church" />
        <h3>VENDREDI</h3>
        Etudes bibliques
        <br />
        De 15h30 à 17h30
      </div>
      <div className="programme-item">
        <img src="https://via.placeholder.com/150x150" alt="Church" />
        <h3>SAMEDI</h3>
        Culte des Papas de 7h30 à 09h00
        <br />
        Intercession de 09h00 à 12h00
      </div>
      <div className="programme-item">
        <h3>CULTE MATINAL</h3>
        Du lundi au vendredi
        <br />
        De 5h30 à 6h30
      </div>
      <div className="programme-item">
        <h3>CULTE DES JEUNES</h3>
        Chaque 1
        <sup>
          er&nbsp;
        </sup>
        et 3
        <sup>
          ème&nbsp;
        </sup>
        Dimanche du mois
        <br />
        De 13h00 à 14h30
      </div>
      <div className="programme-item">
        <h3>AFFERMISSEMENTS</h3>
        TOUS LES JOURS,
        <br />
        A TOUT MOMENT
        <br />
        SELON VOTRE DISPONIBILITÉ !
      </div>
    </div>
  </div>
);

export default Programmes;
