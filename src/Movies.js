import React from 'react'
import Movie from './Movie';


export default function App(props) {

  return (
      <ul>
        {
        props.movies.map(movie => 
        <Movie  key = {movie.id} movie = {movie} deleteMovie ={props.deleteMovie}
        />)}    
      </ul>
  );
}