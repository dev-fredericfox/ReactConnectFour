import { useState, useEffect } from "react";
import Game from "./Game";

function App() {
  return (
    <div className="h-screen bg-center bg-cover bg-[url('./2648265.jpg')]">
      <img className="mx-auto" src="../Connect4.png" alt="connect four react logo"/>
      <Game />
      <p>Player One</p>
      <p>Player Two</p>
    </div>
  );
}

export default App;
