import { useState, useEffect } from "react";
import Cell from "./Cell";
import Modal from "./Modal";

function Game(props) {
  const [gameBoard, setGameBoard] = useState([]);
  const [winner, setWinner] = useState("");
  const [gameLocked, setGameLocked] = useState(false);

  useEffect(() => {
    //Populate rows
    resetGame();
  }, []);

  useEffect(() => {
    function checkScore(score) {
      score.forEach((row) => {
        if (row.includes("YYYY")) {
          setWinner("Yellow");
        }
        if (row.includes("RRRR")) {
          setWinner("Red");
        }
      });
    }

    function rotateGameBorad90deg() {
      const verticalGameBoard = [];
      for (let i = 0; i <= 6; i++) {
        const verticalRow = [];
        for (let j = 0; j <= 5; j++) {
          verticalRow.push(gameBoard[j][i]);
        }
        verticalGameBoard.push(verticalRow.join(""));
      }
      return verticalGameBoard;
    }
    function rotateGameBoardPos45deg() {
      const deg45 = [];
      const rowBuffer = [];
      for (let i = 0; i <= 10; i++) {
        rowBuffer.push([]);
      }
      for (let i = 0; i <= 5; i++) {
        for (let j = 0; j <= 10; j++) {
          if (gameBoard[i][i + (j - 5)]) {
            rowBuffer[j].push(gameBoard[i][i + (j - 5)]);
          }
        }
      }
      rowBuffer.forEach((row) => {
        deg45.push(row.join(""));
      });
      return deg45;
    }
    function rotateGameBoardNeg45deg() {
      const deg45 = [];
      const rowBuffer = [];
      for (let i = 0; i <= 10; i++) {
        rowBuffer.push([]);
      }

      for (let i = 0; i <= 5; i++) {
        for (let j = 0; j <= 5; j++) {
          if (gameBoard[j + i]) {
            rowBuffer[i].push(gameBoard[j + i][6 - j]);
            rowBuffer[i + 5].push(gameBoard[j + i][4 - j]);
          }
        }
      }

      // for (let i = 6; i <= 10; i++) {
      //   for (let j = 0; j <= 5; j++) {
      //     if (gameBoard[j + (10 - i)]) {
      //       rowBuffer[i].push(gameBoard[j + (10 - i)][4 - j]);
      //     } else {
      //       rowBuffer[i].push("/");
      //     }
      //   }
      // }

      rowBuffer.forEach((row) => {
        deg45.push(row.join(""));
      });

      console.log(deg45);
      return deg45;
    }
    if (gameBoard[0]) {
      checkScore(gameBoard);
      checkScore(rotateGameBorad90deg());
      checkScore(rotateGameBoardPos45deg());
      checkScore(rotateGameBoardNeg45deg());
    }
  }, [gameBoard]);

  function setCoin(column, player) {
    const gameBoardCopy = [...gameBoard];
    for (let i = 5; i >= 0; i--) {
      if (gameBoard[i][column] === "_") {
        let row = gameBoardCopy[i].split("");
        row[column] = player;
        gameBoardCopy[i] = row.join("");
        setGameBoard((original) => [...gameBoardCopy]);
        props.changeTurn();
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
    setWinner("");
    setGameLocked(false);
  }
  function lockGame() {
    setWinner("");
    setGameLocked(true);
  }
  return (
    <div>
      <div className="w-fit p-4 bg-midnight mx-auto">
        <div className="bg-gradient-to-tr from-bermuda via-nova to-purple p-[1.5px] w-fit">
          {gameBoard.map((row, index) => {
            const rowToCell = row.split("");
            return (
              <div className="flex flex-grow-0" key={index}>
                {rowToCell.map((cell, column) => (
                  <Cell
                    cellStatus={cell}
                    setCoin={setCoin}
                    gameLocked={gameLocked}
                    column={column}
                    key={cell + "" + column}
                    turn={props.turn}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          className="bg-midnight text-teal border-teal border px-4 py-2 mt-2 sm:mt-4 font-bold mb-2 sm:text-xl"
          onClick={resetGame}
        >
          Reset Game
        </button>
      </div>
      {winner && <Modal winner={winner} resetGame={resetGame} lockGame={lockGame} />}
    </div>
  );
}

export default Game;
