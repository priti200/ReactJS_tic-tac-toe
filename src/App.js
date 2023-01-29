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
function Square({value,onSquareClick}){
  return (
    <button className="square" onClick={onSquareClick}>
        {value}
    </button>
  );
  // const[value, setValue] = useState(null);

  // function handle_click(){
  //   // setValue('X');  
  // return <button className="square">{value}</button>;
}

function Board({ xIsNext, squares, onPlay}) {
  // const[xIsNext,setXisNext] = useState(true);
  // const[squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i){
    if (squares[i] || calculateWinner(squares)){
      return;
    }
    const nextSquares = squares.slice();
    if(xIsNext){
      nextSquares[i]="X";
    } 
    else{
      nextSquares[i]="O";
    }
      // setSquares(nextSquares);
      // setXisNext(!xIsNext);
      onPlay(nextSquares);
    }

  const winner = calculateWinner(squares);
  let status;

  if(winner){
    status = "Winner:" + winner;
  }
  else{
    status = "Next player: " + (xIsNext ? "X":"O");
  }
  
  return (
    <React.Fragment>
      <div>
          <div className="status">{status}</div>
          <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
            <Square value={squares[1]} onSquareClick={() =>handleClick(1)}/>
            <Square value={squares[2]} onSquareClick={() =>handleClick(2)}/>
          </div>
          <div className="board-row">
            <Square value={squares[3]} onSquareClick={() =>handleClick(3)}/>
            <Square value={squares[4]} onSquareClick={() =>handleClick(4)}/>
            <Square value={squares[5]} onSquareClick={() =>handleClick(5)}/>
          </div>
          <div className="board-row">
            <Square value={squares[6]} onSquareClick={() =>handleClick(6)}/>
            <Square value={squares[7]} onSquareClick={() =>handleClick(7)}/>
            <Square value={squares[8]} onSquareClick={() =>handleClick(8)}/>
          </div>
      </div>
    </React.Fragment>
  );
}

export default function game(){
  const [xIsNext, setXisNext] = useState(true);
  const[history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length -1];

  function handPlay(nextSquares){
    setHistory([...history,nextSquares]);
    setXisNext(!xIsNext);
  }

  function jumpTo(nextmove){

  }
  const move = history.map((squares,move) =>{
    let description;
    if (move > 0){
      description = "Go to move #" + move;
    }
    else{
      description = "Go to game start"
    }
    return (
      <li>
         <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  return (
    <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handPlay}/>
        </div>
        <div className="game-info">
          <ol>{move}</ol>
        </div>
    </div>
  );
}
function calculateWinner(squares){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for (let i = 0; i < lines.length; i++){
    const [a,b,c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}