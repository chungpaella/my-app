import React from 'react'


export default function App(props) {

  return (
    <div>
        <input onClick={() => props.setOrderBy() } className="btn btn-primary mt-3" value=" Alfabetiskordning "/>
    </div>
  
  );
}