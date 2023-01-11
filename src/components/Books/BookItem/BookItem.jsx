/* eslint-disable no-param-reassign, no-underscore-dangle */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { displayStars } from '../../../lib/functions';
import styles from './BookItem.module.css';

function BookItem({ book, size }) {
  let title;
  switch (size) {
    case 2:
      title = <h2>{book.title}</h2>;
      break;
    case 3:
      title = <h3>{book.title}</h3>;
      break;
    default:
      title = <h2>{book.title}</h2>;
      break;
  }
  /* book.id forçait l'élève à activer les virtuals pour le model */
  return (
    <Link to={`/livre/${book._id}`} className={styles.BookItem}>
      <article>
        <img src={book.imageUrl} alt={`${book.title}, ${book.author} - ${book.year}`} />
        <div className={styles.BookInfo}>
          <div className={styles.Rating}>
            {displayStars(book.averageRating)}
          </div>
          {title}
          <p>{book.author}</p>
          <p>{book.year}</p>
          <p>{book.genre}</p>
        </div>
      </article>
    </Link>
  );
}

BookItem.propTypes = {
  size: PropTypes.number.isRequired,
  book: PropTypes.shape({
    _id: PropTypes.string, /* id forçait l'élève à activer les virtuals pour le modèle */
    userId: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    year: PropTypes.number,
    imageUrl: PropTypes.string,
    genre: PropTypes.string,
    ratings: PropTypes.arrayOf(PropTypes.shape({
      userId: PropTypes.string,
      grade: PropTypes.number,
    })),
    averageRating: PropTypes.number,
  }).isRequired,
};
export default BookItem;
