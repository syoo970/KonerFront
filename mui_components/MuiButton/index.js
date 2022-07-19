import { Button } from "@mui/material";
import PropTypes from "prop-types";

const MuiButton = ({ variant, disabled, color, size, ...props }) => (
  <Button
    variant={variant}
    disabled={disabled}
    color={color}
    size={size}
    {...props}
  />
);

MuiButton.propTypes = {
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.string,
};

MuiButton.defaultProps = {
  variant: "contained",
  disabled: false,
  color: "primary",
  size: "medium",
};

export default MuiButton;
