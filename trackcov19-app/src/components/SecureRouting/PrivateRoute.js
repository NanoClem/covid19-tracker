import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogged } from '../utils';


export default function PrivateRoute({ component: Component, ...rest }) {

    return (
        <Route
            {...rest}
            render={props => (
                isLogged() ?
                    <Component {...props} /> :
                    <Redirect to='/login' />
            )}
        />
    );
}