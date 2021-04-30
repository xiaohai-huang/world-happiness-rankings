import React from "react";
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
const useStyles = makeStyles((theme) => ({
  Home__Container: {},
  Home__Hero: {
    borderRadius: "5px",
  },
  Home__Title: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "5px",
    color: grey[300],
    maxWidth: "fit-content",
    padding: "0.15rem 1rem",
  },
  Home__Description__Wrapper: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "10px",
    color: grey[100],
    padding: "2rem 1rem",
    lineHeight: "1.25",
  },
}));
function HomePage() {
  const classes = useStyles();
  return (
    <Container className={classes.Home__Container}>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Typography className={classes.Home__Title} variant="h4">
            The Happiness Data App
          </Typography>
          <Box mb={3} />
          <div className={classes.Home__Description__Wrapper}>
            <Typography>
              The World Happiness Report is a publication of the United Nations
              Sustainable Development Solutions Network. It contains articles
              and rankings of national happiness, based on respondent ratings of
              their own lives, which the report also correlates with various
              (quality of) life factors. As of March 2021, Finland was ranked
              the happiest country in the world four times in a row.
            </Typography>
            <Box mt={1} />
            <Typography>
              The report primarily uses data from the Gallup World Poll. Each
              annual report is available to the public to download on the World
              Happiness Report website. The Editors of the 2020 report are John
              F. Helliwell, Richard Layard, Jeffrey D. Sachs, and Jan-Emmanuel
              De Neve. Associate Editors are Lara Aknin, Shun Wang, and Haifang
              Huang.
            </Typography>
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <img
            className={classes.Home__Hero}
            src="/images/hero.webp"
            alt="hero"
            width="100%"
            height="100%"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
