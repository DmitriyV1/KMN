import { useEffect, useState } from "react";
import Elements from "./components/Elements";
import getWinner from "./functions/getWinner";
import getRandomElement from "./functions/getRandomElement";
import useLocalStorage from "./functions/useLocalStorage";
import Scores from "./components/Scores";

function App() {
  const { wins, losses, draws, addWin, addLoss, addDraw, resetStatistics } =
    useLocalStorage();

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
    resetStatistics();
    setActiveOpponent(null);
    setActive(null);
  };

  useEffect(() => {
    if (active === null || activeOpponent === null) return;

    const result = getWinner(active, activeOpponent);

    switch (result) {
      case 0:
        addDraw();
        alert("Draw");
        break;
      case 1:
        addWin();
        alert("Win");
        break;
      case -1:
        addLoss();

        alert("Lose");
        break;
    }
    // Массив зависимостей просит addDraw etc, но в таком случае мы ловим бесконечный ререндер, т.к. гуард перестает работать после первой итерации (я не сбрасываю active и activeOpponent). Если добавлю сброс оппонента, то он перестанет подсвечиваться, т.к. сразу после результата игры он обнуляется.
  }, [active, activeOpponent]);

  return (
    <div className="body">
      <h1 className="body__title">Камень / ножницы / бумага</h1>
      <Elements
        active={active}
        activeOpponent={activeOpponent}
        setActive={handleActive}
      />
      <div className="body__buttons">
        <button className="button" onClick={handlePlay}>
          Play!
        </button>
        <button className="button" onClick={handleReset}>
          Reset
        </button>
      </div>
      <Scores wins={wins} losses={losses} draws={draws} />
    </div>
  );
}

export default App;
