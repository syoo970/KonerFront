import styled from "@emotion/styled";
import Spinner from "../../../mui_components/Spinner";
import MuiInput from "../../../mui_components/MuiInput";

export const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
`;

export const ButtonSpinner = styled(Spinner)`
  position: absolute;
  top: -3px;
  left: -3px;
  z-index: 1;
`;

export const UploadInput = styled(MuiInput)`
  display: none;
`;
