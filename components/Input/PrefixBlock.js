import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Block = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ fontColor }) => fontColor};
  padding: 10px 10px 10px 0;
`;

const PrefixBlock = ({ children, bgColor, fontColor, ...props }) => {
  return (
    <Block {...props} bgColor={bgColor} fontColor={fontColor}>
      {children}
    </Block>
  );
};

PrefixBlock.propTypes = {
  children: PropTypes.node,
  bgColor: PropTypes.string,
  fontColor: PropTypes.string,
};

PrefixBlock.defaultProps = {
  children: null,
  bgColor: "white",
  fontColor: "gray",
};

export default PrefixBlock;
