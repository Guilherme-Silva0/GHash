import { useState } from "react";

import Board from "./components/Board";
import Button from "./components/Button";

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
      if (game[d][d] === currentPlayer) {
        score++;
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

  const togglePlayer = () => {
    currentPlayer === "X" ? setCurrentPlayer("O") : setCurrentPlayer("X");
  };

  const position = (e) => {
    const posString = e.target.getAttribute("data-pos");
    const pos = [
      parseInt(posString.substring(0, 1)),
      parseInt(posString.substring(1, 2)),
    ];
    return pos;
  };

  const checkEmptySquare = (e) => {
    if (game[position(e)[0]][position(e)[1]] === "") {
      return true;
    } else {
      return false;
    }
  };

  const play = (e) => {
    if (playing) {
      if (checkEmptySquare(e)) {
        game[position(e)[0]][position(e)[1]] = currentPlayer;
        setGame([...game]);
        togglePlayer();
        if (checkVictory()) {
          togglePlayer();
          alert(`Jogador ${currentPlayer} venceu`);
          setPlaying(false);
        }
      } else {
        alert("Essa posição já esta ocupada!");
      }
    }
  };

  const restart = () => {
    setPlaying(true);
    setGame(startingGame);
    setCurrentPlayer("X");
  };

  return (
    <>
      <h3>Vez de: {currentPlayer}</h3>
      <Board game={game} play={play} />
      {playing ? "" : <Button onClick={() => restart()}>Reiniciar jogo</Button>}
    </>
  );
}

export default App;
