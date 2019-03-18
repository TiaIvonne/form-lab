import React, { Component } from 'react';
import axios  from 'axios';

class AppUser extends Component {
    //set a values for form
    state = { 
        username: '',
        password: '',
        firstname:'',
        lastname:'',
     }
    //take an input and update status
    handleInput = (event)=> {
        let myInput = {} //empty object
        myInput[event.target.name] = event.target.value
        this.setState(myInput)
    }

    //submit function
    handleSubmit = (event) => {
        event.preventDefault();
        let newUser = this.state
        // debugger
        axios({
            method: 'post',
            url: 'http://localhost:3001/user',
            data: newUser,
            withCredentials : true,
          }).then(databaseResponse => {
            //   debugger;
          }).catch(err => {
            //   debugger
          })
    }

    render() { 
        return ( 
            //render a form
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleInput} name="username" type="text" placeholder="username" value={this.state.username}/>
                <input onChange={this.handleInput} name="password" type= "password" placeholder="password" value={this.state.password}/>
                <input onChange={this.handleInput} name="firstname" type="text" placeholder="firstname" value={this.state.firstname}/>
                <input onChange={this.handleInput} name="lastname" type="text" placeholder="lastname" value={this.state.lastname}/>
                <input type="submit" value='Submit' />
            </form>


         );
    }
}
 
export default AppUser;