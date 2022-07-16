import PropTypes from "prop-types";
import * as S from "./Button.style";
import Text from "../Text";

const Button = ({ children, text, btnColor, color, ...props }) => {
  return (
    <S.Button btnColor={btnColor} {...props}>
      <Text color={color}>{children ? children : text}</Text>
    </S.Button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  btnColor: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  text: "",
  btnColor: "#f9ca24",
  color: "",
};

export default Button;
