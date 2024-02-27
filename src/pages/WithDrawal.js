import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import { IoClose } from "react-icons/io5";
import { BiSolidWidget } from "react-icons/bi";
import { FaRankingStar } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { ImMenu } from "react-icons/im";
import { FaLock } from "react-icons/fa";
import axios from 'axios';

const WdTitle = styled.div`
  margin-top: 20px;
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-left: 15px;
`;

const WdLine1 = styled.hr`
  border: 1px solid lightgray;
`;

const CurrentPwText = styled.div`
  margin-top: 40px;
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-left: 30px;
`;

const CurrentPwInput = styled.input`
  border-radius: 10px;
  padding: 18px;
  margin-top: 15px;
  margin-left: 25px;
  background-color: white;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 700px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const RemoveText = styled.div`
  margin-top: 60px;
  font-size: 18px;
  font-weight: 700;
  color: red;
  margin-left: 30px;
`;

const Agree = styled.div`
  position: relative;
  top: 20px;
  left: 27px;
`;

const Checkbox = styled.input`
  margin-left:5px;
`;

const Label = styled.label`
  margin-left:5px;
`;

const RemoveBtn = styled.button`
  width: 15%;
  height: 48px;
  border: none;
  font-weight: 700;
  background-color: #a30e26;
  border-radius: 15px;
  color: white;
  margin-top: 320px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: block;
  font-size: 15px;
  margin-left: 990px;

  &:disabled {
    background-color: #dadada;
    color: white;
    cursor: not-allowed;
  }
`;

//여기서부터 모바일 환경 컴포넌트
const MobileFrame = styled.div`
  width: 100vw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const RealMobileHeader = styled.div`
    height: 10%; 
    background-color: lightsalmon;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const MobileHeaderL = styled.div`
    width: 50%;
    height: auto;
    margin-left: 5%;
`;

const MobileHeaderR = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-right: 3%;
`;

const MobileHeader = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background-color: antiquewhite;
`;

const MobileHeaderA = styled.div`
  width: 10%;
  height: 100%;
  display: flex-start;
  justify-content: center;
  align-items: center;
`;

const MobileHeaderB = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobilePwText = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #333;
`;

const MobileHeaderC = styled.div`
  height: 100%;
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MobileMain = styled.div`
  width: 100%;
  height:70%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MobileMainA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height:10%;
  margin-top:40px;
`;

const MobileCurrentPwText = styled.div`
  font-weight: 700;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
`;

const MobileMainB = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  width: 100%;
  height:20%;
`;

const MobileCurrentPwInput = styled.input`
  display: flex; 
  align-items: center; 
  justify-content:center;
  border-radius: 20px;
  padding: 16px;
  width: 80%;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);

  &:focus-within {
    border: 1px solid #9e30f4;
    box-shadow: 0 0 10px rgba(158, 48, 244, 0.3);
  }
`;

const MobileRemoveText = styled.div`
  margin-top:15px;
  font-size: 12px;
  font-weight: 700;
  color: red;
`;

const MobileMainC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height:20%;
  margin-top:20px;
`;

const MobileAgree = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MobileCheckbox = styled.input`
  width: 17px;
  height: 17px;
`;

const MobileLabel = styled.label`
  margin-left:5px;
`;

const MobileMainD = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height:20%;
  margin-top:20px;
`;

const MobileRemoveBtn = styled.button`
  width: 90%;
  height: 60px;
  border: none;
  font-weight: bold;
  background-color: white;
  border-radius: 15px;
  color: red;
  margin-top: 40px;
  font-size: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

  border-width: 1px;
  border-style: solid;
  border-color: lightgray;

  &:disabled {
    background-color: #dadada;
    color: white;
  }
`;

const MobileFooter = styled.div`
    height: 10%;
    background-color: lightsalmon;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

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
`;

const LinkStyle = {
  textDecoration: 'none',
  color: 'black',
};

const LinkStyle2 = {
  textDecoration: 'none',
  color: 'black',
};

const IconStyle = {
  width: '30px',
  height: '30px',
};

