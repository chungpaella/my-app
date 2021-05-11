import React from 'react'
import Movie from './Movie';


export default function App() {
  return (
    <div>
        <h2>Inlagda filmer</h2>
    <ul id="movie-list">
        <Movie></Movie>
    </ul>
    </div>
  
  );
}