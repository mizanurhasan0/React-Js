import "./App.css";
import react, { useState, useContext } from "react";
import { Quiz } from "./Component/Quiz";
import { MainMenu } from "./Component/MainMenu";
import { EndScreen } from "./Component/EndScreen";
import { QuizeContext } from "./Helper/Helper";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <h2>Quiz App</h2>
      <QuizeContext.Provider
        value={{ gameState, setGameState, score, setScore }}
      >
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizeContext.Provider>
    </div>
  );
}

export default App;
