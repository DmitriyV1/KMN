import { increaseStorageValue } from "./useLocalStorage";

const getWinner = (active: string, activeOpponent: string) => {
  const winningCombinations = {
    scissors: "paper",
    rock: "scissors",
    paper: "rock",
  };

  if (active === activeOpponent) {
    alert("draw");
    increaseStorageValue("draw");
    return;
  }

  if (
    winningCombinations[active as keyof typeof winningCombinations] ===
    activeOpponent
  ) {
    alert("win");
    increaseStorageValue("win");
  } else {
    alert("lose");
    increaseStorageValue("lose");
  }
};

export default getWinner;
