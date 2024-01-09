import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  const fetchData = () => {
    // axios를 이용한 API 호출
    axios.get(process.env.REACT_APP_WAITLIST_API_URL+'/api')
      .then(response => {
        console.log(response.data);
        setMessage(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // 추가 디버깅을 위해 서버 응답을 콘솔에 출력
        if (error.response) {
          console.error('Server response:', error.response.data);
        }
      });
  };

  useEffect(() => {
    // 초기 렌더링 시 데이터 가져오기
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}

export default App;
