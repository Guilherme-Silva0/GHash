import { useState } from "react";

function App() {
  const startingGame = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const [game, setGame] = useState(startingGame);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [playing, setPlaying] = useState(true);

  return (
    <>
      <h1>Ready to code X O</h1>
    </>
  );
}

export default App;
