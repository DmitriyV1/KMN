// Version 1 ------------------------------------------------
// import { useState, useEffect } from "react";

// const useLocalStorage = (key: string, initialValue: number) => {
//   const [value, setValue] = useState(() => {
//     const storedValue = localStorage.getItem(key);
//     return storedValue ? JSON.parse(storedValue) : initialValue;
//   });

//   useEffect(() => {
//     localStorage.setItem(key, value);
//   }, [key, value]);

//   return [value, setValue];
// };

// export default useLocalStorage;

// ----------------------------------------------------------

import { useState, useEffect } from "react";

const useGameStatistics = () => {
  const [statistics, setStatistics] = useState(() => {
    const scores = localStorage.getItem("gameStatistics");
    return scores
      ? JSON.parse(scores)
      : {
          wins: 0,
          losses: 0,
          draws: 0,
        };
  });

  const wins = statistics.wins;
  const losses = statistics.losses;
  const draws = statistics.draws;

  const addWin = () =>
    setStatistics({ ...statistics, wins: statistics.wins + 1 });
  const addLoss = () =>
    setStatistics({ ...statistics, losses: statistics.losses + 1 });
  const addDraw = () =>
    setStatistics({ ...statistics, draws: statistics.draws + 1 });

  const resetStatistics = () => setStatistics({ wins: 0, losses: 0, draws: 0 });

  useEffect(() => {
    localStorage.setItem("gameStatistics", JSON.stringify(statistics));
  }, [statistics]);

  return {
    wins,
    losses,
    draws,
    addWin,
    addLoss,
    addDraw,
    resetStatistics,
  };
};

export default useGameStatistics;
