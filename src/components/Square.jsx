import "./Square.css";

const Square = ({ game, line, square }) => {
  return (
    <div className="square" data-pos={`${line}${square}`}>
      {game[line][square]}
    </div>
  );
};
export default Square;
