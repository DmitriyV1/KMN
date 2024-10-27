type TProps = {
  wins: number;
  losses: number;
  draws: number;
};

function Scores({ wins, losses, draws }: TProps) {
  return (
    <div className="score-container">
      <h3>Win: {wins}</h3>
      <h3>Lose: {losses}</h3>
      <h3>Draw: {draws}</h3>
    </div>
  );
}

export default Scores;
