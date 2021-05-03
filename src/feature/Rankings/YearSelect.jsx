import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const years = ["2015", "2016", "2017", "2018", "2019", "2020"];

export default function YearSelect({ year, setYear, size, disabled }) {
  return (
    <Autocomplete
      style={{ width: 200 }}
      options={years}
      value={year}
      onChange={(e, newValue) => setYear(newValue)}
      getOptionLabel={(option) => option}
      disabled={disabled}
      renderInput={(params) => (
        <TextField
          {...params}
          size={size ? size : "small"}
          label="Select a year"
          variant="outlined"
        />
      )}
    />
  );
}
