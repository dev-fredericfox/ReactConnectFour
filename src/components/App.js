import { useState } from "react";
import Game from "./Game";
import Player from "./Player";
import Imprint from "./Imprint";

function App() {
  const [turn, setTurn] = useState("Y");
  const [imprint, setImprint] = useState(false);
  function changeTurn() {
    if (turn === "R") setTurn(() => "Y");
    else {
      setTurn(() => "R");
    }
  }
  return (
    <div className="h-screen w-screen bg-center bg-cover bg-[url('./bg_connect4.svg')] grid grid-cols-1 place-content-evenly overflow-hidden">
      <div className="-rotate-6 mb-8 sm:mt-12 sm:mb-12">
        <h2 className="text-6xl sm:text-8xl text-center font-eightyone text-pink">
          React
        </h2>
        <h1 className="text-6xl sm:text-8xl text-center font-eightynine text-transparent bg-clip-text bg-gradient-to-b from-teal via-pink to-teal">
          Connect4
        </h1>
      </div>
      <div className="mb-12">
        <Game turn={turn} changeTurn={changeTurn} />
        <div className="flex sm:flex-row flex-col justify-center items-center mt-1">
          <Player number="One" color="Yellow" turn={turn} />
          <p className="ml-6 mr-3 mt-9 sm:mt-5 font-eightyone text-6xl text-transparent bg-clip-text bg-gradient-to-br from-teal to-pink w-32">
            VS.
          </p>
          <Player number="Two" color="Red" turn={turn} />
        </div>
      </div>
      {imprint && <Imprint close={setImprint}/>}
      <div onClick={() => setImprint(true)} className="absolute bottom-0 w-full text-slate-50 text-center">Imprint</div>
    </div>
  );
}

export default App;
