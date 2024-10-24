const getWinner = (active: string | null, activeOpponent: string | null) => {
  const win = window.localStorage.getItem("win") || 0;
  const lose = window.localStorage.getItem("lose") || 0;
  const draw = window.localStorage.getItem("draw") || 0;

  console.log(active, activeOpponent);
  if (activeOpponent === null) return;
  if (active === activeOpponent) {
    window.localStorage.setItem("draw", `${+draw + 1}`);
    alert("draw");
  }

  if (active === "scissors" && activeOpponent === "paper") {
    alert("win");
    window.localStorage.setItem("win", `${+win + 1}`);
  } else if (active === "rock" && activeOpponent === "scissors") {
    alert("win");
    window.localStorage.setItem("win", `${+win + 1}`);
  } else if (active === "paper" && activeOpponent === "rock") {
    alert("win");
    window.localStorage.setItem("win", `${+win + 1}`);
  } else {
    alert("lose");
    window.localStorage.setItem("lose", `${+lose + 1}`);
  }
};

export default getWinner;
