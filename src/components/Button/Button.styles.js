import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  outline: none;
  border-color: transparent;
  font-family: "Manrope", sans-serif;
  ${(props) =>
    props.landing &&
    css`
      width: 350px;
      height: 65px;
      background-color: #d6c829;
      color: #ffffff;
      border-radius: 10px;
      font-size: 24px;
    `};
  ${(props) =>
    props.walter &&
    css`
      background-color: transparent;
      border-bottom: 2px solid #ffffff;
      color: #ffffff;
      font-size: 28px;
    `};
  ${(props) =>
    props.jesse &&
    css`
      background-color: transparent;
      border-bottom: 2px solid #d6c829;
      color: #d6c829;
      font-size: 28px;
    `};
`;
export const ButtonContainer = styled.div`
  position: absolute;
  left: 35%;
  top: 12%;
  z-index:1;
`;
