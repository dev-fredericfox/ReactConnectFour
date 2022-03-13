import { useState, useEffect } from "react";
import Cell from './Cell'


function Game() {
  const [gameBoard, setGameBoard] = useState([]);
  const [turn, setTurn] = useState('X');

  useEffect(() => {
    //Populate rows
    resetGame();
  }, []);

  useEffect(() => {
    //Populate rows
    function checkHorizontalScore() {
      gameBoard.forEach(row => {
        if (row.includes('XXXX')){
          window.alert('X Wins!')
        }
        if (row.includes('OOOO')){
          window.alert('O Wins!')
        }
      })
    }
    console.log("Game Board useEffect")
    checkHorizontalScore()
  }, [gameBoard]);



  function changeTurn() {
    if (turn === 'X')
    setTurn(() => 'O' )
    else {
      setTurn(() => 'X')
    }
  }

  function setCoin(column, player) {
    const gameBoardCopy = [...gameBoard];
    for (let i = 5; i >= 0; i--) {
      if (gameBoard[i][column] === "_") {
        let row = gameBoardCopy[i].split("");
        console.log(row);
        row[column] = player;
        console.log(row);
        gameBoardCopy[i] = row.join("");
        console.log(gameBoardCopy);
        setGameBoard((original) => [...gameBoardCopy]);
        changeTurn()
        break;
      }
      // Add throwing some sort of error if col > 7 (index 6)
    }
  }

  function resetGame() {
    const gameBoardCopy = [];
    const row = "_______";
    // Make 7 Rows of empty strings
    for (let i = 0; i <= 5; i++) {
      gameBoardCopy.push(row);
    }
    setGameBoard(() => [...gameBoardCopy]);
  }
  return (
    <div>
      {gameBoard.map((row, index) => {
        const rowToCell = row.split("");
        return (
          <div className="flex" key={index}>
            {rowToCell.map((cell, column) => (
              <Cell cellStatus={cell} setCoin={setCoin} column={column} key={cell+''+column} turn={turn}/>
            ))}
          </div>
        );
      })}
      {/* <p>GameBoard: {gameBoard[5]}</p>
      <p>GameBoard: {gameBoard[4]}</p>
      <p>GameBoard: {gameBoard[3]}</p>
      <p>GameBoard: {gameBoard[2]}</p>
      <p>GameBoard: {gameBoard[1]}</p>
      <p>GameBoard: {gameBoard[0]}</p>
      <p>I am game.</p> */}
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
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
}

export default Game;
