import React, { useState } from 'react';
import '../styles/SignIn.css';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

const User = {
  // 가상의 사용자 데이터 (임시로 추가) 삭제해도 됨
  // 로그인 시 스크립트 창 볼려고 만든거임
  userid: '20203206',
  pw: '1234'
};

function SignIn(props) {
  const [userid, setId] = useState('');
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
    updateButtonState(userid, newPw);
  };

  const updateButtonState = (newId, newPw) => {
    setNotAllow(!(newId.length >= 1 && newPw.length >= 1));
  };

  const onClickConfirmButton = () => {
    axios.post(process.env.REACT_APP_WAITLIST_API_URL + '/api/login', {
      id: userid,
      pass: pw,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.data === true) {
          props.history.push('/Layout');
        } else {
          alert('로그인 실패');
        }
      })
      .catch(error => {
        alert('Error fetching data:', error);
        if (error.response) {
          alert('Server response:', error.response.data);
        }
      });
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !notAllow) {
      onClickConfirmButton();
    }
  };

  return (
    <div className='page'>
      <div className='titleWrap'>
        로그인
      </div>

      <div className='contentWrap'>
        <div className='inputTitle'>아이디</div>
        <div className='inputWrap'>
          <input
            type='text'
            className='input'
            placeholder='아이디 입력'
            value={userid}
            onChange={handleId}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className='inputTitle' style={{ marginTop: '26px' }}>
          비밀번호
        </div>

        <div className='inputWrap'>
          <input
            type='password'
            className='input'
            placeholder='비밀번호 입력'
            value={pw}
            onChange={handlePassword}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>

      <div className='reactionWrap'>
        <div className='reactionText'>
          R<span>e</span>action
        </div>
      </div>

      <div>
        <button onClick={onClickConfirmButton} disabled={notAllow} className='loginButton'>
          로그인
        </button>
      </div>

      <div className='SignUp'>
        <Link to="/SignUp">
          <span className='signUpLink'>회원가입</span>
        </Link>
      </div>
    </div>
  );
}

export default withRouter(SignIn);
