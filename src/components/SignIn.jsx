import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MediaQuery from "react-responsive";
import { IoArrowBackOutline } from "react-icons/io5";
import axios from 'axios';

const User = {
  // 가상의 사용자 데이터 (임시로 추가)
  id: '',
  pw: ''
};

const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url('/images/back.jpg');
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const Page = styled.div`
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 55%;
  max-width: 500px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const TitleWrap = styled.div`
  margin-top: 20px;
  font-size: 32px;
  font-weight: 700;
  color: #333;
  text-align: center;
`;

const ContentWrap = styled.div`
  margin-top: 20px;
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
  margin-left: 80px;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding: 16px;
  margin-top: 8px;
  background-color: white;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  &:focus-within {
    border: 1px solid #9e30f4;
    box-shadow: 0 0 10px rgba(158, 48, 244, 0.3);
  }
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  height: 25px;
  font-size: 16px;

  &::placeholder {
    color: #999;
  }
`;

const ReactionWrap = styled.div`
  position: relative;
  margin-bottom: 200px;
`;

const ReactionText = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 60px;
  font-weight: 700;
  color: rgba(75, 75, 75, 0.3);

  span {
    color: #9e30f4;
  }
`;

const LoginButton = styled.button`
  width: 87%;
  height: 48px;
  border: none;
  font-weight: 700;
  background-color: ${(props) => (props.disabled ? '#dadada' : '#9e30f4')};
  border-radius: 15px;
  color: white;
  margin-top: -60px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s;
  margin-left: auto;
  margin-right: auto;
  display: block;
  font-size: 15px;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#dadada' : '#7e2094')};
  }
`;

const SignUpLink = styled.span`
  color: #65997c;
  cursor: pointer;
  transition: color 0.3s;
  display: inline-block;
  margin-left: 400px;
  margin-top:10px;

  &:hover {
    color: #0f3f25;
  }
`;

const NoAccountMessage = styled.span`
  position: absolute;
  color: #808080;
  margin-left: 255px;
  top: 92.7%;
`;

//여기서부터 모바일 환경 컴포넌트
const MobileContainer = styled.div`
  width: 100vw;
  height: 100dvh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const MobileHeader = styled.div`
  width: 100%;
  height: 10%; 
  background-color: lightsalmon;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MobileHeaderL = styled.div`
  width: 10%;
  height: 100%;
  display: flex-start;
  justify-content: center;
  align-items: center;
`;

const MobileHeaderM = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileHeaderR = styled.div`
  height: 100%;
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MobileMain = styled.div`
  width: 100%;
  height: 90%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MobileContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MobileInputTitle1 = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin-top: 20%;
  color: #333;
  width: 100%;
  margin-left: 15%;
`;

const MobileInputWrap1 = styled.div`
  display: flex; 
  align-items: center; 
  border-radius: 8px;
  padding: 16px;
  margin-top: 3%;
  width: 80%;
  max-width: 400px;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  &:focus-within {
    border: 1px solid #9e30f4;
    box-shadow: 0 0 10px rgba(158, 48, 244, 0.3);
  }
`;

const MobileInputTitle2 = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin-top: 5%;
  color: #333;
  width: 100%;
  margin-left: 15%;
`;

const MobileInputWrap2 = styled.div`
  display: flex; 
  align-items: center; 
  border-radius: 8px;
  padding: 16px;
  margin-top: 3%;
  width: 80%;
  max-width: 400px;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  &:focus-within {
    border: 1px solid #9e30f4;
    box-shadow: 0 0 10px rgba(158, 48, 244, 0.3);
  }
`;

const MobileLoginButton = styled.button`
  width: 90%;
  height: 50px;
  border: none;
  font-weight: 700;
  margin-top: 20px;
  background-color: ${(props) => (props.disabled ? '#dadada' : '#9e30f4')};
  border-radius: 15px;
  color: white;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s;
  font-size: 15px;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`;

const MobileNoAccountMessage = styled.div`
  display: flex;
  width: 100%;
  color: #808080;
  margin-top: 20px;
`;

const MobileNoAccountMessageL = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 70%;
  height: auto;
  margin-left: 50px;
`;

const MobileNoAccountMessageR = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 30%;
  height: auto;
  margin-right: 32px;
`;

const LinkStyle = {
  textDecoration: 'none',
  color: '#65997c',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
};

const LinkStyle2 = {
  textDecoration: 'none',
  color: 'black',
  cursor: 'pointer',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
};

