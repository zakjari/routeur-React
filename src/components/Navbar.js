import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importation du fichier CSS pour la navbar

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/about">About</Link></li>
        {/* Tu peux ajouter d'autres liens ici */}
      </ul>
    </nav>
  );
}

export default Navbar;
