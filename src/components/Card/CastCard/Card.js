import React from "react";
import {
  CardContainer,
  Name,
  NickName,
  Info,
  Character,
  Actor,
  ActorName,
  ActorIcon,

} from "./Card.styles";
const Card = (props) => {
  return (
    <CardContainer img={props.img}>
      <Info>
        <Character>
          <Name>{props.name}</Name>
          <NickName>{props.nickname}</NickName>
        </Character>
        <Actor>
          <ActorName>
            <ActorIcon />
            {props.portrayed}
          </ActorName>
        </Actor>
      </Info>
    </CardContainer>
  );
};

export default Card;
