import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ isMainNav }) => {
    switch (isMainNav) {
      case true:
        return css`
          height: 10vh;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
            rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
          background-color: white;
          padding: 0 1rem;
        `;
      case false:
        return css`
          height: 5vh;
        `;
    }
  }}
`;

export const NavItemWrapper = styled.div`
  display: flex;
  gap: ${({ gap }) => gap || "0.5rem"};
`;

export const NavItem = styled.div`
  ${({ isActive }) => {
    switch (isActive) {
      case true:
        return css`
          a {
            div {
              color: #ffc107 !important;
            }
          }
          border-bottom: 1px solid #ffc107;
          transition: all 0.3s linear;
        `;
      case false:
        return css`
          a {
            color: black;
          }
          transition: all 0.3s linear;
        `;
    }
  }}
  a {
    text-decoration: none;
  }
  &:hover {
    a {
      div {
        color: #ffc107;
      }
    }
  }
`;
