import "./Square.css";

const Square = ({ game, line, square, onClick }) => {
  let styleSquare = {};

  if (line === 0) {
    if (square === 0)
      styleSquare = {
        borderRight: "2px solid #0099dd",
        borderBottom: "2px solid #0099dd",
      };

    if (square === 1)
      styleSquare = {
        borderRight: "2px solid #0099dd",
        borderBottom: "2px solid #0099dd",
      };
    if (square === 2) styleSquare = { borderBottom: "2px solid #0099dd" };
  }

  if (line === 1) {
    if (square === 0)
      styleSquare = {
        borderRight: "2px solid #0099dd",
        borderBottom: "2px solid #0099dd",
      };

    if (square === 1)
      styleSquare = {
        borderRight: "2px solid #0099dd",
        borderBottom: "2px solid #0099dd",
      };
    if (square === 2) styleSquare = { borderBottom: "2px solid #0099dd" };
  }

  if (line === 2) {
    if (square === 0)
      styleSquare = {
        borderRight: "2px solid #0099dd",
      };

    if (square === 1)
      styleSquare = {
        borderRight: "2px solid #0099dd",
      };
    if (square === 2) styleSquare = { border: "none" };
  }

  return (
    <div
      className="square"
      data-pos={`${line}${square}`}
      onClick={(e) => onClick(e)}
      style={styleSquare}
    >
      {game[line][square]}
    </div>
  );
};
export default Square;
