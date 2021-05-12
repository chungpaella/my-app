import React from 'react'
import Movie from './Movie';


export default function App(props) {

  return (
    <div>
      <ul id="movie-list">
        {props.movies.map(movie => <Movie key = {movie.id} title = {movie.title} rating ={movie.rating}/>)}
      </ul>
    </div>
  
  );
}