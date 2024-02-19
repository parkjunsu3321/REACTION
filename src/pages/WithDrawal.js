import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import { IoClose } from "react-icons/io5";

const WdTitle = styled.div` /*회원 탈퇴 타이틀 텍스트*/
  margin-top: 20px;
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-left: 15px;
`;

const WdLine1 = styled.hr` /*가로 라인*/
  border: 1px solid lightgray;
`;

const CurrentPwText = styled.div` /*pwchagne.css에 있는 것과 중복되는 텍스트*/
  margin-top: 40px;
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-left: 30px;
`;

const CurrentPwInput = styled.input` /*현재 비밀번호 텍스트 입력 박스 디자인*/
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

const RemoveText = styled.div` /*삭제 텍스트*/
  margin-top: 60px;
  font-size: 18px;
  font-weight: 700;
  color: red;
  margin-left: 30px;
`;

const Agree = styled.div` /*체크 박스 삭제하시겠습니까 텍스트*/
  position: relative;
  top: 20px;
  left: 27px;
`;

const Checkbox = styled.input` /*체크 박스 디자인*/
  margin-left:5px;
`;

const Label = styled.label` /*삭제하겠습니다 텍스트*/
  margin-left:5px;
`;

const RemoveBtn = styled.button` /*삭제하기 버튼*/
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

  &:disabled { /*버튼 비활성화 시*/
    background-color: #dadada;
    color: white;
    cursor: not-allowed;
  }
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
`

const MobileHeaderB = styled.div`
    height: 100%;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MobilePwText = styled.div` /*박스 안 비밀번호 변경 텍스트*/
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
`

const MobileMain = styled.div`
    width: 100%;
    height:90%;
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

const MobileCurrentPwText = styled.div` /*pwchagne.css에 있는 것과 중복되는 텍스트*/
font-size: 18px;
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

const MobileCurrentPwInput = styled.input` /*현재 비밀번호 텍스트 입력 박스 디자인*/
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

const MobileRemoveText = styled.div` /*삭제 텍스트*/
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

const MobileAgree = styled.div` /*체크 박스 삭제하시겠습니까 텍스트*/
display: flex;
flex-direction: row;
align-items: center;
`;

const MobileCheckbox = styled.input` /*체크 박스 디자인*/
  width: 17px;
  height: 17px;
`; 

const MobileLabel = styled.label` /*삭제하겠습니다 텍스트*/
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

const MobileRemoveBtn = styled.button` /*삭제하기 버튼*/
width: 90%;
height: 60px;
border: none;
font-weight: bold;
background-color: white;
border-radius: 15px;
color: red; /* 텍스트 색상 */
margin-top: 40px;
font-size: 20px;
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3); /* 그림자 효과 */

border-width: 1px; /* 테두리의 두께 */
border-style: solid; /* 테두리의 스타일을 실선으로 지정 */
border-color: lightgray; /* 테두리의 색상을 검정색으로 지정 */

&:disabled {
  background-color: #dadada;
  color: white;
}
`;

const LinkStyle = {
  textDecoration: 'none',
  color: 'black',
};

const WithDrawal = () => {

  const [isChecked, setIsChecked] = useState(false);
  const [pw, setPw] = useState('');
  const history = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handlePwChange = (e) => {
    setPw(e.target.value);
  };

  const WithDrawalContent = () => (
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
      <MediaQuery maxWidth={767}>
        <MobileFrame>
          <MobileHeader>
            <MobileHeaderA>
              <Link to="/" style={LinkStyle}>
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
        </MobileFrame>
      </MediaQuery>
    </>
  )

  
  return (
    <Layout RightMainContent={<WithDrawalContent />}/>
  );
};

export default WithDrawal;