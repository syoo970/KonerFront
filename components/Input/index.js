import { useState, useEffect, forwardRef } from "react";
import PropTypes from "prop-types";
import Text from "../Text";
import * as S from "./Input.style";

const Input = forwardRef(function Input(
  {
    errors,
    width,
    height,
    textColor,
    borderColor,
    wrapperStyle,
    errorFontSize,
    ...props
  },
  ref
) {
  const [error, setError] = useState(errors);

  const wStyle = {
    width,
    height,
    border: `1px solid ${borderColor}`,
    color: textColor,
    ...wrapperStyle,
  };

  useEffect(() => {
    setError(errors);
  }, [errors]);

  return (
    <S.InputContainer>
      <S.InputWrapper style={wStyle}>
        <S.Input ref={ref} {...props} />
      </S.InputWrapper>
      <Text color="red" fontSize={errorFontSize}>
        {error}
      </Text>
    </S.InputContainer>
  );
});

Input.propTypes = {
  errors: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textColor: PropTypes.string,
  borderColor: PropTypes.string,
  wrapperStyle: PropTypes.object,
  errorFontSize: PropTypes.string,
};

Input.defaultProps = {
  errors: "",
  width: "100%",
  height: "40px",
  textColor: "black",
  borderColor: "black",
  wrapperStyle: {},
  errorFontSize: "1.5rem",
};

export default Input;
