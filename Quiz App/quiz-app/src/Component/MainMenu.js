import React, { useContext } from "react";
import { QuizeContext } from "../Helper/Helper";
export const MainMenu = () => {
  const { gameState, setGameState } = useContext(QuizeContext);

  return (
    <div className="Menu">
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
};
