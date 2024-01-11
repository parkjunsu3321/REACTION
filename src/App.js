import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const [inputValue, setInputValue] = useState('');

  const fetchData = () => {
    axios.get(process.env.REACT_APP_WAITLIST_API_URL+'/api')
      .then(response => {
        console.log(response.data);
        setMessage(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        if (error.response) {
          console.error('Server response:', error.response.data);
        }
      });
  };

  const btndata = () => {
    axios.get(process.env.REACT_APP_WAITLIST_API_URL+'/api/db')
      .then(response => {
        console.log(response.data);
        setMessage(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        if (error.response) {
          console.error('Server response:', error.response.data);
        }
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="App">
      <h1>{message}</h1>
      <input
        type="text"
        placeholder="Enter text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={btndata}>Fetch Data</button>
    </div>
  );
}

export default App;
