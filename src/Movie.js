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
            <p>{props.title}</p>
            <img src="../images/delete.png" alt="Delete movie" class="delete-movie"/>
            {props.rating.map(() => <img src='../images/star.png' alt='Star='/>)}
        </li> 

    </div>
  );
}