export default function SignIn() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [notAllow, setNotAllow] = useState(true);

  const handleId = (e) => {
    const newId = e.target.value;
    setId(newId);
    updateButtonState(newId, pw);
  };

  const handlePassword = (e) => {
    const newPw = e.target.value;
    setPw(newPw);
    updateButtonState(id, newPw);
  };

  const updateButtonState = (newId, newPw) => {
    setNotAllow(!(newId.length >= 1 && newPw.length >= 1));
  };

  const onClickConfirmButton = async () => {
    const formData = { user_name: id, user_password: pw };
    try {
      const response = await axios.post(process.env.REACT_APP_FAST_API_KEY + '/api/users/login', formData);
      const token = response.data.token;

      localStorage.setItem('token', token);
      console.log(response.data);

      // 로그인 성공 시 Home.js 페이지로 이동
      navigate('/Home');
      console.log("홈으로 이동");
    } catch (error) {
      console.error('Error:', error.response.data);
      // 로그인 실패 시 알림 등을 표시
      alert('로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.');
      console.log("로그인 실패");
    }
  };


  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !notAllow) {
      onClickConfirmButton();
    }
  };

  return (
    <div>
      <MediaQuery minWidth={767}>
        <BackgroundImage />
        <Page>
          <TitleWrap>로그인</TitleWrap>
          <ContentWrap>
            <InputTitle>아이디</InputTitle>
            <InputWrap>
              <Input
                type='text'
                placeholder='아이디 입력'
                value={id}
                onChange={handleId}
                onKeyDown={handleKeyDown}
              />
            </InputWrap>

            <InputTitle style={{ marginTop: '26px' }}>비밀번호</InputTitle>

            <InputWrap>
              <Input
                type='password'
                placeholder='비밀번호 입력'
                value={pw}
                onChange={handlePassword}
                onKeyDown={handleKeyDown}
              />
            </InputWrap>
          </ContentWrap>
          <ReactionWrap>

            <ReactionText>
              R<span>e</span>action
            </ReactionText>

          </ReactionWrap>

          <LoginButton onClick={onClickConfirmButton} disabled={notAllow}>
            로그인
          </LoginButton>

          <NoAccountMessage>
            <span >계정이 없으신가요?</span>
          </NoAccountMessage>

          <div className='SignUp'>
            <Link to='/SignUp'>
              <SignUpLink>회원가입</SignUpLink>
            </Link>
          </div>
        </Page>
      </MediaQuery>

      {/*여기부터 모바일 환경*/}
      <MediaQuery maxWidth={767}>
        <MobileContainer>
          <MobileHeader>
            <MobileHeaderL>
              <Link to="/" style={LinkStyle2}>
                <IoArrowBackOutline style={{ width: "100%", height: "100%", marginLeft: "10px" }} />
              </Link>
            </MobileHeaderL>
            <MobileHeaderM>
              <Link to="/" style={LinkStyle2}>
                <h1 style={{ fontFamily: "Itim-Regular" }}>Reaction</h1>
              </Link>
            </MobileHeaderM>
            <MobileHeaderR />
          </MobileHeader>

          <MobileMain>
            <MobileContentWrap>
              <MobileInputTitle1>
                아이디
              </MobileInputTitle1>

              <MobileInputWrap1>
                <Input
                  type='text'
                  placeholder='아이디 입력'
                  value={id}
                  onChange={handleId}
                  onKeyDown={handleKeyDown}
                />
              </MobileInputWrap1>

              <MobileInputTitle2>
                비밀번호
              </MobileInputTitle2>

              <MobileInputWrap2>
                <Input
                  type='password'
                  placeholder='비밀번호 입력'
                  value={pw}
                  onChange={handlePassword}
                  onKeyDown={handleKeyDown}
                />
              </MobileInputWrap2>
            </MobileContentWrap>

            <MobileLoginButton onClick={onClickConfirmButton} disabled={notAllow}>
              로그인
            </MobileLoginButton>

            <MobileNoAccountMessage>
              <MobileNoAccountMessageL>
                계정이 없으신가요?
              </MobileNoAccountMessageL>

              <MobileNoAccountMessageR>
                <Link to='/SignUp' style={LinkStyle}>회원가입</Link>
              </MobileNoAccountMessageR>
            </MobileNoAccountMessage>
          </MobileMain>
        </MobileContainer>
      </MediaQuery>
    </div>
  );
}
