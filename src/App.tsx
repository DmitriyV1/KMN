import { useState } from "react";
import "./App.css";
import Elements from "./components/Elements";

function App() {
  const getWinner = (active: string | null, activeOpponent: string | null) => {
    // Вот этим тоже не горжусь
    if (active === "scissors" && activeOpponent === "paper") {
      alert("win");
    } else if (active === "rock" && activeOpponent === "scissors") {
      alert("win");
    } else if (active === "paper" && activeOpponent === "rock") {
      alert("win");
    } else {
      alert("lose");
    }
  };
  const handlePlay = () => {
    if (active === null || active === "") return;
    let options = ["rock", "scissors", "paper"];
    // Убираем выбранный элемент
    options = options.filter((el) => el !== active);
    // Рандомим противника
    if (Math.random() < 0.5) {
      setActiveOpponent(options[0]);
    } else {
      setActiveOpponent(options[1]);
    }
    setTimeout(() => {
      getWinner(active, activeOpponent);
    }, 200);
  };

  const handleReset = () => {
    setActiveOpponent(null);
    setActive(null);
  };
  const [active, setActive] = useState<string | null>(null);
  const [activeOpponent, setActiveOpponent] = useState<string | null>(null);
  return (
    <>
      <h1>Камень / ножницы / бумага</h1>
      <Elements
        active={active}
        activeOpponent={activeOpponent}
        setActive={setActive}
      />
      <button onClick={handlePlay}>Play!</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;
