import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...children }) => {
  return (
    <Route
      {...children}
      render={(props) => {
        if (!children.isLoggedIn) {
          return (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          );
        }
        return <Component {...props} />;
      }}
    />
  );
};
