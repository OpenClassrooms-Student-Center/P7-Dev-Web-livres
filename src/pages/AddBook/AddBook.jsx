import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './AddBook.module.css';
import BookForm from '../../components/Books/BookForm/BookForm';
import BackArrow from '../../components/BackArrow/BackArrow';
import { useUser } from '../../lib/customHooks';
import { APP_ROUTES } from '../../utils/constants';
import bookAdd from '../../images/book_add.jpg';

function AddBook() {
  const navigate = useNavigate();
  const { connectedUser, auth, userLoading } = useUser();
  const [created, setCreated] = useState(false);
  useEffect(() => {
    if (!userLoading) {
      if (!connectedUser || !auth) {
        navigate(APP_ROUTES.SIGN_IN);
      }
    }
  }, [userLoading]);

  return (
    <div className="content-container">
      <BackArrow />
      <div className={styles.Container}>
        {!created ? (
          <>
            <h1>Ajouter un livre</h1>
            <p>tous les champs sont obligatoires</p>
            <BookForm validate={setCreated} />
          </>
        ) : (
          <div className={styles.Created}>
            <h1>Merci!</h1>
            <p>votre livre a bien été publié</p>
            <img src={bookAdd} alt="Livre ajouté" />
            <Link to="/" className="button">Retour à l&apos;accueil</Link>
          </div>

        )}

      </div>
    </div>
  );
}

export default AddBook;
