import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'


const StyledCard = styled.div`
  display: inline-block;
  width: 250px;
  height: 300px;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(127,127, 127, 0.4);
  background-color: white;
  & div {
    padding: 0 5px;
  }
  & span {
    color: #555;
    font-size: .8rem;
    display:block;
    text-align: center;
    width:100%;
  }
  & p{
    font-size: .7em;
    font-weight:normal;
    color:#999;
    text-overflow: ellipsis;
    max-height: 2em;
  }
`
const ImgCard = styled.img`
  width:100%;
`

const StyledLinkCard = styled(Link)`

  justify-self: center;
`
const Card = ({title, url, description,thumbnail}) => (
  <StyledLinkCard to={ `/card/${url}` }>
    <StyledCard>
      <ImgCard alt={description} src={ thumbnail } />
      <div>
        <span> { title } </span>
        <p>{ description }</p>
      </div>
    </StyledCard>
  </StyledLinkCard>
)

export default Card
