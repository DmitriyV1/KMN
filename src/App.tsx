import { useEffect, useState } from "react";
import Elements from "./components/Elements";
import getWinner from "./functions/getWinner";
import getRandomElement from "./functions/getRandomElement";
import {
  clearStorageValues,
  getStorageValues,
} from "./functions/useLocalStorage";
import "./App.css";

function App() {
  const { win, lose, draw } = getStorageValues();
  const [active, setActive] = useState<string | null>(null);
  const [activeOpponent, setActiveOpponent] = useState<string | null>(null);

  const handleActive = (element: string) => {
    setActive(element);
  };

  const handlePlay = () => {
    if (!active) return;
    setActiveOpponent(getRandomElement);
  };

  const handleReset = () => {
    clearStorageValues();
    setActiveOpponent(null);
    setActive(null);
  };

  useEffect(() => {
    if (activeOpponent !== null && active !== null) {
      getWinner(active, activeOpponent);
    }
  });

  return (
    <>
      <h1>Камень / ножницы / бумага</h1>
      <Elements
        active={active}
        activeOpponent={activeOpponent}
        setActive={handleActive}
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
