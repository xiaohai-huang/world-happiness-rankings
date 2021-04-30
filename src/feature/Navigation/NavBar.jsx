import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
const useStyles = makeStyles((theme) => ({
  NavBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.palette.primary.main,
    padding: "1rem",
    height: "2rem",
  },
  NavBar__Links: {
    display: "flex",
    "& > *:not(:last-child)": {
      marginRight: theme.spacing(2.5),
    },
  },
}));
function NavBar() {
  const classes = useStyles();
  return (
    <nav className={classes.NavBar}>
      <Box className={classes.NavBar__Links}>
        <NavLink>Rankings</NavLink>
        <NavLink>Search</NavLink>
        <NavLink>Factors</NavLink>
      </Box>
      <Box className={classes.NavBar__Links}>
        <NavLink>Register</NavLink>
        <NavLink>Login</NavLink>
        <NavLink>Logout</NavLink>
      </Box>
    </nav>
  );
}
const useNavLinkStyles = makeStyles(() => ({
  NavBar__Link: {
    color: grey[100],
    "&:hover": {
      cursor: "pointer",
      color: grey[300],
      borderBottom: `2px solid ${grey[300]}`,
      marginBottom: "-2px",
    },
  },
}));
function NavLink({ path, children }) {
  const classes = useNavLinkStyles();
  return (
    <Typography className={classes.NavBar__Link} variant="h6">
      {children}
    </Typography>
  );
}

export default NavBar;
