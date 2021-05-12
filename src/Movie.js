import React from 'react'
/*
function getStars(nr_of_stars) {
  return "<img src='images/star.png' alt='Star'>".repeat(nr_of_stars);
}

$("#movie-list").on("click", ".delete-movie", function() {
  $(this).parent().remove();
});

$("#add-movie").on("submit", function(e) {

  const movie = `<li data-grade="${grade}" data-title="${title}">
      ${title}
      <img src="images/delete.png" alt="Delete movie" class="delete-movie">
      ${getStars(grade)}
  </li>`;

  $("#movie-list").append(movie);

  $(this).trigger("reset");
});*/
export default function App(props) {

  return (
    <div>
        <li>
            <p>{props.movie.title}</p>
            <img src="../images/delete.png" alt="Delete movie" class="delete-movie"
                        onClick={() => {props.deleteMovie(props.movie.id)}}/>
            {props.movie.rating.map(() => <img src='../images/star.png' alt='Star='/>)}
        </li> 

    </div>
  );
}