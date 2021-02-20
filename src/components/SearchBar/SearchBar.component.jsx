import React from 'react';
import { Input, SearchButton } from './SearchBar.styled';

const SearchBar = () => {
  return (
    <form>
      <SearchButton>
        <span role="img" aria-label="search">
          🔍
        </span>
      </SearchButton>
      <Input type="text" placeholder="search video" />
    </form>
  );
};

export default SearchBar;
