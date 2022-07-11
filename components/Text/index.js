import PropTypes from "prop-types";
import * as S from "./Text.style";

const Text = ({
  fontSize,
  fontWeight,
  fontStyle,
  lineHeight,
  color,
  children,
  ...props
}) => (
  <S.Text
    fontSize={fontSize}
    fontWeight={fontWeight}
    lineHeight={lineHeight}
    color={color}
    {...props}
  >
    {children}
  </S.Text>
);

Text.propTypes = {
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  fontStyle: PropTypes.string,
  lineHeight: PropTypes.string,
  color: PropTypes.string,
};

Text.defaultProps = {
  fontSize: "1.5rem",
  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: "1.5",
  color: "black",
};

export default Text;
