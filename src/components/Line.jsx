import Square from "./Square";

const Line = ({ game, line }) => {
  return (
    <div className="line">
      <Square game={game} line={line} square={0} />
      <Square game={game} line={line} square={1} />
      <Square game={game} line={line} square={2} />
    </div>
  );
};

export default Line;
