import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './AddUser';

class App extends Component {

  // findUserName =(username) => {
  //   axios.get(`/findUserByid?username=${username}`).then(result =>{

  //   })
  // }

  render() {
    return (
      <div className="App">
        <h1>Form culiao</h1>
        <AddUser />
      </div>
    );
  }
}

export default App;
