import React from "react";

import Line from "./Line";

import "./Board.css";

const Board = ({ game, play }) => {
  return (
    <div className="table">
      <Line game={game} line={0} play={play} />
      <Line game={game} line={1} play={play} />
      <Line game={game} line={2} play={play} />
    </div>
  );
};

export default Board;
