import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50%;
  justify-content: center;
  margin: auto;
  font-family: "Staatliches", sans-serif;
  letter-spacing:1px;
  @media only screen and (max-width: 600px){
    width: 80%;
    }
`;

export const Text = styled.h2`
  color: white;
  align-self: center;
`;

export const Author = styled.cite`
  color: #0a5930;
  align-self: flex-end;
  margin-right: 150px;
  @media only screen and (max-width: 600px){
      margin-right:5px;
    }
`;
