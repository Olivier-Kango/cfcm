import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../styling/Direct.scss';

const Direct = () => {
  const [showLink, setShowLink] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0,
  });

  useEffect(() => {
    const getNextSundayAt9AM = (date) => {
      const dayOfWeek = date.getDay();
      const daysUpSunday = dayOfWeek === 0 ? 7 : 7 - dayOfWeek;
      const nextSun = new Date(date.getFullYear(), date.getMonth(), date.getDate() + daysUpSunday);
      nextSun.setHours(9, 0, 0, 0);
      return nextSun;
    };

    const intervalId = setInterval(() => {
      const now = new Date();
      const countdownDate = getNextSundayAt9AM(now);
      const timeRemaining = countdownDate - now;

      if (timeRemaining < 0) {
        clearInterval(intervalId);
        setCountdown({
          days: 0, hours: 0, minutes: 0, seconds: 0,
        });
        setShowLink(true);
        setTimeout(() => setShowLink(false), 3 * 60 * 60 * 1000); // hide the link after 3 hours
      } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        setCountdown({
          days, hours, minutes, seconds,
        });
        setShowLink(false);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="direct">
      {showLink ? (
        <a href="https://www.youtube.com/@eglisecfcm-ci5kn/streams" target="_blank" rel="noopener noreferrer">
          Watch direct online
        </a>
      ) : (
        <p className="direct-counter">
          Prochain direct dans:
          {' '}
          {countdown.days}
          {' '}
          Jr
          {' '}
          {countdown.hours}
          {' '}
          Hr
          {' '}
          {countdown.minutes}
          {' '}
          Min
          {' '}
          {countdown.seconds}
          {' '}
          Sec
        </p>
      )}
      <div className="social-icons">
        <a href="https://web.facebook.com/profile.php?id=100082159523264" className="facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.youtube.com/@eglisecfcm-ci5kn" className="youtube">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </div>
  );
};

export default Direct;
