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

        setMovies([...movies, input_movie])
    }
    function deleteMovie(id){
        setMovies(movies.filter((movie) => movie.id !== id)) //Filtera bort alla movies som ej har samma id.
        console.log("hej"); 
        console.log(id);
    }    

    return (
        <div class= "container">
            <AddMovieForm 
                addMovie = {addMovie}
            />

            <Movies movies = {movies} deleteMovie={deleteMovie}/>
     

            <OrderByAlphaButton />
            <OrderByGradeButton />
        </div>
    );
  }