import Square from "./Square";

import "./Line.css";

const Line = ({ game, line, play }) => {
  return (
    <div className="line">
      <Square game={game} line={line} square={0} onClick={(e) => play(e)} />
      <Square game={game} line={line} square={1} onClick={(e) => play(e)} />
      <Square game={game} line={line} square={2} onClick={(e) => play(e)} />
    </div>
  );
};

export default Line;
