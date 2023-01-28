// import React from 'react'
// export default function Square() {
//   return (
//     <>
//       <button className="square">X</button>
//       <button className="square">X</button>
//     </>  
//   );

import React from "react";
import { useState } from "react";
function Square(){

  const[value, setValue] = useState(null);

  function handle_click(){
    setValue('X');  
  }
  return (
    <button 
      className="square"
      onClick={handle_click}
    >
    {value}
    </button>
  );
  
}


export default function Board() {
  return (
    <React.Fragment>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      
    </React.Fragment>
  );
}
