import React, { useState } from "react";
import { SearchIcon, SearchInput, Wrapper } from "./Search.styles";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    getQuery(q);
    setText(q);
  };
  return (
    <Wrapper>
      <SearchIcon />
      <SearchInput
        type="text"
        placeholder="Search Characters..."
        value={text}
        onChange={(e) => onChange(e.target.value)}
      />
    </Wrapper>
  );
};

export default Search;
