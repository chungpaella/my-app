import React from 'react'
import AddMovieForm from './AddMovieForm';
import Movies from './Movies';
import OrderByAlphaButton from './OrderByAlphaButton';
import OrderByGradeButton from './OrderByGradeButton';



export default function App() {
    return (
        <div class= "container">
    <AddMovieForm/>
        <Movies/>

    <OrderByAlphaButton />
    <OrderByGradeButton />
        </div>
    );
  }