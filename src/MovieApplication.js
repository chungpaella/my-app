import React from 'react'
import AddMovieForm from './AddMovieForm'; 
import Movies from './Movies';
import SaveMoviesButton from './SaveMoviesButton';
import OrderByAlphaButton from './OrderByAlphaButton';
import OrderByGradeButton from './OrderByGradeButton';


export default function App() {
    return (
      <div>
        <AddMovieForm/>
        <Movies/>

    <SaveMoviesButton />
    <OrderByAlphaButton />
    <OrderByGradeButton />

      </div>
    
    );
  }