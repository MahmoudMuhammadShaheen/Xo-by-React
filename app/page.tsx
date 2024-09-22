
// if you need to use {useState } you must but this word here
"use client";

// after but the word import usestate 
import { useEffect, useState } from "react";
// this compoent is the elment we but them in our project
import Cell from "./compoents/Elments";
// this is the main component



const winningComgos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
  
]



export default function Home() {
  // here we make a usestate as array for has all our elments and make an map function on them 

  const [ Cells, setCells] = useState(["","","","","","","","",""]);

  // here we make the state for make them as a props we will put them at cell function 
  const [go , setGo] = useState("cricle");

  const [winngMassage ,setWinngmage] = useState("");



  useEffect(() => {
    // here we make a function to check if the game is win or not
    winningComgos.forEach((combo) => {
      // {every} this function return a bollen value 
      // and Compare between the [Cells] and winngcombs
      const cricleWins = combo.every((cell) => Cells[cell] === "cricle")
      const crossWins = combo.every((cell) => Cells[cell] === "cross")

      if(cricleWins) {
        setWinngmage("cricle wins");
      }else if(crossWins) {
        setWinngmage("Cross wins")
      }
    })
  },[Cells, winngMassage])

useEffect(() => {
  if(Cells.every((cell) => cell !== "") && !winngMassage) {
    setWinngmage("draw")
  }

},[Cells,winngMassage])

  return (
<>

  {/* // this is the main continer  */}
    <main  className="continer">
      {/* this is the father of all elments */}
      <div className="gameboard">

        {/* this map function for return all empty elment at the {cells} => state */}
    {Cells.map((cell,index) => {
      return (
        // and this is our compont for return all elment form the map
        <Cell 
        go={go}
         setGo={setGo} 
         id={index} 
         key={index} 
         Cells={Cells}
         setCells={setCells}
         cell={cell}
         winngMassage={winngMassage}/>
      )

      
    })}
      </div>
    <div>{winngMassage}</div>
    { !winngMassage && <div>{`${go} you to play now`}</div>}

    </main>

          </>
  );
}
