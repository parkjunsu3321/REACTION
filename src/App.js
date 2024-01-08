import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // API 호출
    fetch('/api/hello')
      .then(response => response.text())
      .then(data => {
        console.log(data); // 받은 문자열을 콘솔에 출력
        setMessage(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // useEffect가 처음 한 번만 실행되도록 빈 배열을 전달합니다.

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
