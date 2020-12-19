import React from "react";
import { Wrapper, Episode, Background, Title, Content,Icon,Date } from "./Card.styles";
const Card = (props) => {
  console.log(props.characters);
  return (
    // <div id={props.key}>
    //     {props.title} x {props.date} x {props.characters.map((i)=>(<div>{i}</div>))}
    // </div>

    <Wrapper>
      <Background />
      <Content>
        <Episode>
          <h3>
            S{props.season}EP{props.episode}
          </h3>
        </Episode>
        <Title>{props.title}</Title>
        <Date><Icon/>{props.date}</Date>
      </Content>
    </Wrapper>
  );
};

export default Card;
