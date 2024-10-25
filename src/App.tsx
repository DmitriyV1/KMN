import { useEffect, useState } from "react";
import Elements from "./components/Elements";
import getWinner from "./functions/getWinner";
import getRandomElement from "./functions/getRandomElement";
import {
  resetStorageValues,
  getStorageValues,
} from "./functions/useLocalStorage";
import "./App.css";

function App() {
  // const { win, lose, draw } = getStorageValues();

  const [win, setWin] = useState(getStorageValues().win);
  const [lose, setLose] = useState(getStorageValues().lose);
  const [draw, setDraw] = useState(getStorageValues().draw);

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
    console.log(win, lose, draw);
    resetStorageValues();
    setWin(0);
    setLose(0);
    setDraw(0);
    setActiveOpponent(null);
    setActive(null);
  };

  useEffect(() => {
    if (activeOpponent !== null && active !== null) {
      getWinner(active, activeOpponent);
    }
  }, [active, activeOpponent]);

  useEffect(() => {
    const updateState = () => {
      const storageValues = getStorageValues();
      setWin(storageValues.win);
      setLose(storageValues.lose);
      setDraw(storageValues.draw);
    };

    updateState();
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
