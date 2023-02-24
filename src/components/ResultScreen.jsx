import Button from "./Button";

import "./ResultScreen.css";

const ResultScreen = ({ winner, onRestart }) => {
  return (
    <div className="result-screen">
      <div className="result-message">
        <p>{winner ? `Jogador ${winner} venceu!` : "Empate!"}</p>
        <Button onClick={onRestart}>Jogar novamente</Button>
      </div>
    </div>
  );
};

export default ResultScreen;
