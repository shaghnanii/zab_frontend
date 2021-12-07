import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";

export const StudentProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
          // if starts here
        if (auth.isAuthenticated() && auth.isStudent()) {
          return <Component {...props} />;
        }
        // else condition starts here
        else {
          return (
            <Redirect
              to={{
                pathname: "/forbidden-page",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
        // else ends here
      }}
    />
  );
};
