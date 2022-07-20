import { Fab } from "@mui/material";
import PropTypes from "prop-types";

const MuiFab = ({ color, variant, size, children, ...props }) => {
  return (
    <Fab color={color} variant={variant} size={size} {...props}>
      {children}
    </Fab>
  );
};

MuiFab.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node,
};

MuiFab.defaultProps = {
  color: "primary",
  variant: "",
  size: "medium",
  children: null,
};

export default MuiFab;
