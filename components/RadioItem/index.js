import React from "react";
import PropTypes from "prop-types";
import Text from "../Text";
import Input from "../Input";
import * as S from "./RadioItem.style";

const RadioItem = React.forwardRef(function RadioItem(
  { label, value, labelFont, labelSize, ...props },
  ref
) {
  const RadioInputWrapperStyle = {
    border: 0,
    height: "100%",
    justifyContent: "center",
  };
  return (
    <S.RadioItemWrapper>
      <label>
        <Text font={labelFont} fontSize={labelSize}>
          {label}
        </Text>
      </label>
      <Input
        type="radio"
        value={value}
        ref={ref}
        wrapperStyle={RadioInputWrapperStyle}
        isErrorAble={false}
        {...props}
      />
    </S.RadioItemWrapper>
  );
});

RadioItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  labelSize: PropTypes.string,
  labelFont: PropTypes.string,
};

RadioItem.defaultProps = {
  label: "",
  value: "",
  labelSize: "1rem",
  labelFont: "",
};

export default RadioItem;
