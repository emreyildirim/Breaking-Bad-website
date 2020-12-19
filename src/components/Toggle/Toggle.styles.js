import styled, { css, keyframes } from "styled-components";
import Walter from "../../assets/walter.png";
import Jesse from "../../assets/jesse.png";

export const Wrapper = styled.div`
  width: 100vw;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  font-family: "Staatliches", sans-serif;
  background-repeat:no-repeat;
  ${(props) =>
    props.walter &&
    css`
      background-image: url(${Walter});
      animation: ${walterAnimation} 0.8s;
    `};
  ${(props) =>
    props.jesse &&
    css`
      background-image: url(${Jesse});
      animation: ${jesseAnimation} 0.8s;
    `};
`;
const walterAnimation = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0%);
  }
`;
const jesseAnimation = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`;
export const ToogleContent = styled.div`
  height:850px;
`; 
export const Content = styled.div`
  width: 35%;
  height: 35%;
  letter-spacing: -1px;
  color:#FFFFFF;
  ${(props) =>
    props.walter &&
    css`
      align-self: flex-end;
      margin-right: 5%;

    `};
  ${(props) =>
    props.jesse &&
    css`
      justify-self: flex-start;
      margin-left: 5%;
    `};
`;
export const Name = styled.h1`
  font-size: 80px;
  @media only screen and (max-width: 600px) {
        font-size:60px;
  }
`;
export const NickName = styled.h3`
  font-size: 50px;
  @media only screen and (max-width: 600px) {
        font-size:40px;
  }
`;
