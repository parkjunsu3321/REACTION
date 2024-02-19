import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import MediaQuery from "react-responsive";
import { FaLock } from "react-icons/fa";
import { BiSolidWidget } from "react-icons/bi";
import { ImMenu } from "react-icons/im";
import { FaRankingStar } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";

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
  background-image: url('/images/basic.png');
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

//여기서부터 모바일 환경 컴포넌트
const MobileContainer = styled.div`
    width: 100vw;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    background-color: white;
`

const MobileHeader = styled.div`
    height: 10%; 
    width: 100%;
    background-color: lightsalmon;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const MobileHeaderL = styled.div`
    width: 50%;
    height: auto;
    margin-left: 5%;
`

const MobileHeaderR = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-right: 3%;
`

const MobileMain = styled.div`
    width: 100%;
    height: 80%;
    background-color: white;
    display: flex;
`

const MobileFooter = styled.div`
    height: 10%;
    width: 100%;
    background-color: lightsalmon;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const MobileSignBtn = styled.button`
    width: auto;
    height: 30px;
    background-color: orange;
    border: 1px solid black;
    border-radius: 5px;
    color: black;
    font-weight: bolder;
    cursor: pointer;
    margin-left: 5%;
`

const LinkStyle2 = {
  textDecoration: 'none',
  color: 'black',
};

const LinkStyle = {
  textDecoration: 'none',
  color: 'black',
};

const IconStyle = {
  width: '30px',
  height: '30px',
};

export const MyPage = () => {
  return (
      <>
      <MediaQuery minWidth={767}>
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
      </MediaQuery>
      <MediaQuery maxWidth={767}>
        <MobileContainer>
          <MobileHeader>
            <MobileHeaderL>
              <Link to="/" style={LinkStyle}>
                <h1 style={{ fontFamily: "Itim-Regular" }}>Reaction</h1>
              </Link>
            </MobileHeaderL>
            <MobileHeaderR>
              <MobileSignBtn>
                <Link to="/SignIn" style={LinkStyle2}>
                  <FaLock style={{ width: '10px', height: '10px' }} />SignIn
                </Link>
              </MobileSignBtn>
            </MobileHeaderR>
          </MobileHeader>
          <MobileMain>
          <Routes>
            <Route path="/" element={<MyInfo />} />
            <Route path="내정보" element={<MyInfo />} />
            <Route path="비밀번호변경" element={<PwChange />} />
            <Route path="회원탈퇴" element={<Withdrawal />} />
          </Routes>
          </MobileMain>
          <MobileFooter>
          <Link to="/MyPage" style={LinkStyle}> <FaUserLarge style={IconStyle} /></Link>
          <BiSolidWidget style={IconStyle} />
          <FaRankingStar style={IconStyle} />
          <ImMenu style={IconStyle} />
          </MobileFooter>
        </MobileContainer>
      </MediaQuery>
    </>
  );
};

export default MyPage;
