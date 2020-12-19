import React from "react";
import { Wrapper, Content, Name, NickName,ToogleContent } from "./Toggle.styles";
const Toggle = (props) => {
  return (
    <ToogleContent>
    <Wrapper {...props}>
      <Content {...props}>
        <Name>{props.name}</Name>
        <NickName>{props.nickname}</NickName>
      </Content>
    </Wrapper>
   </ToogleContent>
  );
};

export default Toggle;
