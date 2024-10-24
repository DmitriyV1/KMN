const getStorageValues = () => {
  const win = window.localStorage.getItem("win") || 0;
  const lose = window.localStorage.getItem("lose") || 0;
  const draw = window.localStorage.getItem("draw") || 0;

  return { win, lose, draw };
};

const clearStorageValues = () => {
  window.localStorage.setItem("win", String(0));
  window.localStorage.setItem("lose", String(0));
  window.localStorage.setItem("draw", String(0));
};

const increaseStorageValue = (value: string) => {
  const { win, lose, draw } = getStorageValues();

  switch (value) {
    case "win":
      window.localStorage.setItem("win", String(+win + 1));
      break;
    case "lose":
      window.localStorage.setItem("lose", String(+lose + 1));
      break;
    case "draw":
      window.localStorage.setItem("draw", String(+draw + 1));
      break;
    default:
      break;
  }
};

export { getStorageValues, clearStorageValues, increaseStorageValue };
