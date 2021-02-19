import React from 'react';
import styled from 'styled-components'


const Home = styled.div`
  background-color: ${p => p.theme.mainBackground}; 
  flex-grow: 1;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  padding: 25px 0px;
  height: calc(100vh - 4em);
  overflow: scroll;
  
`

const HomeContent = ({children}) => {
  return (
    <Home>
      {children}
    </Home>
  )
}

export default HomeContent
