import React from 'react'

export default function App(props) {
  var key = 1; 
  return (
    <div>
        <li>
            <p>{props.movie.title}</p>
            <img src="../images/delete.png" alt="Delete movie" className="delete-movie"
              onClick={() => {props.deleteMovie(props.movie.id)}}/>
            {props.movie.rating.map(() => 
            <img key={key++} src='../images/star.png' alt='Star='/>)
            }
        </li> 
    </div>
  );
}