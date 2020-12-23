import React, { useState, useEffect } from "react";
import Card from "../components/Card/SeasonCard/Card";
import {
  HeaderDescription,
  HeaderText,
  HeaderWarning,
  HeaderWrapper,
  Content,
} from "../components/Header/Header.styles";
import Video from "../components/Video/Video";
import getSeason from "../helper/getSeason";

const Season4 = () => {
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    const fetchSeason = async () => {
      const fourthSeason = await getSeason("4");
      setEpisodes(fourthSeason);
    };
    fetchSeason();
  }, []);

  return (
    <>
      <Video />
      <HeaderWrapper>
        <HeaderText>Season 4</HeaderText>
        <HeaderDescription>
          A high school chemistry teacher diagnosed with inoperable lung cancer
          turns to manufacturing and selling methamphetamine in order to secure
          his family's future.
        </HeaderDescription>
        <HeaderWarning>+18</HeaderWarning>
      </HeaderWrapper>
      <Content>
        {episodes.map((Episode) => (
          <Card
            key={Episode.episode_id}
            season={Episode.season}
            episode={Episode.episode}
            title={Episode.title}
            date={Episode.air_date}
            characters={Episode.characters.map((character) => character)}
          />
        ))}
      </Content>
    </>
  );
};

export default Season4;
