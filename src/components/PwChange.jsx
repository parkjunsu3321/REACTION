import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const PwTitle = styled.div` /*비밀번호 변경 타이틀 텍스트*/
  margin-top: 20px;
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-left: 15px;
`;

const PwLine1 = styled.hr` /*가로 라인*/
  border: 1px solid lightgray;
`;

const PwVertical1 = styled.div` /*박스 첫 번째 세로 라인*/
  position: relative;
  border-left: 2px solid #d9d9d9;
  height: 49px;
  top: 3%;
`;

const PwText = styled.div` /*박스 안 비밀번호 변경 텍스트*/
  position: relative;
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-left: 30px;
  top: 25%;
`;

const PwLine2 = styled.hr` /*박스 첫 번째 두꺼운 가로 라인*/
  position: relative;
  border: 2px solid #ff5000;
  margin-top: -30px;
  margin-left: 0px;
  width: 15%;
`;

const PwVertical2 = styled.div` /*박스 두 번째 세로 라인*/
  position: relative;
  border-left: 2px solid #d9d9d9;
  height: 49px;
  top: -1%;
  left: 182px;
`;

const PwLine3 = styled.hr` /*박스 끝 마지막 가로 라인*/
  position: relative;
  border: 1px solid #d9d9d9;
  margin-top: -8px;
  margin-left: 182px;
  width: 85%;
`;

const CurrentPwText = styled.div` /*현재 비밀번호 텍스트*/
  margin-top: 40px;
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-left: 30px;
`;

const PwInput1 = styled.input` /*기존 비번 입력하는 박스 디자인*/
  border-radius: 10px;
  padding: 18px;
  margin-top: 15px;
  margin-left: 25px;
  background-color: white;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 700px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const ChangePwText = styled.div` /*변경 비밀번호 텍스트*/
  margin-top: 40px;
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-left: 30px;
`;

const PwInput2 = styled.input` /*새로운 비번 입력하는 박스 디자인*/
  border-radius: 10px;
  padding: 18px;
  margin-top: 15px;
  margin-left: 25px;
  background-color: white;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 700px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const ConfirmPwText = styled.div` /*비밀번호 확인 텍스트*/
  margin-top: 40px;
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-left: 30px;
`;

const PwInput3 = styled.input` /*새로운 비번 확인 박스 디자인*/
  border-radius: 10px;
  padding: 18px;
  margin-top: 15px;
  margin-left: 25px;
  background-color: white;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 700px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const ErrorMessage = styled.div` /*새로운 비번 일치 여부 에러메시지*/
  position: absolute;
  margin-left: 30px;
  margin-top: 7px;
  color: red;
  font-size: 14px;
`;

const PwChangeBtn = styled.button` /*비밀번호 변경하기 버튼*/
  width: 15%;
  height: 48px;
  border: none;
  font-weight: 700;
  background-color: #289951;
  border-radius: 15px;
  color: white;
  margin-top: 79px;
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

export default function PwChange() {
  const [currentPw, setCurrentPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [confirmPwValid, setConfirmPwValid] = useState(false);

  // 현재 비밀번호 입력값 변경 핸들러임
  const handleCurrentPwChange = (e) => {
    setCurrentPw(e.target.value);
  };

  // 새로운 비밀번호 입력값 변경 핸들러임
  const handleNewPwChange = (e) => {
    setNewPw(e.target.value);
  };

  // 새로운 비밀번호 확인 입력값 변경 핸들러임
  const handleConfirmPwChange = (e) => {
    const newConfirmPw = e.target.value;
    setConfirmPw(newConfirmPw);
    setConfirmPwValid(newConfirmPw === newPw);
  };

  // 비밀번호 변경 버튼 클릭 핸들러임
  const handlePwChange = () => {
    axios.post(process.env.REACT_APP_WAITLIST_API_URL + '/api/change', {
              pw: newPw, // 여기서 pw를 newPw로 수정
            }, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then(response => {
            alert('비밀번호 변경이 완료되었습니다.');
          })
          .catch(error => {
          alert('Error fetching data: ' + error); // 실패 알림
          if (error.response) {
          alert('Server response: ' + error.response.data);
        }
      }
  };

  return (
    <div>
      <PwTitle>비밀번호 변경</PwTitle>

      <PwLine1 />

      <PwVertical1>
        <PwText>비밀번호 변경</PwText>
      </PwVertical1>

      <PwLine2 />

      <PwVertical2 />

      <PwLine3 />

      <CurrentPwText>현재 비밀번호</CurrentPwText>
      <PwInput1
        type='password'
        placeholder='기존 비밀번호를 입력해주세요.'
        value={currentPw}
        onChange={handleCurrentPwChange}
      />

      <ChangePwText>변경 비밀번호</ChangePwText>
      <PwInput2
        type='password'
        placeholder='새로운 비밀번호를 입력해주세요.'
        value={newPw}
        onChange={handleNewPwChange}
      />

      <ConfirmPwText>비밀번호 확인</ConfirmPwText>
      <PwInput3
        type='password'
        placeholder='새로운 비밀번호를 다시 입력하세요.'
        value={confirmPw}
        onChange={handleConfirmPwChange}
      />

      {!confirmPwValid && confirmPw.length > 0 && (
        <ErrorMessage>비밀번호가 일치하지 않습니다</ErrorMessage>
      )}

      <PwChangeBtn disabled={!confirmPwValid} onClick={handlePwChange}>
        변경하기
      </PwChangeBtn>
    </div>
  );
}
