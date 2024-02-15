import React from 'react';
import '../styles/Home.module.css';
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
import VideoPlayer from './VideoPlayer';
import MyPage from '../components/MyPage';
import MyInfo from '../components/MyInfo';
import PwChange from '../components/PwChange';
import Withdrawal from '../components/Withdrawal';

const Frame = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: scroll;
  align-items: center;
`

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
`

const LinkStyle = {
  textDecoration: 'none',
  color: 'black',
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
            <Link to="PopularSong" style={LinkStyle}>
              <img src="/images/drama.jpg" style={imgStyle}/>
              <h3>OST 맞추기</h3>`
            </Link>
          </TagBox>
          <TagBox>
            <Link to="PopularSong" style={LinkStyle}>
              <img src="/images/lemon.jpg" style={imgStyle}/>
              <h3>JPOP 맞추기</h3>
            </Link>
          </TagBox>
          <TagBox>
            <Link to="PopularSong" style={LinkStyle}>
              <img src="/images/stay.jpg" style={imgStyle}/>
              <h3>POP송 맞추기</h3>
            </Link>
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
      <Route path="/VideoPlayer" element={<VideoPlayer />} />

      {/* 마이페이지와 하위 페이지들 */}
      <Route path="/mypage" element={<MyPage />}>
        <Route index element={<MyInfo />} /> {/* /mypage에 들어갔을 때 기본적으로 보여지는 페이지 */}
        <Route path="내정보" element={<MyInfo />} />
        <Route path="비밀번호변경" element={<PwChange />} />
        <Route path="회원탈퇴" element={<Withdrawal />} />
      </Route>
    </Routes>
  );
}

export default Home;
