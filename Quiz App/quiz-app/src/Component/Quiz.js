import React, { useState, useContext } from "react";
import { QuizeContext } from "../Helper/Helper";
import { QuestionBank } from "../Helper/QuestionBank";
export const Quiz = () => {
  const { gameState, setGameState, score, setScore } = useContext(QuizeContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [choseQuestion, setChoseQuestion] = useState("");

  const nextQuestion = () => {
    if (QuestionBank[currQuestion].answer === choseQuestion) {
      setScore(score + 1);
    }

    setCurrQuestion(currQuestion + 1);
  };

  const finishQuiz = () => {
    if (QuestionBank[currQuestion].answer === choseQuestion) {
      setScore(score + 1);
    }
    setGameState("endScreen");
    setCurrQuestion(0);
  };
  return (
    <div className="Quiz">
      <h2>{QuestionBank[currQuestion].prompt}</h2>
      <div className="option">
        <button
          onClick={() => {
            setChoseQuestion("A");
          }}
        >
          {QuestionBank[currQuestion].optionA}
        </button>
        <button
          onClick={() => {
            setChoseQuestion("B");
          }}
        >
          {QuestionBank[currQuestion].optionB}
        </button>
        <button
          onClick={() => {
            setChoseQuestion("C");
          }}
        >
          {QuestionBank[currQuestion].optionC}
        </button>
        <button
          onClick={() => {
            setChoseQuestion("D");
          }}
        >
          {QuestionBank[currQuestion].optionD}
        </button>
      </div>
      {currQuestion === QuestionBank.length - 1 ? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
};
