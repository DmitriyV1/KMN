type GameRules = Record<string, Record<string, number>>;

const getWinner = (active: string, activeOpponent: string) => {
  const gameRules: GameRules = {
    rock: {
      rock: 0,
      scissors: 1,
      paper: -1,
    },
    scissors: {
      rock: -1,
      scissors: 0,
      paper: 1,
    },
    paper: {
      rock: 1,
      scissors: -1,
      paper: 0,
    },
  };

  return gameRules[active][activeOpponent];
};

export default getWinner;
