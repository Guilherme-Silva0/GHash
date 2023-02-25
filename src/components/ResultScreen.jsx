import { useEffect } from "react";

import Button from "./Button";
import victorySound from "../assets/victorysound.mp3";

import "./ResultScreen.css";

const ResultScreen = ({ winner, onRestart }) => {
  useEffect(() => {
    const audio = new Audio(victorySound);
    audio.volume = 0.4;
    audio.play();
  }, []);

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
