import "./Square.css";

const Square = ({ game, line, square, onClick }) => {
  return (
    <div
      className="square"
      data-pos={`${line}${square}`}
      onClick={(e) => onClick(e)}
    >
      {game[line][square]}
    </div>
  );
};
export default Square;
