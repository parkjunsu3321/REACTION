import React, { useState } from 'react';
import styled from 'styled-components';

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

export default function Withdrawal() {
  const [isChecked, setIsChecked] = useState(false);
  const [pw, setPw] = useState('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handlePwChange = (e) => {
    setPw(e.target.value);
  };

  return (
    <div>
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
            axios.post(process.env.REACT_APP_WAITLIST_API_URL + '/api/login', {
              id: userid,
              pass: pw,
            }, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then(response => {
            alert(response.data);
          })
          .catch(error => {
          alert('Error fetching data: ' + error); // 실패 알림
          if (error.response) {
          alert('Server response: ' + error.response.data);
        }
    });

            alert('계정이 삭제되었습니다.');
          } else {
            alert('동의하지 않거나 비밀번호를 입력하지 않으면 삭제할 수 없습니다.');
          }
        }}
      >
        계정 삭제
      </RemoveBtn>
    </div>
  );
}
