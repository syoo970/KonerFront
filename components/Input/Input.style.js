import styled from "@emotion/styled";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InputWrapper = styled.div``;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  padding: 0;
  margin: 0;
  &:focus {
    outline: none;
  }
`;
