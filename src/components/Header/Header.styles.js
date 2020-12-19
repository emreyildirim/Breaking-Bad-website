import styled from "styled-components"

export const HeaderWrapper = styled.div`
width:85%;
height:100px;
display:flex;
align-items:center;
justify-content:space-between;
margin:auto;
font-family: "Staatliches", sans-serif;
letter-spacing:2px;
@media only screen and (max-width: 600px) {
    font-size:8px;
  }
`;

export const HeaderText = styled.h1`
color:#FFF;
`
export const HeaderDescription = styled.h4`
color:#FFF;
text-align:center;
`;
export const HeaderWarning = styled.h2`
color:#FFF;
`;
export const Content = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-around;
`;