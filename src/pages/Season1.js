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

const Season1 = () => {
  const [season, setSeason] = useState([]);
  useEffect(() => {
    const fetchSeason = async () => {
      const firstSeason = await getSeason("1");
      setSeason(firstSeason);
    };
    fetchSeason();
  }, []);

  return (
    <>
      <Video />
      <HeaderWrapper>
        <HeaderText>Season 1</HeaderText>
        <HeaderDescription>
          A high school chemistry teacher diagnosed with inoperable lung cancer
          turns to manufacturing and selling methamphetamine in order to secure
          his family's future.
        </HeaderDescription>
        <HeaderWarning>+18</HeaderWarning>
      </HeaderWrapper>
      <Content>
        {season.map((Season) => (
          <Card
            key={Season.episode_id}
            season={Season.season}
            episode={Season.episode}
            title={Season.title}
            date={Season.air_date}
            characters={Season.characters.map((character) => character)}
          />
        ))}
      </Content>
    </>
  );
};

export default Season1;
