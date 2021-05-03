import React from "react";
import { useSnackbar } from "notistack";
import { Redirect, Route } from "react-router";
import jwt from "jsonwebtoken";

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
        // token exists then check if the token has expired
        else if (!isTokenValid(token)) {
          enqueueSnackbar("Token has expired, please login again!", {
            variant: "warning",
            preventDuplicate: true,
          });
          // clear the token
          localStorage.removeItem("token");
        }

        return token ? (
          React.cloneElement(children, routerProps)
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
}
// true if the toekn is valid
function isTokenValid(token) {
  // decode the token
  const data = jwt.decode(token);
  const currentDate = new Date();
  const expireDate = new Date(data.exp * 1000); // missing 3 digits precision
  console.log(currentDate);
  console.log(expireDate);
  if (expireDate - currentDate < 0) {
    return false;
  } else {
    return true;
  }
}
export default AuthRoute;
