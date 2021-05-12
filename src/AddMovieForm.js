import React, {useRef} from 'react'

export default function App(props) {

    const input_title = useRef();
    const input_rating = useRef();

    function saveMovie(){
        let title = input_title.current.value;
        /*
        let rating = [];
        for(var i=0; i<input_rating.current.value; i++){
            rating.push(input_rating.current.value)
        }
        console.log(rating)
        */
        props.addMovie(title,input_rating.current.value)
        input_title.current.value = ""
        input_rating.current.value = 0
    }

    return (
        <div>
            <h1>Min filmlista</h1>
            <legend>Lägg till en film</legend>

            <label>Titel:</label>
            <input type="text" ref={input_title} class="form-control"/>

            <label>Betyg:</label>
            <select type="text" ref={input_rating} class="form-control">
                <option value="0">Välj betyg här...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <input class="btn btn-success mt-3" value="Spara film"
                   onClick={saveMovie}
            />
        </div>
    

  );
}