import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";

//declarar si la ruta es privada y realizar validaciones 
//en caso de necesitar que este logueado para mostrar 
// wrapping/composing
const PrivateRouter = ({ component: Component, loggedIn,...rest }) => (
  <Route {...rest} render={(props) => (
        loggedIn ? (
            <Component {...props} {...rest}/>
        ) : (
          <Redirect to="/login"/>
        )
  )}/>
//   
)

export default PrivateRouter;