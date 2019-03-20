import React, { Component } from 'react';
class Profile extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <h1>Hello Super agente {this.props.myUsername}</h1>
            </>
         );
    }
}
 
export default Profile;