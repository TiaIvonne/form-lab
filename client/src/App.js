import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp';
import Login from './Login';
import PrivateRouter from './PrivateRouter'
import Profile from './Profile'
// import Logout from './Logout'
import { Route, Link, Switch } from "react-router-dom";
import axios from 'axios'
import { createBrowserHistory } from 'history'

class App extends Component {

  // findUserName =(username) => {
  //   axios.get(`/findUserByid?username=${username}`).then(result =>{

  //   })
  // }
  state={
    loggedIn : false,
    username : "",
  }

  loggedIn = (aBoolean, username) => {
    this.setState({
      loggedIn: aBoolean,
      username:username,
    })
  }

  logout = ()=>{
    axios.get('http://localhost:3001/logout')
          .then(response =>{ 
              console.log('eliminada la cuenta')
              // this.setState({
              //   loggedIn: false,
              //   username: "",
              // })
              this.loggedIn(false, "")
            }).catch(err => {
              console.log('error ctm')
                // this.history.push('/login')
            })
  }

  render() {
    return (
      <div className="App">
      <header>
      {/* <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link> */}
      {/* dentro del header van los links y el control de las rutas */}
      <Link to='/profile'>Profile </Link>
      <Link to="/signup">SignUp </Link>
      <Link to="/login">Login </Link>
      <Link to="/logout" onClick={this.logout}>Logout</Link>

      <Switch>
        <Route path='/signup' render={(props) => <SignUp {...props} loggedIn={this.loggedIn}/>} />
        <Route path='/login'  render={(props) => <Login {...props} loggedIn={this.loggedIn}/>} />
        <PrivateRouter path='/profile' component={Profile} myUsername={this.state.username} loggedIn={this.state.loggedIn}/>
      
      </Switch>
     
      </header>
     
      </div>
    );
  }
}

export default App;
