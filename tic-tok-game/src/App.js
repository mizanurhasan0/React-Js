import "./App.css";
import React, { useState, useEffect } from "react";
import Squired from "./Component/Squired";
import { Pattern } from "./Component/Pattern";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");
  const [result, setResult] = useState({ winner: "none", state: "none" });
  useEffect(() => {
    CheckWin();
  }, [board]);

  useEffect(() => {
    if (result.state !== "none") {
      alert(`Game Finish !Wining Player:${result.winner}`);
    }
  }, [result]);
  const chooseSquire = (square) => {
    setBoard(
      board.map((val, id) => {
        if (id === square && val === "") {
          return player;
        }

        return val;
      })
    );
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  };
  const CheckWin = () => {
    Pattern.forEach((currPattern) => {
      console.log(currPattern);
      const firstPlayer = board[currPattern[0]];

      if (firstPlayer === "") return;

      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if (board[idx] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });
      if (foundWinningPattern) {
        setResult({ winner: player, state: "Won" });
      }
    });
  };
  return (
    <div className="App">
      <div className="Board">
        <div className="Row">
          <Squired
            val={board[0]}
            chooseSquire={() => {
              chooseSquire(0);
            }}
          />
          <Squired
            val={board[1]}
            chooseSquire={() => {
              chooseSquire(1);
            }}
          />
          <Squired
            val={board[2]}
            chooseSquire={() => {
              chooseSquire(2);
            }}
          />
        </div>
        <div className="Row">
          <Squired
            val={board[3]}
            chooseSquire={() => {
              chooseSquire(3);
            }}
          />
          <Squired
            val={board[4]}
            chooseSquire={() => {
              chooseSquire(4);
            }}
          />
          <Squired
            val={board[5]}
            chooseSquire={() => {
              chooseSquire(5);
            }}
          />
        </div>
        <div className="Row">
          <Squired
            val={board[6]}
            chooseSquire={() => {
              chooseSquire(6);
            }}
          />
          <Squired
            val={board[7]}
            chooseSquire={() => {
              chooseSquire(7);
            }}
          />
          <Squired
            val={board[8]}
            chooseSquire={() => {
              chooseSquire(8);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
