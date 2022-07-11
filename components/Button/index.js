import PropTypes from "prop-types";
import * as S from "./Button.style";
import Text from "../Text";

const Button = ({ text, btnColor, color, ...props }) => {
  return (
    <S.Button btnColor={btnColor} {...props}>
      <Text color={color}>{text}</Text>
    </S.Button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  btnColor: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  text: "",
  btnColor: "#f9ca24",
  color: "",
};

export default Button;
