import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { displayStars } from '../../lib/functions';
import styles from './Book.module.css';
import { getBook } from '../../lib/common';

function Book() {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    async function getItem() {
      const data = await getBook(params.id);
      if (data) {
        setBook(data);
        setLoading(false);
      }
    }
    getItem();
  }, []);

  return (
    <div className={styles.Book}>
      {loading ? <h1>Chargement ...</h1> : (
        <>
          <img src={book.imageUrl} alt="livre" />
          <div className={styles.BookContent}>
            <div className={styles.BookInfo}>
              <h1>{book.title}</h1>
              <p className={styles.Author}>{`par ${book.author}`}</p>
              <p className={styles.PublishDate}>{book.year}</p>
              <p className={styles.Genre}>{book.genre}</p>
              <div className={styles.Rating}>
                <div>{displayStars(book.averageRating)}</div>
                <p>{`${book.averageRating}/5`}</p>
              </div>
            </div>
            <div>
              <form>
                <p>Notez cet ouvrage</p>
                <label htmlFor="rating1">
                  <FontAwesomeIcon icon={solid('star')} className={styles.full} />
                  <input type="radio" value={1} id="rating1" name="rating" />
                </label>
                <label htmlFor="rating2">
                  <FontAwesomeIcon icon={solid('star')} className={styles.full} />
                  <input type="radio" value={2} id="rating2" name="rating" />
                </label>
                <label htmlFor="rating3">
                  <FontAwesomeIcon icon={solid('star')} className={styles.full} />
                  <input type="radio" value={3} id="rating3" name="rating" />
                </label>
                <label htmlFor="rating4">
                  <FontAwesomeIcon icon={solid('star')} className={styles.full} />
                  <input type="radio" value={4} id="rating4" name="rating" />
                </label>
                <label htmlFor="rating5">
                  <FontAwesomeIcon icon={solid('star')} className={styles.full} />
                  <input type="radio" value={5} id="rating5" name="rating" />
                </label>
                <input type="submit" value="valider" />
              </form>
            </div>
          </div>
        </>
      )}

    </div>
  );
}
export default Book;
