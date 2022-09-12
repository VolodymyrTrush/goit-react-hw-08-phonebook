import styled from "styled-components";

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  margin: 0 0 10px 0;
  padding: 8px;
  font-size: 14px;
  background-color: ${p => p.theme.colors.white};
  outline: none;
  border: 2px solid;
  border-radius: 5px;
`;