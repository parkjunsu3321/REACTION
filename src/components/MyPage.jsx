import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import basicImage from './basic.png';

import MyInfo from './MyInfo';
import PwChange from './PwChange';
import Withdrawal from './Withdrawal';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: antiquewhite;
`;

const TitleText = styled.div`
  position: absolute;
  top: 7%;
  left: 10%;
  transform: translateX(-50%);
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

const LeftBox = styled.div`
  position: absolute;
  top: 50%;
  left: 15%;
  height: 70%;
  width: 15%;
  font-size: 20px;
  transform: translate(-50%, -50%);
  background: linear-gradient(to bottom, lightsalmon 20%, white 20%);
  border-radius: 10px;
  max-width: 800px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const LeftImage = styled.div`
  position: absolute;
  top: -18%;
  width: 47%;
  left: -20%;
  height: 25%;
  background-image: url(${basicImage});
  background-size: cover;
  background-position: 52% 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  transform: translate(100%, 100%) scaleX(0.7) scaleY(0.7);
`;

const LeftName = styled.div`
  position: absolute;
  top: 30%;
  left: 34%;
  font-size: 20px;
  font-weight: bold;
  color: black;
`;

const StyledLink = styled(Link)`
  position: relative;
  color: #333;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  top: 12px; /* 링크 간격 조절 */
  display: block; /* 텍스트 아래에 줄이 생기지 않도록 block 요소로 설정 */
  margin-bottom: 10px; /* 링크들 간의 간격을 벌립니다. */

  &:hover {
    color: #289951;
  }
`;

const MyInfoLink = styled(StyledLink)`
  top: 270px;
  left: 12%;
`;

const PwChangeLink = styled(StyledLink)`
  top: 310px;
  left: 12%;
`;

const WithdrawalLink = styled(StyledLink)`
  top: 350px;
  left: 12%;
`;

const RightBox = styled.div`
  position: absolute;
  top: 50%;
  left: 58%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 70%;
  max-width: 1200px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.9);
`;

export const MyPage = () => {
  return (
    <Container>
      <TitleText>마이페이지</TitleText>

      <LeftBox>
        <LeftImage />
        <LeftName>사용자 이름</LeftName>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <MyInfoLink to='/mypage/내정보'>
              내 정보
            </MyInfoLink>
          </li>
          <li>
            <PwChangeLink to='/mypage/비밀번호변경'>
              비밀번호 변경
            </PwChangeLink>
          </li>
          <li>
            <WithdrawalLink to='/mypage/회원탈퇴'>
              회원 탈퇴
            </WithdrawalLink>
          </li>
        </ul>
      </LeftBox>

      <RightBox>
        <Routes>
          <Route path="/" element={<MyInfo />} />
          <Route path="내정보" element={<MyInfo />} />
          <Route path="비밀번호변경" element={<PwChange />} />
          <Route path="회원탈퇴" element={<Withdrawal />} />
        </Routes>
      </RightBox>
    </Container>
  );
};

export default MyPage;
