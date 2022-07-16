import styled from "@emotion/styled";

export const LoginForm = styled.form`
  width: 50vw;
  max-width: 600px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 1rem 2rem;
  margin: 10rem auto;
`;

export const Spacer = styled.div`
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};
  margin-top: ${({ marginTop }) => marginTop || 0};
  margin-left: ${({ marginLeft }) => marginLeft || 0};
  margin-right: ${({ marginRight }) => marginRight || 0};
`;

export const LoginInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
