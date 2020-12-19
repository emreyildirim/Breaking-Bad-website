import styled from "styled-components";
import { Search } from "@styled-icons/zondicons/Search";

export const Wrapper = styled.div`
  width: 10%;
  height: 40px;
  display: flex;
  margin: 25px auto;
  background-color: #232323;
  color: #FFF;
  border-radius:5px;
  @media only screen and (max-width: 600px) {
    width:100%;
  }
`;
export const SearchInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: #FFF;
  padding-left: 10px;
`;
export const SearchIcon = styled(Search)`
  background-color: transparent;
  width: 20px;
  margin-left: 15px;
`;
