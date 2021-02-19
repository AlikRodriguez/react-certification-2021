import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Grid from '../../components/Grid/Grid.component';
import Header from '../../components/Header';
import HomeContent from '../../components/HomeContent/HomeContent.component';
import Menu from '../../components/Menu';
import videosMock from '../../providers/videos.mock.json';
import { useAuth } from '../../providers/Auth';
import Toggle from '../../components/Toggle';
import SearchBar from '../../components/SearchBar/SearchBar.component';
import ProfileMenu from '../../components/ProfileMenu/ProfileMenu.component';

const Main = styled.main`
  display: flex;
  flex-grow: 1;
`;

const Home = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const videos = videosMock.items;

function HomePage() {
  const history = useHistory();
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  if (!authenticated) {
    history.push('/')
  }
  return (
    <Home>
      {authenticated ? (
        <>
          <Header>
            <Toggle />
            <SearchBar />
            <ProfileMenu />
          </Header>
          <Main>
            <Menu deAuthenticate={deAuthenticate} />
            <HomeContent>
              <Grid videos={videos.filter((video) => video.id.videoId)} />
            </HomeContent>
          </Main>
        </>
      ) : (
        <Redirect to="/login">let me in →</Redirect> 
      )}
    </Home>
  );
}

export default HomePage;
