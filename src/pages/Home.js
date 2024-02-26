import React from 'react';
import '../styles/Home.css';
import Layout from '../components/Layout';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import PopularSong from '../pages/PopularSong';
import PopSong from '../pages/PopSong';
import JpopSong from '../pages/JpopSong';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import InGame from './InGame';
import MyInfo from '../pages/MyInfo';
import PwChange from '../pages/PwChange';
import WithDrawal from '../pages/WithDrawal';
import GameResult from '../pages/GameResult';
import Ranking from '../pages/Ranking';
import UserStatus from '../pages/UserStatus';

const Frame = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: scroll;
  align-items: center;
`;

const imgStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '20px',
}

const TagBox = styled.div`
  width: 40%;
  height: 30%;
  margin: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  a { 
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const LinkStyle = {
  textDecoration: 'none',
  color: 'black',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
};

function Home() {
  const RightMainContent = (
    <>
      <MediaQuery minWidth={768}>
        <h1>Content for desktop</h1>
      </MediaQuery>

      <MediaQuery maxWidth={767}>
       <Frame>
          <TagBox>
            <Link to="PopularSong" style={LinkStyle}>
              <img src="/images/younha.jpg" style={imgStyle}/>
              <h3>대중가요 맞추기</h3>
            </Link>
          </TagBox>

          <TagBox>
              <img src="/images/drama.jpg" style={imgStyle}/>
              <h3>OST 맞추기</h3>`
          </TagBox>

          <TagBox>
              <img src="/images/lemon.jpg" style={imgStyle}/>
              <h3>JPOP 맞추기</h3>
          </TagBox>

          <TagBox>
              <img src="/images/stay.jpg" style={imgStyle}/>
              <h3>POP송 맞추기</h3>
          </TagBox>

          <TagBox>
            <img src="/images/discospaghetti.gif" style={imgStyle}/>
            <h3>업데이트 예정</h3>
          </TagBox>

          <TagBox>
            <img src="/images/discospaghetti.gif" style={imgStyle}/>
            <h3>업데이트 예정</h3>
          </TagBox>
        </Frame>
      </MediaQuery>
    </>
  );

  return (
    <Routes>
      {/* 기본 경로 */}
      <Route path="/" element={<Layout RightMainContent={RightMainContent} />} />
      
      {/* 다른 페이지들 */}
      <Route path="/PopularSong" element={<PopularSong />} />
      <Route path="/PopSong" element={<PopSong />} />
      <Route path="/JpopSong" element={<JpopSong />} />
      <Route path="/Signin" element={<SignIn />} />
      <Route path="/Signup" element={<SignUp />} />
      <Route path="/InGame" element={<InGame />} />
      <Route path="/GameResult" element={<GameResult />} />
      <Route path="/MyInfo" element={<MyInfo />} />
      <Route path="/PwChange" element={<PwChange />} />
      <Route path="/WithDrawal" element={<WithDrawal />} />
      <Route path="/Ranking" element={<Ranking />} />
      <Route path="/UserStatus" element={<UserStatus />} />
    </Routes>
  );
}

export default Home;