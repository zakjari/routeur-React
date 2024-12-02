import React from 'react';
import { useParams, Link } from 'react-router-dom';

const movies = [
  { id: 1, name: 'Movie 1', description: 'This is movie 1', trailerLink: 'https://www.youtube.com/embed/video1' },
  { id: 2, name: 'Movie 2', description: 'This is movie 2.', trailerLink: 'https://www.youtube.com/embed/video2' },
];

function MovieDetails() {
  const { movieId } = useParams();
  const movie = movies.find(m => m.id === parseInt(movieId));

  return (
    <div className="movie-details">
      <h1>{movie.name}</h1>
      <p>{movie.description}</p>
      <iframe width="560" height="315" src={movie.trailerLink} title="Trailer" frameBorder="0" allowFullScreen></iframe>
      <br />
      <Link to="/" className="back-button">Retour à l'accueil</Link>
    </div>
  );
}

export default MovieDetails;
