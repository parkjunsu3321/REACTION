import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import MediaQuery from "react-responsive";
import { Link } from 'react-router-dom';

const InfoTitle = styled.div` /*내정보 타이틀 텍스트*/
  margin-top: 20px;
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-left: 15px;
`;

const InfoLine1 = styled.hr` /*가로 라인*/
  border: 1px solid lightgray;
`;

const InfoVertical1 = styled.div` /*박스 첫 번째 세로 라인*/
  position: relative;
  border-left: 2px solid #d9d9d9;
  height: 49px;
  top: 6%;
`;

const InfoText = styled.div` /*박스 안 회원 정보 텍스트*/
  position: relative;
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-left: 50px;
  top: 20%;
`;

const InfoLine2 = styled.hr` /*박스 첫 번째 두꺼운 가로 라인*/
  position: relative;
  border: 2px solid #ff5000;
  margin-top: -30px;
  margin-left: 0px;
  width: 15%;
`;

const InfoVertical2 = styled.div` /*박스 두 번째 세로 라인*/
  position: relative;
  border-left: 2px solid #d9d9d9;
  height: 49px;
  top: -2%;
  left: 182px;
`;

const InfoLine3 = styled.hr` /*박스 끝 마지막 가로 라인*/
  position: relative;
  border: 1px solid #d9d9d9;
  margin-top: -8px;
  margin-left: 182px;
  width: 85%;
`;

const InfoText2 = styled.div` /*기본정보(필수) 텍스트*/
  position: relative;
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-left: 20px;
  top: 10%;
`;

const NameText = styled.div` /*사용자명 텍스트*/
  position: relative;
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin-left: 40px;
  top: 25%;
`;

const NameLine = styled.hr` /*첫 번째 라인*/
  position: relative;
  border: 1px solid black;
  top: 100px;
  width: 30%;
  left: -380px;
`;

const LoginName = styled.div` /*로그인 시 사용자명*/
  position: relative;
  font-size: 24px;
  font-weight: 700;
  color: #ff5000;
  margin-left: 40px;
  top: 25%;
`;

const IdText = styled.div` /*아이디 텍스트*/
  position: relative;
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin-left: 40px;
  top: 37%;
`;

const IdLine = styled.hr` /*두 번째 라인*/
  position: relative;
  border: 1px solid black;
  top: 150px;
  width: 30%;
  left: -380px;
`;

const LoginId = styled.div` /*로그인 시 아이디*/
  position: relative;
  font-size: 24px;
  font-weight: 700;
  color: #ff5000;
  margin-left: 40px;
  top: 39%;
`;

const NopText = styled.div` /*게임 참가 횟수 텍스트*/
  position: relative;
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin-left: 40px;
  top: 50%;
`;

const NopLine = styled.hr` /*마지막 라인*/
  position: relative;
  border: 1px solid black;
  top: 200px;
  width: 30%;
  left: -380px;
`;

const LoginNop = styled.div` /*로그인 시 게임 참가 횟수*/
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
`

const MobileHeader = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: antiquewhite;
`
const MobileHeaderA = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const MobileInfoTitle = styled.div` /*내정보 타이틀 텍스트*/
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin-top: 20px;
`;

const MobileHeaderB = styled.div`
    height: 100%;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MobileImage = styled.div`
  position: absolute;
  margin-top:20px;
  width: 47%;
  left: -20%;
  height: 25%;
  background-image: url('/images/basic.jpg');
  background-size: cover;
  background-position: 52% 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  transform: translate(100%, 0%) scaleX(0.7) scaleY(0.7);
`;

const MobileHeaderC = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const MobileName = styled.div`
  font-size: 21px;
  font-weight: 700;
  color: #333;
  margin-top: 30px;
`;

const MobileMain = styled.div`
    width: 100%;
    height:60%;
    background-color: white;
`;

const MobileInfoText = styled.div` /*기본정보 텍스트*/
  font-size: 23px;
  font-weight:bold;
  color: #333;
  margin-top: 20px;
  margin-left: 20px;
`;

const MobileMainA = styled.div`
    width: 100%;
    height:20%;
    display: flex;
    align-items: center;
`;

const MobileNameText = styled.div` /*사용자명 텍스트*/
 width:27%;
  font-size: 16px;
  font-weight: 700;
  color: lightgray;
  margin-top: 20px;
  margin-left:20px;
`;

const MobileLoginName = styled.div` /*로그인 시 사용자명*/
  font-size: 24px;
  color: #ff813a;
  margin-left: 20px;
  margin-top: 12px;
`;

const MobileMainB = styled.div`
width: 100%;
height:20%;
display: flex;
align-items: center;
`;

const MobileIdText = styled.div` /*아이디 텍스트*/
width:27%;
font-size: 16px;
font-weight: 700;
color: lightgray;
margin-top: 20px;
margin-left:20px;
`;

const MobileLoginId = styled.div` /*로그인 시 아이디*/
font-size: 24px;
color: #ff813a;
margin-left: 20px;
margin-top: 15px;
`;

const MobileMainC = styled.div`
width: 100%;
height:20%;
display: flex;
align-items: center;
    
`;

const MobileNopText = styled.div` /*게임 참가 횟수 텍스트*/
width:27%;
font-size: 16px;
  font-weight: 700;
  color: lightgray;
  margin-top: 20px;
  margin-left:20px;

`;

const MobileLoginNop = styled.div` /*로그인 시 게임 참가 횟수*/

font-size: 24px;
color: #ff813a;
margin-left: 20px;
margin-top: 18px;
;
`;

const MyInfo = () => {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    axios.post(process.env.REACT_APP_WAITLIST_API_URL + '/api/info')
      .then(response => {
        setResponseData(response.data);
        console.log(response.data); // 올바른 데이터를 확인하기 위해 responseData 대신 response.data를 출력합니다.
      })
      .catch(error => {
        console.error('오류:', error);
      });
  }, []);
  
  return (
    <div>
      <MediaQuery minWidth={767}>
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
        <LoginName>name</LoginName>

        <IdText>아이디</IdText>
        <IdLine />
        <LoginId>id</LoginId>

        <NopText>게임 참가 횟수</NopText>
        <NopLine />
        <LoginNop>0</LoginNop>

      </MediaQuery>

      <MediaQuery maxWidth={767}>
        <MobileFrame>
          <MobileHeader>
            <MobileHeaderA>
              <MobileInfoTitle>내 정보</MobileInfoTitle>
            </MobileHeaderA>

            <MobileHeaderB>
              <MobileImage />
            </MobileHeaderB>

            <MobileHeaderC>
              <MobileName>사용자 이름</MobileName>
            </MobileHeaderC>

          </MobileHeader>

          <MobileMain>
            <MobileInfoText>기본정보</MobileInfoText>

            <MobileMainA>
              <MobileNameText>사용자명</MobileNameText>
              <MobileLoginName>name</MobileLoginName>
            </MobileMainA>


            <MobileMainB>
              <MobileIdText>아이디</MobileIdText>
              <MobileLoginId>id</MobileLoginId>
            </MobileMainB>


            <MobileMainC>
              <MobileNopText>게임 참가 횟수</MobileNopText>
              <MobileLoginNop>0</MobileLoginNop>
            </MobileMainC>

            <Link to='/mypage/비밀번호변경'>비밀번호 변경</Link>
            <Link to='/mypage/회원탈퇴'>회원 탈퇴</Link>
          </MobileMain>


        </MobileFrame>
      </MediaQuery>
    </div>
  );
};

export default MyInfo;
