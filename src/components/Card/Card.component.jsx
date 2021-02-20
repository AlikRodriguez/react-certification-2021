import React from 'react';
import { StyledLinkCard, StyledCard, ImgCard } from './Card.styled';

const Card = ({ title, url, description, thumbnail }) => (
  <StyledLinkCard to={`/card/${url}`}>
    <StyledCard>
      <ImgCard alt={description} src={thumbnail} />
      <div>
        <span> {title} </span>
        <p>{description}</p>
      </div>
    </StyledCard>
  </StyledLinkCard>
);

export default Card;
