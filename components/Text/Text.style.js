import styled from "@emotion/styled";

export const Text = styled.div`
  font-family: "Happiness-Sans-Title", sans-serif;
  font-size: ${({ fontSize }) => fontSize || "1.5rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
  font-style: ${({ fontStyle }) => fontStyle || "normal"};
  line-height: ${({ lineHeight }) => lineHeight || "1.5"};
  color: ${({ color }) => color || "black"};
`;
