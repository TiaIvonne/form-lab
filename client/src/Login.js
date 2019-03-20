import React, { Component } from 'react';
import axios from 'axios'
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';
import config from "./config.json";

class Login extends Component {
    state = { 
        username: '',
        password: '',
     }

    //take an input and update status
    handleInput = (event)=> {
        let myInput = {} //empty object
        myInput[event.target.name] = event.target.value
        this.setState(myInput)
    }

    //incompleto
    handleSubmit = (event) =>{
        event.preventDefault();
        let newUser = this.state
        // debugger
        axios({
            method: 'post',
            url: `${config.api}/login`,
            // url: 'http://localhost:3001/login',
            data: newUser,
            withCredentials : true,
            
            }).then(databaseResponse => {
                debugger;
                this.props.loggedIn(true,this.state.username)
                this.props.history.push('/profile')
            }).catch(err => {
                debugger
            this.props.history.push('/login')
            })
    }

    render() { 
        return ( 
            <section class="hero is-success is-fullheight">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="column is-4 is-offset-4">
                        <h3 class="title has-text-grey">Login</h3>
                        <p class="subtitle has-text-grey">Please login to proceed.</p>
                        <div class="box">
                            <figure class="avatar">
                                <img src="lightscape-741984-unsplash.jpg"/>
                            </figure>
                            <form onSubmit={this.handleSubmit}>
                                <div class="field">
                                    <div class="control">
                                        <input onChange={this.handleInput}class="input is-large" type="username" name="username" placeholder="Your Username" value={this.state.username}/>
                                    </div>
                                </div>
    
                                <div class="field">
                                    <div class="control">
                                        <input onChange={this.handleInput}class="input is-large" type="password" name="password" placeholder="Your Password" value={this.state.password}/>
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="checkbox">
                                    <input type="checkbox"/>
                                    Remember me
                                    </label>
                                </div>
                                <button class="button is-block is-info is-large is-fullwidth">Login</button>
                            </form>
                        </div>
                        <p class="has-text-grey">
                            <a href="../">Sign Up</a> &nbsp;·&nbsp;
                            <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                            <a href="../">Need Help?</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
         );
    }
}
 
export default Login;