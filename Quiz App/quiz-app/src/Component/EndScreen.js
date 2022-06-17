import React, { useContext } from "react";
import { QuizeContext } from "../Helper/Helper";
import { QuestionBank } from "../Helper/QuestionBank";
export const EndScreen = () => {
  const { gameState, setGameState, score, setScore } = useContext(QuizeContext);

  return (
    <div className="EndScreen">
      {score === QuestionBank.length ? (
        <h1>What a Brilliant!</h1>
      ) : (
        <h1>Try tobe best Achieve</h1>
      )}
      <h2>
        Your Score: {score}/{QuestionBank.length}
      </h2>
      <button
        onClick={() => {
          setGameState("menu");
          setScore(0);
        }}
      >
        Again Play
      </button>
    </div>
  );
};
