import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const [inputValueId, setInputValueId] = useState('');
  const [inputValuePass, setInputValuePass] = useState('');

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
  axios.get(process.env.REACT_APP_WAITLIST_API_URL + '/api/check', {
    params: {
      id: inputValueId,
      pass: inputValuePass,
    },
  })
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
  
const btndata01 = () => {
  axios.get(process.env.REACT_APP_WAITLIST_API_URL + '/api/login', {
    params: {
      id: inputValueId,
      pass: inputValuePass,
    },
  })
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

  const handleInputChangeId = (e) => {
    setInputValueId(e.target.value);
  };

  const handleInputChangePass = (e) => {
    setInputValuePass(e.target.value);
  };

  return (
    <div className="App">
      <h1>{message}</h1>
      <input
        type="text"
        placeholder="Enter ID"
        value={inputValueId}
        onChange={handleInputChangeId}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter Password"
        value={inputValuePass}
        onChange={handleInputChangePass}
      />
      <br />
      <button onClick={btndata}>Fetch Data</button>
    </div>
  );
}

export default App;
