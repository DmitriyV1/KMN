import { useEffect, useState } from "react";
import Elements from "./components/Elements";
import getWinner from "./functions/getWinner";
import getRandomElement from "./functions/getRandomElement";
import useLocalStorage from "./functions/useLocalStorage";
import "./App.css";

function App() {
  const [win, setWin] = useLocalStorage("win", 0);
  const [lose, setLose] = useLocalStorage("lose", 0);
  const [draw, setDraw] = useLocalStorage("draw", 0);

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
    setWin(0);
    setLose(0);
    setDraw(0);
    setActiveOpponent(null);
    setActive(null);
  };

  useEffect(() => {
    if (activeOpponent !== null && active !== null) {
      const result = getWinner(active, activeOpponent);

      if (result === 0) {
        setDraw((prev: number) => prev + 1);
        alert("Draw");
      } else if (result === 1) {
        setWin((prev: number) => prev + 1);
        alert("Win");
      } else {
        setLose((prev: number) => prev + 1);
        alert("Lose");
      }
    }
  }, [active, activeOpponent, setDraw, setLose, setWin]);

  return (
    <div>
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
    </div>
  );
}

export default App;
