import React, {useState} from 'react'
import AddMovieForm from './AddMovieForm';
import Movies from './Movies';
import OrderByAlphaButton from './OrderByAlphaButton';
import OrderByGradeButton from './OrderByGradeButton';

export default function App() {
    
    const [movies, setMovies] = useState([{
        id:null, title:null, rating:null
    }])

    function addMovie(input_title, input_rating) {   

        const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
        let input_movie = {
            id: newId,
            title: input_title,
            rating: input_rating
        }

        setMovies(movies => {return [...movies, input_movie]})
        console.log(movies)
    }


    return (
        <div class= "container">
            <AddMovieForm 
                addMovie = {addMovie}
            />

            <Movies
                movies = {movies}
            />

            <OrderByAlphaButton />
            <OrderByGradeButton />
        </div>
    );
  }