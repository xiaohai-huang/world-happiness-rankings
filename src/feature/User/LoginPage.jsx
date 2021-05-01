import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router";

import API from "../../api/API";

const useStyles = makeStyles((theme) => ({
  container: { height: "100%" },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& > *": {
      marginBottom: theme.spacing(2),
    },
  },
}));
function LoginPage() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});
  const [password, setPassword] = useState("");
  // check if the user has realdy logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      enqueueSnackbar("You have already logged in!", { variant: "info" });
      history.push("/");
    }
  }, [enqueueSnackbar, history]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      // email address validation
      if (!validateEmail(email)) {
        setError({ message: "Invalid Email address!" });
        return;
      } else {
        setError({});
      }

      // send register request to the server
      try {
        const response = await API.login(email, password);
        localStorage.setItem("token", response.token);
        enqueueSnackbar("Successfully login!", { variant: "success" });
        history.push("/");
      } catch (error) {
        enqueueSnackbar(error.message, { variant: "error" });
      }
    } else {
      enqueueSnackbar("All fields are required!", { variant: "error" });
    }
  };
  return (
    <Container
      className={classes.form}
      component="form"
      maxWidth="sm"
      onSubmit={handleSubmit}
    >
      <Typography variant="h4">Login</Typography>
      <TextField
        type="email"
        variant="outlined"
        label="Email"
        required
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={Boolean(error.message)}
        helperText={error.message}
      />
      <TextField
        type="password"
        variant="outlined"
        label="Passowrd"
        required
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        onClick={handleSubmit}
      >
        Login
      </Button>
    </Container>
  );
}
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
export default LoginPage;
