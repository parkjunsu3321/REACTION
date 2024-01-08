// App.js
import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // API 호출
    fetch('/api/hello')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        console.log(data);
        setMessage(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // 추가 디버깅을 위해 서버 응답을 콘솔에 출력
        return error.text().then(errorMessage => console.error('Server response:', errorMessage));
      });
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
