import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5em 1.5em;
  margin: 9px 20px;
  height: 2.8em;
  min-width: 40em;
  border: none;
  background-color: rgba(127, 127, 127, 0.05);
  border-bottom: 1px solid #bbb;
  border-radius: 3px;
  @media (max-width: 1050px) {
    min-width: calc(100vw - 475px - 3em);
  }
  @media (max-width: 800px) {
    width: 0;
    padding: 0;
    margin: 0;
    display: none;
  }
`;

const SearchButton = styled.button`
  background-color: white;
  border: none;
  display: none;
  @media (max-width: 800px) {
    display: inline-block;
    margin: 10px 15px;
    font-size: 1.2em;
  }
`;
export { Input, SearchButton };
