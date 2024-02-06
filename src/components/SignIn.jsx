import React, { useState } from 'react';
import '../styles/SignIn.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const User = {
  userid: '20203206',
  pw: '1234'
}

export default function SignIn() {
  const [userid, setId] = useState('');
  const [pw, setPw] = useState('');
  const [notAllow, setNotAllow] = useState(true);
  const history = useHistory(); // Access to history object

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
        alert(response.data);
        if (response.data === 'true') {
          // Redirect to the home page upon successful login
          history.push("/Home");
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
