import React from 'react';
import kalengaImage from '../images/leaders/kalenga.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pascalImage from '../images/leaders/pascal.jpg';
import faustinImage from '../images/leaders/faustin.jpg';
import hamuliImage from '../images/leaders/Hamuli.jpg';
import brigitteImage from '../images/leaders/brigitte.png';
import squareImage from '../images/leaders/square.jpg';
import josueImage from '../images/leaders/josue.jpeg';
import '../styling/Speakers.scss';

const speakerContent = [
  {
    imageSpeaker: kalengaImage,
    fName: 'Watimbwa Kalenga',
    profession: "Pst Watimbwa Kalenga est le pasteur de l'Eglise C.F.C.M",
    about: "Après avoir reçu l'appel du Seigneur, le Pasteur Kalenga, qui est ingénieur en bâtiment et théologien de formation, a décidé de tout quitter pour se consacrer à temps plein au ministère. En 2002, il a eu la merveilleuse vision de lancer la communauté C.F.C.M.",
  },
  {
    imageSpeaker: pascalImage,
    fName: 'Pascale Nyenyezi Nkengwa',
    profession: 'Pascale Nkengwa est le responsable de la jeunesse',
    about: "Initialement formé en tant qu'électricien, le frère Pascale Nkengwa a fait le noble choix de consacrer tout son temps au service du Seigneur.",
  },
  {
    imageSpeaker: faustinImage,
    fName: 'Faustin Lwaboshi',
    profession: "Fr Faustin est le président de l'équipe chargée d'adoration.",
    about: "Le frère Faustin, qui est un cadre et titulaire d'une licence en psychologie, est un chantre fervent et dévoué au service du Seigneur depuis sa jeunesse.",
  },
  {
    imageSpeaker: josueImage,
    fName: 'Josué Mulindwa',
    profession: 'Fr Josué Mulindwa est responsable des médias.',
    about: "Après avoir achevé ses études en environnement, le frère Josué s'est lancé en tant qu'entrepreneur. Cependant, il a fait le choix louable de mettre son talent au service du Seigneur dans le domaine des médias à l'église.",
  },
  {
    imageSpeaker: hamuliImage,
    fName: 'Hamuli Mirindi Jean Pierre',
    profession: 'Papa Hamuli est responsable au sein du groupe des Papas.',
    about: "Papa Hamuli a terminé ses études en mécanique et exerce actuellement avec succès la fonction d'ingénieur électromécanicien au sein de l'entreprise PAM.",
  },
  {
    imageSpeaker: brigitteImage,
    fName: 'Maman Brigitte',
    profession: 'Maman Brigitte occupe le poste de présidente au sein du groupe des Mamans.',
    about: "Maman Brigitte, en plus d'être mariée et mère de plusieurs enfants, exerce également la profession de commerçante.",
  },
];

export default function Speakers() {
  return (
    <section className="speakers">
      <h2 className="title-speakers">Leaders au sein de la C.F.C.M</h2>
      <div className="underline" />
      <div className="div-speakers">
        {speakerContent.map((content) => (
          <div key={content.fName} className="featured-speaker">
            <div className="background-and-image">
              <img src={squareImage} className="square-background" alt="square_background" />
              <img src={content.imageSpeaker} className="imageSpeaker" alt="image_speaker" />
            </div>
            <div className="div-content">
              <h3 className="fname">{content.fName}</h3>
              <p className="profession">{content.profession}</p>
              <div className="line" />
              <p className="aboutp">{content.about}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
