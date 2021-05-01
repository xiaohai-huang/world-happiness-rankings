import React from "react";
import { useSnackbar } from "notistack";
import { Redirect, Route } from "react-router";

function AuthRoute({ children, ...rest }) {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Route
      {...rest}
      render={(routerProps) => {
        // check if token exists
        const token = localStorage.getItem("token");
        if (!token) {
          enqueueSnackbar("Please login first!", {
            variant: "warning",
            preventDuplicate: true,
          });
        }
        return token ? (
          React.cloneElement(children, routerProps)
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
}

export default AuthRoute;
