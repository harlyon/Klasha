import React from "react";
import { Lens } from "Components/Atoms/SvgIcons";
import { Wrapper } from "./style";

interface SearchInputProps {}

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <Wrapper>
      <input type="text" placeholder="Search" />
      <Lens />
    </Wrapper>
  );
};

export default SearchInput;
