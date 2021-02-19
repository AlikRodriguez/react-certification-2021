import React from 'react';
import { Input, SearchButton } from './SearchBar.styled';

const SearchBar = () => {
  return (
    <form>
      <SearchButton>🔍</SearchButton>
      <Input type="text" placeholder="search video" />
    </form>
  );
};

export default SearchBar;
