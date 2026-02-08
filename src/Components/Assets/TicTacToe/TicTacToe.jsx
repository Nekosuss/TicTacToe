import React, { useState } from "react";
import "./TicTacToe.css";

import circle_icon from "./OOOO.png";
import cross_icon from "./cross.png";

const winPatterns = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);

  const checkWin = (boardData) => {
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;

      if (
        boardData[a] &&
        boardData[a] === boardData[b] &&
        boardData[a] === boardData[c]
      ) {
        setLock(true);
        alert(boardData[a].toUpperCase() + " Wins!");
        return;
      }
    }
  };

  const toggle = (index) => {
    if (lock || board[index] !== "") return;

    const newBoard = [...board];
    newBoard[index] = count % 2 === 0 ? "x" : "o";

    setBoard(newBoard);
    setCount(prev => prev + 1);

    checkWin(newBoard);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setCount(0);
    setLock(false);
  };

  return (
    <div className="container">
      <h1 className="title">
        Tic Tac Toe Game in <span>React</span>
      </h1>

      <div className="board">
        {board.map((val, i) => (
          <div key={i} className="boxes" onClick={() => toggle(i)}>
            {val === "x" && <img src={cross_icon} alt="X" />}
            {val === "o" && <img src={circle_icon} alt="O" />}
          </div>
        ))}
      </div>

      <button className="reset" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
