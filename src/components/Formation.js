import React from 'react';
import '../styling/Formation.scss';

const Formation = () => {
  const pdfFileName = 'Afferm_franc.pdf';
  const pdfFileSw = 'Afferm_swah.pdf';
  const folderName = 'pdf';
  const pdfPath = `${process.env.PUBLIC_URL}/${folderName}/${pdfFileName}`;
  const pdfPathSw = `${process.env.PUBLIC_URL}/${folderName}/${pdfFileSw}`;

  return (
    <div className="formation">
      <h1>Nos Formations</h1>
      <br />
      <h3>Les Affermissements</h3>
      <br />
      <a href={pdfPath} download>
        Télécharger le PDF en français
      </a>
      <br />
      <a href={pdfPathSw} download>
        Télécharger le PDF en swahili
      </a>
    </div>
  );
};

export default Formation;
