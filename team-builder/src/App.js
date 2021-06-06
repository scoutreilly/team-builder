// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import React from 'react';
import axios from './axios/index'

function App() {
  const [team, setTeam] = useState([])


  useEffect(() => {
    axios.get('fakeapi.com').then(res => {
      setTeam(res.data)
      // console.log(res.data);
    }
    )
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>hi</h1>
        <form>
          <h4>Email:</h4>
          <input type='text' name='newEmail'/>
          <h4>Name: </h4>
          <input type='text' name='newName'/>
          <h4>Username:</h4>
          <input type='text' name='newUsername'/>
        </form>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
