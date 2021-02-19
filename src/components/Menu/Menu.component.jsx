import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuStyle = styled.menu`
  display: flex;
  background-color: ${({ theme }) => theme.secondBackground};
  flex-direction: column;
  width: 300px;
  padding: 25px 10px;
  @media (max-width: 800px) {
    width: 50px;
  }
`;

const LinkStyled = styled(Link)`
  color: black;
  font-size: 1em;
  padding: 20px 10px 5px 10px ;
  margin-right: 20px;
  border-bottom: 1px solid #ddd;
  &:hover{
    color:#444;
  }
  & span{
    width:20px;
    display: inline-block;
    font-size: 1rem;
    color: #4e4ed6;
    text-align:center;
  }
  @media (max-width: 800px) {
    color: transparent;
    padding: 0;
    margin:0;
    text-align:center;
    padding-top:1em;
    &:hover {
      color:transparent;
  }
    & span {
      width: 50px:
      font-size: 2em;
    }
  }
`;
const Menu = ({ deAuthenticate }) => {
  return (
    <MenuStyle>
      <LinkStyled to="/secret">
        {' '}
        <span> ⌂</span> Home{' '}
      </LinkStyled>
      <LinkStyled to="/favorites">
        {' '}
        <span>★</span> Favorites{' '}
      </LinkStyled>
      <LinkStyled to="/" onClick={deAuthenticate}>
        {' '}
        <span> ⇤</span> Logout{' '}
      </LinkStyled>
    </MenuStyle>
  );
};

export default Menu;
