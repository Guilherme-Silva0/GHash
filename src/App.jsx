import { useState } from "react";

import Board from "./components/Board";

function App() {
  const startingGame = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const [game, setGame] = useState(startingGame);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [playing, setPlaying] = useState(true);

  const checkVictory = () => {
    let score = 0;
    let victory = false;

    //lines
    for (let l = 0; l < 3; l++) {
      score = 0;
      for (let c = 0; c < 3; c++) {
        if (game[l][c] === currentPlayer) {
          score++;
        }
      }
      if (score >= 3) {
        victory = true;
        break;
      }
    }

    //columns
    for (let c = 0; c < 3; c++) {
      score = 0;
      for (let l = 0; l < 3; l++) {
        if (game[l][c] === currentPlayer) {
          score++;
        }
      }
      if (score >= 3) {
        victory = true;
        break;
      }
    }

    //diagonals
    score = 0;
    for (let d = 0; d < 3; d++) {
      if (game[d][d]) {
        if (game[l][c] === currentPlayer) {
          score++;
        }
      }
    }
    if (score >= 3) {
      victory = true;
    }

    score = 0;
    let l = 0;
    for (let c = 2; c >= 0; c--) {
      if (game[l][c] === currentPlayer) {
        score++;
      }
      l++;
    }
    if (score >= 3) {
      victory = true;
    }
    return victory;
  };

  return <Board game={game} />;
}

export default App;
