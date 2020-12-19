import styled from "styled-components";
import { Portrait } from "@styled-icons/fa-solid/Portrait";

export const Actor = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0px 0px 10px 10px;
  position: absolute;
  background-color: #000;
  z-index: 0;

`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 300px;
  height: 400px;
  margin: 15px;
  border: 3px solid #053105;
  border-radius: 10px;
  background-image: url(${(props) => props.img});
  background-size: 100%;
  background-repeat: no-repeat;
  font-family: "Staatliches", sans-serif;
  cursor: pointer;
  color: #fff;
  &:hover ${Actor} {
    z-index: 2;
  }
`;
export const CardContent = styled.div`
  width: 100%;
  height: 20%;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 20%;
  align-items: center;
`;
export const Character = styled.div`
  background-color: #000;
  border-radius: 0px 0px 10px 10px;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Name = styled.div`
  font-size: 22px;
`;
export const NickName = styled.div`
  font-size: 16px;
`;

export const ActorIcon = styled(Portrait)`
  width: 20px;
  color: #fff;
  margin-right: 5px;
`;
export const ActorName = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
`;
