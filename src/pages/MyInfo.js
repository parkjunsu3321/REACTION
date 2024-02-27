import Layout from '../components/Layout';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MediaQuery from "react-responsive";
import { Link } from 'react-router-dom';

import { IoIosArrowForward } from "react-icons/io";

const InfoTitle = styled.div`
  margin-top: 20px;
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-left: 15px;
`;

const InfoLine1 = styled.hr`
  border: 1px solid lightgray;
`;

const InfoVertical1 = styled.div`
  position: relative;
  border-left: 2px solid #d9d9d9;
  height: 49px;
  top: 6%;
`;

const InfoText = styled.div`
  position: relative;
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-left: 50px;
  top: 20%;
`;

const InfoLine2 = styled.hr`
  position: relative;
  border: 2px solid #ff5000;
  margin-top: -30px;
  margin-left: 0px;
  width: 15%;
`;

const InfoVertical2 = styled.div`
  position: relative;
  border-left: 2px solid #d9d9d9;
  height: 49px;
  top: -2%;
  left: 182px;
`;

const InfoLine3 = styled.hr`
  position: relative;
  border: 1px solid #d9d9d9;
  margin-top: -8px;
  margin-left: 182px;
  width: 85%;
`;

const InfoText2 = styled.div`
  position: relative;
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-left: 20px;
  top: 10%;
`;

const NameText = styled.div`
  position: relative;
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin-left: 40px;
  top: 25%;
`;

const NameLine = styled.hr`
  position: relative;
  border: 1px solid black;
  top: 100px;
  width: 30%;
  left: -380px;
`;

const LoginName = styled.div`
  position: relative;
  font-size: 24px;
  font-weight: 700;
  color: #ff5000;
  margin-left: 40px;
  top: 25%;
`;

const IdText = styled.div`
  position: relative;
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin-left: 40px;
  top: 37%;
`;

const IdLine = styled.hr`
  position: relative;
  border: 1px solid black;
  top: 150px;
  width: 30%;
  left: -380px;
`;

const LoginId = styled.div`
  position: relative;
  font-size: 24px;
  font-weight: 700;
  color: #ff5000;
  margin-left: 40px;
  top: 39%;
`;

const NopText = styled.div`
  position: relative;
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin-left: 40px;
  top: 50%;
`;

const NopLine = styled.hr`
  position: relative;
  border: 1px solid black;
  top: 200px;
  width: 30%;
  left: -380px;
`;

const LoginNop = styled.div`
  position: relative;
  font-size: 24px;
  font-weight: 700;
  color: #ff5000;
  margin-left: 40px;
  top: 51%;
`;

//여기서부터 모바일 환경 컴포넌트
const MobileFrame = styled.div`
  width: 100vw;
  height: 80dvh;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const MobileHeader = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: antiquewhite;
`;

const MobileHeaderA = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileInfoTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #333;
`;

const MobileHeaderB = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileImage = styled.div`
  position: absolute;
  width: 47%;
  left: -20%;
  height: 25%;
  background-image: url('/images/basic.jpg');
  background-size: cover;
  background-position: 50% 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  transform: translate(100%,-5%) scaleX(0.7) scaleY(0.7);
`;

const MobileMain = styled.div`
  width: 100%;
  height:65%;
  background-color: white;
`;

const MobileMainA = styled.div`
  width: 100%;
  height:15%;
  display: flex;
  align-items: center;
`;

const MobileNameText = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  color: #ff813a;
  margin-left: 20px
`;

const MobileLoginName = styled.div`
  display: flex;
  align-items: center;
  width: 65%;
  height: 100%;
  font-size: 16px;
  color: #ababab;
  margin-left: 20px;
  font-weight: 700;
`;

const MobileMainB = styled.div`
  width: 100%;
  height:15%;
  display: flex;
  align-items: center;
`;

const MobileIdText = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  color: #ff813a;
  margin-left: 20px
`;

const MobileLoginId = styled.div`
  display: flex;
  align-items: center;
  width: 65%;
  height: 100%;
  font-size: 16px;
  color: #ababab;
  margin-left: 20px;
  font-weight: 700;
`;

const MobileMainC = styled.div`
  width: 100%;
  height:15%;
  display: flex;
  align-items: center;
`;

const MobileNopText = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  color: #ff813a;
  margin-left: 20px
`;

