import React from 'react';
import styled from 'styled-components';
import Card from '../Card';

const StyledGrid = styled.article`
  box-sizing: border-box;
  grid-template-columns: repeat(auto-fill, minmax(260px, 2fr));
  margin: 25px;
  display:grid;
  grid-gap: 25px 15px;
`
const Grid = ({videos}) => {
  return (
    <StyledGrid>
      {
        videos.map(({ id: { videoId }, snippet: {title, description, url, thumbnails}}) => ( 
          <Card key={videoId} description={description} title={title} url={url} thumbnail={thumbnails.default.url}/>
        ))
      }
    </StyledGrid>
  )
};

export default Grid;
