/* eslint-disable react/jsx-props-no-spreading */
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
export function generateStarsInputs(rating, register, readOnly = false) {
  const stars = [];
  for (let i = 1; i < 6; i += 1) {
    if (rating > 0 && i <= Math.round(rating)) {
      stars.push(readOnly ? <FontAwesomeIcon key={`full-${i}`} icon={solid('star')} className={styles.full} /> : (
        <label key={`full-${i}`} htmlFor={`rating${i}`}>
          <FontAwesomeIcon icon={solid('star')} className={styles.full} />
          <input type="radio" value={i} id={`rating${i}`} {...register('rating')} readOnly={readOnly} />
        </label>
      ));
    } else {
      stars.push(readOnly ? <FontAwesomeIcon key={`full-${i}`} icon={solid('star')} className={styles.empty} /> : (
        <label key={`full-${i}`} htmlFor={`rating${i}`}>
          <FontAwesomeIcon icon={solid('star')} className={styles.empty} />
          <input type="radio" value={i} id={`rating${i}`} {...register('rating')} />
        </label>
      ));
    }
  }
  return stars;
}
