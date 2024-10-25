const getStorageValues = () => {
  const win = window.localStorage.getItem("win") || 0;
  const lose = window.localStorage.getItem("lose") || 0;
  const draw = window.localStorage.getItem("draw") || 0;

  return { win, lose, draw };
};

const resetStorageValues = () => {
  window.localStorage.setItem("win", String(0));
  window.localStorage.setItem("lose", String(0));
  window.localStorage.setItem("draw", String(0));
};

const increaseStorageValue = (value: string) => {
  const storedValue = window.localStorage.getItem(value);
  window.localStorage.setItem(value, String(+storedValue! + 1));
};

export { getStorageValues, resetStorageValues, increaseStorageValue };
