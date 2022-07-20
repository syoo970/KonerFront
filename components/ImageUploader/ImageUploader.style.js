import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Wrapper = styled.div`
  display: flex;
  ${({ position }) => {
    switch (position) {
      case "left":
        return css`
          justify-content: flex-start;
        `;
      case "right":
        return css`
          justify-content: flex-end;
        `;
      case "center":
        return css`
          justify-content: center;
        `;
      default:
        return css`
          justify-content: center;
        `;
    }
  }}
  align-items: center;
  border: ${({ border }) => border || `1px dashed #ccc`};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  padding: 2%;
  position: relative;
`;

export const UploadButtonWrapper = styled.div`
  position: relative;
`;

export const PreviewImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
