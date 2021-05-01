import React from "react";
import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme) => ({
  NavBar__Wrapper: {
    backgroundColor: theme.palette.primary.main,
    marginBottom: theme.spacing(3.5),
  },
  NavBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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
    <Container className={classes.NavBar__Wrapper}>
      <nav className={classes.NavBar}>
        <Box className={classes.NavBar__Links}>
          <NavLink path="/">Home</NavLink>
          <NavLink path="/rankings">Rankings</NavLink>
          <NavLink path="/search">Search</NavLink>
          <NavLink path="/factors">Factors</NavLink>
        </Box>
        <Box className={classes.NavBar__Links}>
          <NavLink path="/regitser">Register</NavLink>
          <NavLink path="/login">Login</NavLink>
          <NavLink path="/logout">Logout</NavLink>
        </Box>
      </nav>
    </Container>
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
  const history = useHistory();
  const classes = useNavLinkStyles();
  const handleClick = () => history.push(path);
  return (
    <Typography
      className={classes.NavBar__Link}
      variant="h6"
      onClick={handleClick}
    >
      {children}
    </Typography>
  );
}

export default NavBar;
