import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});
// num countries to be displyed on bar chart
const LIMIT = 10;
export default function NumRowsSlider({ max, value, setValue }) {
  const classes = useStyles();

  const handleChange = (_, newValue) => {
    // display at most 10 countries' factor data
    const [oldLeft, oldRight] = value;
    const [newLeft, newRight] = newValue;
    const numRows = getNumRows(newLeft, newRight);

    // display at least two counrties
    if (numRows < 2) return;
    // within limit range
    if (numRows <= LIMIT) {
      setValue(newValue);
      return;
    }
    // drag whole thing right
    if (numRows > LIMIT && newRight > oldRight) {
      setValue([newRight - LIMIT + 1, newRight]);
      return;
    }
    // drag whole thing left
    if (numRows > LIMIT && newLeft < oldLeft) {
      setValue([newLeft, newLeft + LIMIT - 1]);
      return;
    }
  };
  useEffect(() => {
    // when the number in the slider is greater than
    // the total number of countries available e.g. shrink # countries
    const right = value[1];
    // display at least 2 countries
    if (max < 2) return;
    if (max > 0 && right > max) {
      setValue([Math.max(max - LIMIT + 1, 0), max]);
    }
  }, [max, value, setValue]);
  return (
    <div className={classes.root}>
      <Typography id="range-slider" align="center" gutterBottom>
        Factors for {getNumRows(...value)} countries
      </Typography>
      <Slider
        value={value}
        min={1}
        max={max}
        marks={true}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
    </div>
  );
}

export function getNumRows(left, right) {
  return Math.abs(left - right) + 1;
}
