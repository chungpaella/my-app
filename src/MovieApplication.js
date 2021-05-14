import React, {useState} from 'react'
import AddMovieForm from './AddMovieForm';
import Movies from './Movies';
import OrderByAlphaButton from './OrderByAlphaButton';
import OrderByGradeButton from './OrderByGradeButton';

export default function App() {

    const [movies, setMovies] = useState([])

    function addMovie(input_title, input_rating) {     
      const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
      let input_movie = {
            id: newId,
            title: input_title,
            rating: input_rating
        }
        
      setMovies(movies => {return [...movies, input_movie]})
    }
    function deleteMovie(id){
        setMovies(movies.filter((movie) => movie.id !== id)) //Filtera bort alla movies som ej har samma id.
        console.log("deleted movie with id" + id);
    }
    function orderByAlpha(a, b) {
      let movieA= a.title.toUpperCase()
      let movieB = b.title.toUpperCase()
  
      if (movieA < movieB) {
          return -1;
      } else if (movieA > movieB) {
          return 1;
      } else {
          return 0;
      }
    }
      function orderByGrade(a, b) {
        let movieA= a.rating.length
        let movieB = b.rating.length
    
        if (movieA < movieB) {
            return -1;
        } else if (movieA > movieB) {
            return 1;
        } else {
            return 0;
        }
    }
      function orderMoviesByAlpha() {
        movies.sort(orderByAlpha);
        setMovies([...movies]);
    }
    function orderMoviesByRating() {
      movies.sort(orderByGrade);
      setMovies([...movies]);
    }

    return (
        <div className= "container">
            <AddMovieForm 
                addMovie = {addMovie}
            />

            <Movies 
              movies = {movies} deleteMovie={deleteMovie}
            />

            <OrderByAlphaButton
              setOrderBy = {orderMoviesByAlpha}
            />

            <OrderByGradeButton
              setOrderBy = {orderMoviesByRating}
            />

        </div>
    );
  }