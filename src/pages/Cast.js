import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/Button/Button";
import { ContentWrapper } from "../components/Layout/Layout.styles.js";
import { ButtonContainer } from "../components/Button/Button.styles";
import Toggle from "../components/Toggle/Toggle";
import Search from "../components/Search/Search";
import Card from "../components/Card/CastCard/Card";
const Cast = () => {
  const [characters, setCharacters] = useState([]);
  const [leadActor, setLeadActor] = useState("walter");
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetchCast = async () => {
      const response = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setCharacters(response.data);
    };
    fetchCast();
  }, [query]);

  return (
    <>
      <ButtonContainer>
        <Button
          walter
          onClick={() => setLeadActor("walter")}
          text={"Bryan Cranston"}
        />
        <Button
          jesse
          onClick={() => setLeadActor("jesse")}
          text={"Andrea Cantillo"}
        />
      </ButtonContainer>

      {leadActor === "walter" ? (
        <Toggle
          onClick={() => setLeadActor("walter")}
          walter
          name={"Walter White"}
          nickname={"Heisenberg"}
        />
      ) : leadActor === "jesse" ? (
        <Toggle
          onClick={() => setLeadActor("jesse")}
          jesse
          name={"Jesse Pinkman"}
          nickname={"Cap N' Cook"}
        />
      ) : null}

      <Search getQuery={(q) => setQuery(q)} />
      <ContentWrapper>
        {characters.map((character) => (
          <Card
            img={character.img}
            name={character.name}
            nickname={character.nickname}
            portrayed={character.portrayed}
            appearance={character.appearance}
          />
        ))}
      </ContentWrapper>
    </>
  );
};
export default Cast;
