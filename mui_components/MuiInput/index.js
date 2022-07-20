import React from "react";
import PropTypes from "prop-types";
import { TextField, InputAdornment } from "@mui/material";

const MuiInput = React.forwardRef(
  (
    {
      label,
      variant,
      defaultValue,
      disabled,
      isError,
      isMultiLine,
      errorMessage,
      useAdornment,
      adornmentPosition,
      children,
      ...props
    },
    ref
  ) => {
    const adornment =
      adornmentPosition === "start" ? "startAdornment" : "endAdornment";

    return (
      <TextField
        error={isError}
        defaultValue={defaultValue}
        label={label}
        variant={variant}
        disabled={disabled}
        {...props}
        ref={ref}
        helperText={errorMessage}
        multiline={isMultiLine}
        InputProps={{
          [adornment]: useAdornment ? (
            <InputAdornment position={adornmentPosition}>
              {children}
            </InputAdornment>
          ) : null,
        }}
      />
    );
  }
);

MuiInput.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  isError: PropTypes.bool,
  isMultiLine: PropTypes.bool,
  errorMessage: PropTypes.string,
  useAdornment: PropTypes.bool,
  adornmentPosition: PropTypes.string,
  children: PropTypes.node,
};

MuiInput.defaultProps = {
  label: "default label",
  variant: "outlined",
  defaultValue: undefined,
  disabled: false,
  isError: false,
  isMultiLine: false,
  errorMessage: "",
  useAdornment: false,
  adornmentPosition: "start",
  children: null,
};

export default MuiInput;
