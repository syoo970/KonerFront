import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Button = styled.button`
  ${({ btnColor }) => {
    switch (btnColor) {
      case "primary":
        return css`
          background-color: #00bcd4;
        `;
      case "secondary":
        return css`
          background-color: #ff9800;
        `;
      case "tertiary":
        return css`
          background-color: #ff5722;
        `;
      case "koner":
        return css`
          background-color: #f9ca24;
          transition: all 0.3s linear;
          &:hover {
            background-color: #3742fa;
            transition: all 0.3s linear;
          }
        `;
      case "koner2":
        return css`
          background-color: #3742fa;
          transition: all 0.3s linear;
          &:hover {
            background-color: #f9ca24;
            transition: all 0.3s linear;
          }
        `;
      default:
        return css`
          background-color: btnColor;
        `;
    }
  }}
  border-radius: 0.5rem;
  border: 0;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;
