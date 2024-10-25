type GameRules = {
  [key: string]: {
    [key: string]: number;
  };
};

const getWinner = (active: string, activeOpponent: string) => {
  const gameRules: GameRules = {
    rock: {
      rock: 0,
      scissors: 1,
      paper: -1,
    },
    ножницы: {
      rock: -1,
      scissors: 0,
      paper: 1,
    },
    бумага: {
      rock: 1,
      scissors: -1,
      paper: 0,
    },
  };

  const result = gameRules[active][activeOpponent];

  return result;
};

export default getWinner;
