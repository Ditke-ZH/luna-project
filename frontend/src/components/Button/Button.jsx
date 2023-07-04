import "./button.css";

const Button = ({ type, onClickFunction, children }) => {
  return (
    <button type={type} onClick={onClickFunction} className="luna-button">
      {children}
    </button>
  );
};

export default Button;
