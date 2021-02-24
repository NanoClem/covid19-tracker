import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { isLogged } from '../utils';


export default function PublicRoute({ component: Component, restricted, ...rest }) {

    return (
        <Route 
            {...rest} 
            render={props => (
                isLogged() && restricted ? 
                    <Redirect to='/profile' /> :
                    <Component {...props} /> 
            )} 
        />
    );
}