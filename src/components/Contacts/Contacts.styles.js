import styled from "styled-components";
import { Linkedin } from "@styled-icons/fa-brands/Linkedin";
import { Github } from "@styled-icons/evaicons-solid/Github";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
`;
export const Info = styled.a`
  width: 10vw;
  height: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  background-color: #0a5930;
  @media only screen and (max-width: 600px) {
    width: 30vw;
    height: 30vw;
  }
`;
export const Account = styled.div`
  font-size: 22px;
  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`;
export const LinkedinIcon = styled(Linkedin)`
  width: 80px;
`;
export const GithubIcon = styled(Github)`
  width: 80px;
`;
