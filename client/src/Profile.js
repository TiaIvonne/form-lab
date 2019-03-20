import React, { Component } from 'react';
import axios from "axios"
import config from "./config.json"

class Profile extends Component {
    state = {  }

    componentDidMount(){ 
        axios({
            method: "GET",
            url: `${config.api}/profile`,
            withCredentials: true
        })
        .then((response)=> {
            debugger
        })
        .catch((error)=> {
            debugger
        })

    }
    render() { 
        return ( 
            <>
            <h1>Hello Super agente {this.props.myUsername}</h1>
            </>
         );
    }
}
 
export default Profile;