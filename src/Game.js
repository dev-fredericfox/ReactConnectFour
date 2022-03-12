import { useState, useEffect } from "react";

function Game() {
  const [gameBoard, setGameBoard] = useState([[], [], [], [], [], []]);

  useEffect(() => {
    //Populate rows
    resetGame();
  }, []);


  function setCoin(column, player) {
    const gameBoardCopy = [...gameBoard];
    for (let i = 0; i <= 5; i++) {
      if (gameBoard[i][column] === "_") {
        let row = gameBoardCopy[i].split("");
        console.log(row)
        row[column] = player;
        console.log(row)
        gameBoardCopy[i] = row.join("");
        console.log(gameBoardCopy)
        setGameBoard((original) => [...gameBoardCopy]);
        break;
      }
      // Add throwing some sort of error if col > 7 (index 6)
    }
  }

  function resetGame() {
    const gameBoardCopy = [];
    const row = "_______";
    // Make a row with 6 empty strings
    // Make 7 Rows of empty strings
    for (let i = 0; i <= 5; i++) {
      gameBoardCopy.push(row);
    }
    setGameBoard(() => [...gameBoardCopy]);
  }
  return (
    <div>
      <p>GameBoard: {gameBoard[5]}</p>
      <p>GameBoard: {gameBoard[4]}</p>
      <p>GameBoard: {gameBoard[3]}</p>
      <p>GameBoard: {gameBoard[2]}</p>
      <p>GameBoard: {gameBoard[1]}</p>
      <p>GameBoard: {gameBoard[0]}</p>
      <p>I am game.</p>
      <button
        onClick={() => {
          setCoin(0, "x");
        }}
      >
        Set Column 1 to X
      </button>
      <button
        onClick={() => {
          setCoin(0, "O");
        }}
      >
        Set Column 1 to O
      </button>
      <button
        onClick={() => {
          console.log(gameBoard);
        }}
      >
        LOGG
      </button>
      <button onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

export default Game;
