import React, { useState } from "react";
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
function RegistrationPage() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password && confirmPassword) {
      // email address validation
      if (!validateEmail(email)) {
        setError({ message: "Invalid Email address!" });
        return;
      } else {
        setError({});
      }
      // check password and confirm password
      if (password !== confirmPassword) {
        enqueueSnackbar("Password and Cofrim Password must be identical!", {
          variant: "warning",
        });
        return;
      }

      // send register request to the server
      setLoading(true);
      try {
        const response = await API.register(email, password);
        enqueueSnackbar(response.message, { variant: "success" });
        history.push("/login");
      } catch (error) {
        enqueueSnackbar(error.message, { variant: "error" });
      }
      setLoading(false);
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
      <Typography variant="h4">Register</Typography>
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
      <TextField
        type="password"
        variant="outlined"
        label="Confrim Passowrd"
        required
        fullWidth
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        disabled={loading}
        onClick={handleSubmit}
      >
        Registration
      </Button>
    </Container>
  );
}
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
export default RegistrationPage;
