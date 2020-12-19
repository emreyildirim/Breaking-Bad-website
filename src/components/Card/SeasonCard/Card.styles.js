import styled from "styled-components";
import Image from "../../../assets/season.jpg";
import {Clock}from "@styled-icons/evil/Clock"
export const Wrapper = styled.div`
  width: 30%;
  height: 100px;
  margin-bottom:10px;
  position: relative;
  color:#FFF;
  font-family: "Staatliches", sans-serif;
  cursor:pointer;
 
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  left: 0%;
  @media only screen and (max-width: 600px) {
    flex-direction:column;
    font-size:14px;
    justify-content:center;
  }
`;
export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${Image});
  background-size: 100%;
  background-position: center;
  filter: blur(3px);
`;
export const Episode = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width:25%;
  @media only screen and (max-width: 600px) {
    width:100%;
    height:20%;
  }

`;
export const Title = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width:50%;
  font-size:26px;
  @media only screen and (max-width: 600px) {
    font-size:16px;
  }
`;
export const Icon = styled(Clock)`
width:30px;
@media only screen and (max-width: 600px) {
    width:12px;
  }
`;
export const Date = styled.div`
display:flex;
align-items:center;
width:25%;
@media only screen and (max-width: 600px) {
    width:50%;
    font-size:10px;
  }

`;