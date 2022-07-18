import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import PropTypes from "prop-types";

const MuiRadio = React.forwardRef(
  ({ horizontal, title, data, fontSize, ...props }, ref) => {
    return (
      <FormControl>
        <FormLabel id={`${title}-radio`}>{title}</FormLabel>
        <RadioGroup
          aria-labelledby={`${title}-radio`}
          defaultValue={data[0]?.value}
          row={horizontal}
        >
          {data.map(({ id, value, label, disabled }) => (
            <FormControlLabel
              key={id}
              value={value}
              disabled={disabled}
              control={
                <Radio
                  {...props}
                  ref={ref}
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize,
                    },
                  }}
                />
              }
              label={label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    );
  }
);

MuiRadio.propTypes = {
  horizontal: PropTypes.bool,
  title: PropTypes.string,
  data: PropTypes.array,
  fontSize: PropTypes.number,
};

MuiRadio.defaultProps = {
  horizontal: false,
  title: "",
  data: [],
  fontSize: 14,
};

export default MuiRadio;
