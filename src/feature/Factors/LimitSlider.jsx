import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  LimitSlider: {
    width: 250,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default function LimitSlider({ limit, setLimit, disabled }) {
  const classes = useStyles();

  const handleSliderChange = (event, newValue) => {
    setLimit(newValue);
  };

  return (
    <div className={classes.LimitSlider}>
      <Typography id="input-slider" gutterBottom>
        # Countries
      </Typography>

      <Slider
        value={typeof limit === "number" ? limit : 0}
        max={10}
        onChange={handleSliderChange}
        aria-labelledby="input-slider"
        disabled={disabled}
      />
      {limit}
    </div>
  );
}
