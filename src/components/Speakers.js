import React from 'react';
import kalengaImage from '../images/leaders/kalenga.jpg';
import pascalImage from '../images/leaders/pascal.jpg';
import faustinImage from '../images/leaders/faustin.jpg';
import hamuliImage from '../images/leaders/hamuli.png';
import brigitteImage from '../images/leaders/brigitte.png';
import squareImage from '../images/leaders/square.jpg';
import josueImage from '../images/leaders/josue.jpg';
import '../styling/Speakers.scss';

const speakerContent = [
  {
    imageSpeaker: kalengaImage,
    fName: 'Watimbwa Kalenga',
    profession: 'Watimbwa Kalenga est le Visionnaire et Pasteur principale de la communauté C.F.C.M',
    about: "Etant un technicien de formation, après avoir reçu l'appel du Seigneur, Kalenga a décidé de tout quitté pour se consacrer à temps plein dans le ministère. En 2005, Il a eu la merveille vision de commencé la communauté C.F.C.M",
  },
  {
    imageSpeaker: pascalImage,
    fName: 'Pascale Nyenyezi Nkengwa',
    profession: 'Pacale Nkengwa est le président des jeunes',
    about: 'Pascale Nkengwa est un électricien de formation mais qui actuellement sert le Seigneur à temps plein',
  },
  {
    imageSpeaker: faustinImage,
    fName: 'Faustin Lwaboshi',
    profession: "Faustin est le président de l'équipe chargé d'adoration",
    about: 'Il est licencié et un chantre fervent, servant le Seigneur depuis son jeune âge.',
  },
  {
    imageSpeaker: josueImage,
    fName: 'Josué Mulindwa',
    profession: 'Josué est chargé du média',
    about: 'Il a fini ses études en environement, il est entrepreneur et a décidé de mettre son talent au service du Seigneur dans le média.',
  },
  {
    imageSpeaker: hamuliImage,
    fName: 'Papa Hamuli',
    profession: 'Papa Hamuli est le président des Papas',
    about: 'Il a fini ses études à en mécanique et travaille comme Ingénieur mécanicien chez PAM.',
  },
  {
    imageSpeaker: brigitteImage,
    fName: 'Maman Brigitte',
    profession: 'Maman Brigitte est la présidente des Mamans',
    about: 'Maman brigitte est mère de six enfants. Elle est aussi commerçante.',
  },
];

export default function Speakers() {
  return (
    <section className="speakers">
      <h2 className="title-speakers">Visionnaire, Collaborateurs</h2>
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
