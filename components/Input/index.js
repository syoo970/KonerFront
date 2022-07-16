import { useState, useEffect, forwardRef } from "react";
import PropTypes from "prop-types";
import Text from "../Text";
import PrefixBlock from "./PrefixBlock";
import * as S from "./Input.style";

const Input = forwardRef(function Input(
  {
    isErrorAble,
    errors,
    width,
    height,
    textColor,
    borderColor,
    wrapperStyle,
    errorFontSize,
    usePrefix,
    prefix,
    useFileUpload,
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
    display: `${useFileUpload ? "none" : "block"}`,
    ...wrapperStyle,
  };

  useEffect(() => {
    if (isErrorAble) setError(errors);
  }, [errors, isErrorAble]);

  return (
    <S.InputContainer>
      <S.InputWrapper style={wStyle}>
        <S.Input ref={ref} {...props} />
        {usePrefix && <PrefixBlock>{prefix}</PrefixBlock>}
      </S.InputWrapper>
      {isErrorAble && (
        <Text color="red" fontSize={errorFontSize}>
          {error}
        </Text>
      )}
    </S.InputContainer>
  );
});

Input.propTypes = {
  isErrorAble: PropTypes.bool,
  errors: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textColor: PropTypes.string,
  borderColor: PropTypes.string,
  wrapperStyle: PropTypes.object,
  errorFontSize: PropTypes.string,
  usePrefix: PropTypes.bool,
  useFileUpload: PropTypes.bool,
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Input.defaultProps = {
  isErrorAble: true,
  errors: "",
  width: "100%",
  height: "40px",
  textColor: "black",
  borderColor: "black",
  wrapperStyle: {},
  errorFontSize: "1.5rem",
  usePrefix: false,
  useFileUpload: false,
  prefix: "",
};

export default Input;
