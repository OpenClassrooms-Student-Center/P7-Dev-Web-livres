import React from 'react';
import { NavLink } from 'react-router-dom';
import { useUser } from '../../lib/customHooks';
import styles from './Header.module.css';
import Logo from '../../images/Logo.png';

function Header() {
  const { connectedUser, auth } = useUser();
  return (
    <header className={styles.Header}>
      <div className="container">
        <img src={Logo} alt="logo mpm vieu grimoire" />
        <ul>
          <li><NavLink to="/" end className={({ isActive }) => (isActive ? styles.activeLink : undefined)}>Accueil</NavLink></li>
          <li><NavLink to="/Ajouter" className={({ isActive }) => (isActive ? styles.activeLink : undefined)}>Ajouter un livre</NavLink></li>
          <li>{(!connectedUser || !auth) ? <NavLink to="/Connexion" className={({ isActive }) => (isActive ? styles.activeLink : undefined)}>Se connecter</NavLink> : <NavLink to="/Deconnexion" className={({ isActive }) => (isActive ? styles.activeLink : undefined)}>Se déconnecter</NavLink> }</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
