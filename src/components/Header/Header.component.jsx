import React from 'react';
import styled from 'styled-components';

const HeaderBar = styled.nav`
  display: flex;
  align-items: center;
  height: 3em;
  background-color: #fff;
  justify-content: space-between;
  & div {
    display: flex;
    flex-direction: row-reverse;
  }
  & .burger {
    width: 300px;
    padding: 0 15px;
    font-size: 1.2em;
  }
  & .options-header {
    margin-right: 25px;
    flex-grow: 1;
    display: flex;
  }
  @media (max-width: 800px) {
    & .burger {
      width: 50px;
    }
  }
`;

const Header = ({ children }) => {
  return (
    <HeaderBar>
      <div className="burger"> ☰ </div>
      <div className="options-header">{children}</div>
    </HeaderBar>
  );
};

export default Header;
