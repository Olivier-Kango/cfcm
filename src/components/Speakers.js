import React from 'react';
import kalengaImage from '../images/leaders/kalenga.jpg';
import pascalImage from '../images/leaders/pascal.jpg';
import faustinImage from '../images/leaders/faustin.jpg';
import hamuliImage from '../images/leaders/hamuli.png';
import brigitteImage from '../images/leaders/brigitte.png';
import squareImage from '../images/leaders/square.jpg';
import josueImage from '../images/leaders/josue.jpeg';
import '../styling/Speakers.scss';

const speakerContent = [
  {
    imageSpeaker: kalengaImage,
    fName: 'Watimbwa Kalenga',
    profession: "Watimbwa Kalenga est le pasteur de l'Eglise C.F.C.M",
    about: "Après avoir reçu l'appel du Seigneur, Kalenga, qui était technicien de formation, a décidé de tout quitter pour se consacrer à temps plein au ministère. En 2005, il a eu la merveilleuse vision de commencer la communauté C.F.C.M.",
  },
  {
    imageSpeaker: pascalImage,
    fName: 'Pascale Nyenyezi Nkengwa',
    profession: 'Pascale Nkengwa est le président des jeunes',
    about: "Initialement formé en tant qu'électricien, Pascale Nkengwa a fait le noble choix de consacrer tout son temps au service du Seigneur.",
  },
  {
    imageSpeaker: faustinImage,
    fName: 'Faustin Lwaboshi',
    profession: "Faustin est le président de l'équipe chargée d'adoration.",
    about: 'Faustin est un chantre fervent, dévoué au service du Seigneur depuis sa jeunesse.',
  },
  {
    imageSpeaker: josueImage,
    fName: 'Josué Mulindwa',
    profession: 'Josué est responsable des médias.',
    about: "Après avoir achevé ses études en environnement, Josué s'est lancé en tant qu'entrepreneur. Cependant, il a fait le choix louable de mettre son talent au service du Seigneur dans le domaine des médias.",
  },
  {
    imageSpeaker: hamuliImage,
    fName: 'Hamuli Mirindi Jean Pierre',
    profession: 'Hamuli Mirindi est responsable au sein du groupe des Papas.',
    about: "Il a achevé ses études en mécanique et exerce actuellement avec succès la fonction d'ingénieur mécanicien au sein de l'entreprise PAM.",
  },
  {
    imageSpeaker: brigitteImage,
    fName: 'Maman Brigitte',
    profession: 'Maman Brigitte occupe le poste de présidente au sein du groupe des Mamans.',
    about: "Maman Brigitte, en plus d'être mère de plusieurs enfants, exerce également la profession de commerçante.",
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
