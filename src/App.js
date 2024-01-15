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

  const exitwindow = () => {
     axios.get(process.env.REACT_APP_WAITLIST_API_URL + '/api/exit')
    };
  
  const btndata = () => {
  axios.put(process.env.REACT_APP_WAITLIST_API_URL + '/api/change')
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
    axios.post(process.env.REACT_APP_WAITLIST_API_URL + '/api/login', {
      id: inputValueId,
      pass: inputValuePass,
    }, {
      headers: {
        'Content-Type': 'application/json',
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
  window.addEventListener('beforeunload', exitwindow);

    return () => {
      window.removeEventListener('beforeunload', exitwindow);
    };
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
      <button onClick={btndata01}>Fetch Data</button>
      <button onClick={btndata}>Fetch Data</button>
    </div>
  );
}

export default App;
