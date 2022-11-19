import '../styling/Accueil.css';
import React from 'react';

const Accueil = () => (
  <div className="div-accueil">
    <section className="home">
      <div className="div-home">
        <p className="description-title"><i>&quot;Bonjour! Nous sommes une église appelée pour travailler sur le retour dans le vrai sacerdoce&quot;</i></p>
        <h1 className="main-title">
          Communauté de la foi chrétienne dans le monde
          <br />
          C.F.C.M
        </h1>
        <p className="home-content">
          &ldquo;Et ce que tu as entendu de moi en présence de beaucoup de témoins,
          confie-le à des hommes fidèles, qui soient capables de
          l&apos;enseigner aussi à d&apos;autres.&ldquo;
        </p>
        <p className="date">
          2 Timothée 2:2
        </p>
        <p>@ Communauté de la Foi chrétienne dans le Monde, CFCM en sigle. Goma - DRC Congo</p>
      </div>
    </section>
  </div>
);

export default Accueil;
