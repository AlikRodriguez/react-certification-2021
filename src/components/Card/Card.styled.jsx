import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: inline-block;
  width: 250px;
  height: 300px;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(127, 127, 127, 0.4);
  background-color: white;
  & div {
    padding: 0 5px;
  }
  & span {
    color: #555;
    font-size: 0.8rem;
    display: block;
    text-align: center;
    width: 100%;
  }
  & p {
    font-size: 0.7em;
    font-weight: normal;
    color: #999;
    text-overflow: ellipsis;
    max-height: 2em;
  }
`;
const ImgCard = styled.img`
  width: 100%;
`;

const StyledLinkCard = styled(Link)`
  justify-self: center;
`;
export { StyledLinkCard, StyledCard, ImgCard };
