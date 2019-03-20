import React, { Component } from 'react';
import axios  from 'axios';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';

class SignUp extends Component {
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
            url: 'http://localhost:3001/signup',
            data: newUser,
            withCredentials : true,
          }).then(databaseResponse => {
            this.props.loggedIn(true)
            this.props.history.push('/profile')
          }).catch(err => {
            this.props.history.push('/signup')
          })
    }

    render() { 
        return ( 
            //render a form
            // <form onSubmit={this.handleSubmit}>
            //     <input onChange={this.handleInput} name="username" type="text" placeholder="username" value={this.state.username}/>
            //     <input onChange={this.handleInput} name="password" type= "password" placeholder="password" value={this.state.password}/>
            //     <input onChange={this.handleInput} name="firstname" type="text" placeholder="firstname" value={this.state.firstname}/>
            //     <input onChange={this.handleInput} name="lastname" type="text" placeholder="lastname" value={this.state.lastname}/>
            //     <input type="submit" value='Submit' />
            // </form>
<section>
<div class="hero-body">
    <div class="container has-text-centered">
        <div className="column is-4 is-offset-4">
            <h3 className="title has-text-grey">Sign in</h3>
            <p className="subtitle has-text-grey">Please sign in to proceed.</p>
            <div class="box">
                <figure class="avatar">
                    <img src="lightscape-741984-unsplash.jpg"/>
                </figure>
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <div class="control">
                            <input onChange={this.handleInput} class="input is-large" type="text" name="firstname" placeholder="First name" value={this.state.firstname}/>
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input onChange={this.handleInput} class="input is-large" type="text" name="lastname" placeholder="Last name" value={this.state.lastname}/>
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input onChange={this.handleInput} class="input is-large" type="text" name="username" placeholder="Your Username" value={this.state.username}/>
                        </div>
                    </div>

                    <div class="field">
                        <p class="control has-icons-left">
                            <input onChange={this.handleInput} class="input is-large" type="password" name="password" placeholder="Your Password" value={this.state.password}/>
                            <span class="icon is-small is-left">
                              <i class="fa fa-lock" aria-hidden="true"></i>
                            </span>
                        </p>
                    </div>
                    <button class="button is-block is-info is-large is-fullwidth" value="submit">Register</button>
                </form>
            </div>
            <p class="has-text-grey">
                <a href="../">Need Help?</a>
            </p>

            
        </div>
    </div>
</div>
</section>

         );
    }
}
 
export default SignUp;