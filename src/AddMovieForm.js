import React from 'react'
import SaveMoviesButton from './SaveMoviesButton';



export default function App() {
    return (
        <div>
            <h1>Min filmlista</h1>
            <form id="add-movie">
                <fieldset>
                    <legend>Lägg till en film</legend>

                    <label for="title">Titel:</label>
                    <input type="text" id="title" class="form-control"/>

                        <label for="rating">Betyg:</label>

                        <select type="text" id="rating" class="form-control">
                            <option value="0">Välj betyg här...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                        <SaveMoviesButton />



    </fieldset>
</form>
    </div>
    

  );
}