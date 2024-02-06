import React from 'react';
import '../styles/Home.module.css';
import Layout from '../components/Layout';
import { Routes, Route,useLocation} from 'react-router-dom';
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

const location = useLocation();

function Home() {
  const RightMainContent = (
    <img
      src="/images/discospaghetti.gif"
      alt="Let's DISCO"
      style={{ width: '50%', height: 'auto' }}
    />
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
