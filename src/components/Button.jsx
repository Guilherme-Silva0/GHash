import "./Button.css";

const Button = ({ onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      Reiniciar jogo
    </button>
  );
};

export default Button;
