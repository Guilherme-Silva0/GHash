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

  return <Board game={game} />;
}

export default App;
