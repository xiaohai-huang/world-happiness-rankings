import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import useCountries from "../Search/useCountries";

const useStyles = makeStyles({
  LimitSlider: {
    width: 400,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default function LimitSlider({ limit, setLimit, disabled }) {
  const classes = useStyles();
  const { countries } = useCountries();
  const numCountries = countries.length;

  const handleSliderChange = (_, newValue) => {
    setLimit(newValue);
  };

  return (
    <div className={classes.LimitSlider}>
      <Typography id="input-slider" gutterBottom>
        # Countries
      </Typography>

      <Slider
        value={typeof limit === "number" ? limit : 0}
        onChange={handleSliderChange}
        aria-labelledby="input-slider"
        disabled={disabled}
        step={9}
        marks
        min={1}
        max={numCountries}
        valueLabelDisplay="on"
      />
    </div>
  );
}
