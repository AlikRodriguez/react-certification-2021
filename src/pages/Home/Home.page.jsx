import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import Grid from '../../components/Grid/Grid.component';
import Header from '../../components/Header';
import HomeContent from '../../components/HomeContent/HomeContent.component';
import Menu from '../../components/Menu';
import { useAuth } from '../../providers/Auth';
import Toggle from '../../components/Toggle';
import SearchBar from '../../components/SearchBar/SearchBar.component';
import ProfileMenu from '../../components/ProfileMenu/ProfileMenu.component';
import { Main, Home } from './Home.page.styled';
import { getVideos } from '../../providers/Videos';

function HomePage() {
  const history = useHistory();
  const { authenticated, logout } = useAuth();
  const [videos, setVideos] = useState([]);

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  useEffect(() => {
    getVideos().then((videosFetched) => {
      if (authenticated) setVideos(videosFetched.filter((video) => video.id.videoId));
    });
  }, [authenticated]);

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
              <Grid videos={videos} />
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