export default function WithDrawal() {
  
  const [isChecked, setIsChecked] = useState(false);
  const [pw, setPw] = useState('');

const handleCheckboxChange = async () => {
    try {
     const token = localStorage.getItem('token');
const config = {
  headers: {
    "Authorization": `Bearer ${token}`
  }
};
const queryParams = new URLSearchParams({ user_password: pw });
const url = `${process.env.REACT_APP_FAST_API_KEY}/api/users/delete_user?${queryParams}`;
try {
  const response = await axios.delete(url, config);
  if (response.data === true) {
    alert("탈퇴 성공");
  } else {
    alert("탈퇴 실패");
  }
} catch (error) {
  console.error('Error:', error.response.data);
}

  }
  finally {
    
  }
};

  const handlePwChange = (e) => {
    setPw(e.target.value);
  };

  return (
    <>
      <MediaQuery minWidth={767}>
        <WdTitle>회원 탈퇴</WdTitle>

        <WdLine1 />

        <CurrentPwText>현재 비밀번호</CurrentPwText>
        <CurrentPwInput
          type='password'
          placeholder='계정을 삭제하려면 현재 사용중인 비밀번호를 입력하세요'
          value={pw}
          onChange={handlePwChange}
        />

        <RemoveText>계정삭제 시 모든 회원정보가 삭제되며 복구 불가능합니다.</RemoveText>

        <Agree>
          <Checkbox
            className='checkbox'
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <Label>삭제하겠습니다.</Label>
        </Agree>

        <RemoveBtn
          disabled={!isChecked || pw === ''}
          onClick={() => {
            if (isChecked) {
              alert('계정이 삭제되었습니다.');
            } else {
              alert('동의하지 않거나 비밀번호를 입력하지 않으면 삭제할 수 없습니다.');
            }
          }}
        >
          계정 삭제
        </RemoveBtn>
      </MediaQuery>

      {/*여기부터 모바일 환경*/}
      <MediaQuery maxWidth={767}>
        <MobileFrame>

        <RealMobileHeader>
            <MobileHeaderL>
              <Link to="/" style={LinkStyle} >
                <h1 style={{ fontFamily: "Itim-Regular" }}>Reaction</h1>
              </Link>
            </MobileHeaderL>
            <MobileHeaderR>
              <MobileSignBtn>
                <Link to="/SignIn" style={LinkStyle2} >
                  <FaLock style={{ width: '10px', height: '10px' }} />SignIn
                </Link>
              </MobileSignBtn>
            </MobileHeaderR>
          </RealMobileHeader>

          <MobileHeader>
            <MobileHeaderA>
              <Link to="/MyInfo" style={LinkStyle}>
                <IoClose style={{ width: "100%", height: "100%" }} />
              </Link>
            </MobileHeaderA>

            <MobileHeaderB>
              <MobilePwText>회원 탈퇴</MobilePwText>
            </MobileHeaderB>

            <MobileHeaderC />
          </MobileHeader>

          <MobileMain>
            <MobileMainA>
              <MobileCurrentPwText>현재 비밀번호</MobileCurrentPwText>
            </MobileMainA>

            <MobileMainB>
              <MobileCurrentPwInput
                type='password'
                placeholder='현재 사용중인 비밀번호를 입력하세요.'
                value={pw}
                onChange={handlePwChange}
              />
              <MobileRemoveText>계정삭제 시 모든 회원정보가 삭제되며 복구 불가능합니다.</MobileRemoveText>
            </MobileMainB>

            <MobileMainC>
              <MobileAgree>
                <MobileCheckbox
                  className='checkbox'
                  type='checkbox'
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <MobileLabel>삭제하겠습니다.</MobileLabel>
              </MobileAgree>
            </MobileMainC>

            <MobileMainD>
              <MobileRemoveBtn
                disabled={!isChecked || pw === ''}
                onClick={() => {
                  if (isChecked) {
                    alert('계정이 삭제되었습니다.');
                  } else {
                    alert('동의하지 않거나 비밀번호를 입력하지 않으면 삭제할 수 없습니다.');
                  }
                }}
              >
                탈퇴하기
              </MobileRemoveBtn>
            </MobileMainD>
          </MobileMain>

          <MobileFooter>
            <Link to="/MyInfo" style={LinkStyle}>
              <FaUserLarge style={IconStyle} />
            </Link>
            <Link to="/" style={LinkStyle}>
              <BiSolidWidget style={IconStyle} />
            </Link>
            <Link to="/Ranking" style={LinkStyle}>
              <FaRankingStar style={IconStyle} />
            </Link>
            <Link to="/UserStatus" style={LinkStyle}>
              <ImMenu style={IconStyle} />
            </Link>
          </MobileFooter>
        </MobileFrame>
      </MediaQuery>
    </>
  )
};
