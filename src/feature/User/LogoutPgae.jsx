import React, { useEffect } from "react";
import { Container, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { useSnackbar } from "notistack";

function LogoutPgae() {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    localStorage.removeItem("token");
    enqueueSnackbar("Successfully logout!", { variant: "success" });
    setTimeout(() => history.push("/"), 1000);
  }, [enqueueSnackbar, history]);
  return (
    <Container>
      <Typography>Logging out...</Typography>
    </Container>
  );
}

export default LogoutPgae;
