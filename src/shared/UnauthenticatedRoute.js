import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function UnAuthenticatedRoute({ component: C, appProps, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                !appProps.isAuthenticated
                ? <C {...props} {...appProps} />
                : <Redirect to={`/`} />}
            />
    );
}
