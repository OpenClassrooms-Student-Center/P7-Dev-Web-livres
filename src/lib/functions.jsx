import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import React from 'react';
import styles from '../components/Books/BookItem/BookItem.module.css';

// eslint-disable-next-line import/prefer-default-export
export function displayStars(rating) {
  const stars = [];
  for (let i = 0; i < 5; i += 1) {
    if (i < Math.round(rating)) {
      stars.push(<FontAwesomeIcon key={`full-${i}`} icon={solid('star')} className={styles.full} />);
    } else {
      stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={solid('star')} className={styles.empty} />);
    }
  }
  return stars;
}