const MobileLoginNop = styled.div`
  display: flex;
  align-items: center;
  width: 65%;
  height: 100%;
  font-size: 16px;
  color: #ababab;
  margin-left: 20px;
  font-weight: 700;
`;

const MobileMainD = styled.div`
  width: 100%;
  height:20%;
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const MobileMainDa = styled.div`
  width: 100%;
  height:20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

const MobilePwChangeBtn = styled.button`
  width: 340px;
  height: 50px;
  border: none;
  font-weight: bold;
  background-color: white;
  border-radius: 15px;
  color: orange;
  font-size: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);

  border-width: 1px;
  border-style: solid;
  border-color: lightgray;
`;

const MobileMainE = styled.div`
  width: 100%;
  height:20%;
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const MobileMainEa = styled.div`
  width: 100%;
  height:20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

const MobileRemoveBtn = styled.button`
  width: 340px;
  height: 50px;
  border: none;
  font-weight: bold;
  background-color: white;
  border-radius: 15px;
  color: red;
  font-size: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);

  border-width: 1px;
  border-style: solid;
  border-color: lightgray;
`;

const LinkStyle1 = {
  textDecoration: 'none',
};

const MyInfo = () => {
  const [userInfo, setUserInfo] = useState(null); // 유저 정보를 담을 상태

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.post(process.env.REACT_APP_FAST_API_KEY+'/api/users/getInfo', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserInfo(response.data.data);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchData(); // Call the async function
  }, []); 

  return (
    <Layout RightMainContent={<MyInfoContent userInfo={userInfo} />} />
  );
};

const MyInfoContent = ({ userInfo }) => (
  <>
    <MediaQuery minWidth={767}>
      {userInfo && (
        <>
          <InfoTitle>내 정보</InfoTitle>

          <InfoLine1 />
          <InfoVertical1>
            <InfoText>회원 정보</InfoText>
          </InfoVertical1>
          <InfoLine2 />
          <InfoVertical2 />
          <InfoLine3 />
          <InfoText2>기본정보(필수)</InfoText2>

          <NameText>사용자명</NameText>
          <NameLine />
          <LoginName>{userInfo.name}</LoginName>

          <IdText>아이디</IdText>
          <IdLine />
          <LoginId>{userInfo.id}</LoginId>

          <NopText>게임 참가 횟수</NopText>
          <NopLine />
          <LoginNop>{userInfo.game_count}</LoginNop>
        </>
      )}
    </MediaQuery>

    {/*여기부터 모바일 환경*/}
    <MediaQuery maxWidth={767}>
      {userInfo && (
        <MobileFrame>
          <MobileHeader>
            <MobileHeaderA>
              <MobileInfoTitle>내 정보</MobileInfoTitle>
            </MobileHeaderA>

            <MobileHeaderB>
              <MobileImage />
            </MobileHeaderB>
          </MobileHeader>

          <MobileMain>
            <MobileMainA>
              <MobileNameText>사용자명</MobileNameText>
              <MobileLoginName>{userInfo.name}</MobileLoginName>
            </MobileMainA>

            <MobileMainB>
              <MobileIdText>아이디</MobileIdText>
              <MobileLoginId>{userInfo.id}</MobileLoginId>
            </MobileMainB>

            <MobileMainC>
              <MobileNopText>1순위</MobileNopText>
              <MobileLoginNop>{userInfo.flavor_genre_first}</MobileLoginNop>
            </MobileMainC>

            <MobileMainC>
              <MobileNopText>2순위</MobileNopText>
              <MobileLoginNop>{userInfo.flavor_genre_second}</MobileLoginNop>
            </MobileMainC>

            <MobileMainC>
              <MobileNopText>3순위</MobileNopText>
              <MobileLoginNop>{userInfo.flavor_genre_third}</MobileLoginNop>
            </MobileMainC>

            <MobileMainD>
              <MobileMainDa>
                <Link to="/PwChange" style={LinkStyle1}>
                  <MobilePwChangeBtn>비밀번호 변경</MobilePwChangeBtn>
                </Link>
              </MobileMainDa>
            </MobileMainD>

            <MobileMainE>
              <MobileMainEa>
                <Link to="/WithDrawal" style={LinkStyle1}>
                  <MobileRemoveBtn>회원탈퇴</MobileRemoveBtn>
                </Link>
              </MobileMainEa>
            </MobileMainE>
          </MobileMain>
        </MobileFrame>
      )}
    </MediaQuery>
  </>
);

export default MyInfo;
