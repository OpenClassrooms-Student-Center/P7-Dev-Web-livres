import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { displayStars } from '../../../lib/functions';
import styles from './BookItem.module.css';

function BookItem({ book }) {
  return (
    <Link to={`/livre/${book.id}`} className={styles.BookItem}>
      <article>
        <img src={book.imageUrl} alt={`${book.title}, ${book.author} - ${book.year}`} />
        <div className={styles.BookInfo}>
          <div className={styles.Rating}>
            {displayStars(book.averageRating)}
          </div>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.year}</p>
          <p>{book.genre}</p>
        </div>
      </article>
    </Link>
  );
}

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
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
