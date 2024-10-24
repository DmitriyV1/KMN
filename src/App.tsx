import { useState } from "react";
import Elements from "./components/Elements";
import getWinner from "./functions/getWinner";
import "./App.css";

function App() {
    // custom hook
  const win = window.localStorage.getItem("win") || 0;
  const lose = window.localStorage.getItem("lose") || 0;
  const draw = window.localStorage.getItem("draw") || 0;

  // use enum
  const options = ["rock", "scissors", "paper"];

  const [active, setActive] = useState<string | null>(null);
  const [activeOpponent, setActiveOpponent] = useState<string | null>(null);

  const handleActive = (element: string) => {
    setActive(element);
  };

  const handlePlay = () => {
    if (!active) return;
    const randomNumber = Math.random();

    if (randomNumber < 0.33) {
      setActiveOpponent(options[0]);
    } else if (randomNumber > 0.66) {
      setActiveOpponent(options[1]);
    } else {
      setActiveOpponent(options[2]);
    }

    getWinner(active, activeOpponent);
  };

  const handleReset = () => {
    setActiveOpponent(null);
    setActive(null);
  };

  return (
    <>
      <h1>Камень / ножницы / бумага</h1>
      <Elements
        active={active}
        activeOpponent={activeOpponent}
        setActive={handleActive}
        elements={options}
      />
      <button onClick={handlePlay}>Play!</button>
      <button onClick={handleReset}>Reset</button>

      <div className="score-container">
        <h3>Win: {win}</h3>
        <h3>Lose: {lose}</h3>
        <h3>Draw: {draw}</h3>
      </div>
    </>
  );
}

export default App;
