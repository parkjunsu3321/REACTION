import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
      <LoginName>{responseData[0]}</LoginName>

      <IdText>아이디</IdText>
      <IdLine />
      <LoginId>{responseData[1]}</LoginId>

      <NopText>게임 참가 횟수</NopText>
      <NopLine />
      <LoginNop>{responseData[2]}</LoginNop>
    </div>
  );
};

export default MyInfo;
