import React from 'react'

export default function App(props) {

  const rating_arr = [];
  for(var i = 0; i < props.rating; i++) {
    rating_arr.push("*");
  }

  return (
    <div>  
        <li>
            <p> {props.title} - {props.rating} </p>
            {rating_arr.map(() => <img src='../images/star.png' alt='Star'/> )}
        </li> 
    </div>
  
  );
}