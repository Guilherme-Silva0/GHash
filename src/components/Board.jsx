import React from "react";

import Line from "./Line";

import "./Board.css";

const Board = ({ game }) => {
  return (
    <div className="table">
      <Line game={game} line={0} />
      <Line game={game} line={1} />
      <Line game={game} line={2} />
    </div>
  );
};

export default Board;
