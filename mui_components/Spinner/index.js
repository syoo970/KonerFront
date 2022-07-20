import { CircularProgress } from "@mui/material";
import PropTypes from "prop-types";

const Spinner = ({ color, size, ...props }) => (
  <CircularProgress color={color} size={size} {...props} />
);

Spinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Spinner.defaultProps = {
  color: "primary",
  size: "100%",
};

export default Spinner;
