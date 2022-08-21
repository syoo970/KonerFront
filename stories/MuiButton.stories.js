import MuiButton from "../mui_components/MuiButton";
import styled from "@emotion/styled";

export default {
  title: "mui/MuiButton",
  component: MuiButton,
};

export const Default = () => <MuiButton>some text</MuiButton>;

const StyledButton = styled(MuiButton)`
  &:hover {
    background-color: #ffc107;
  }
`;

export const Styled = () => <StyledButton>some text</StyledButton>;
