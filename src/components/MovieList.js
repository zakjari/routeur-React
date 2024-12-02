import React from 'react';
import MovieCard from './MovieCard';

const movies = [
  { id: 1, name: 'Movie 1', description: 'This is movie 1.', trailerLink: 'https://www.youtube.com/embed/video1' },
  { id: 2, name: 'Movie 2', description: 'This is movie 2.', trailerLink: 'https://www.youtube.com/embed/video2' },
];

function MovieList() {
  return (
    <div>
      <h1>Liste des films</h1>
      <div>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
