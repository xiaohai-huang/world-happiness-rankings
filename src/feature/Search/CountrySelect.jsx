import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Box, LinearProgress, makeStyles, Typography } from "@material-ui/core";

import useCountries from "./useCountries";
const useStyles = makeStyles(() => ({
  CountrySelect__Wrapper: {
    width: "fit-content",
  },
}));
export default function CountrySelect({ country, setCountry }) {
  const { countries, loading, error } = useCountries();
  const classes = useStyles();
  return (
    <Box className={classes.CountrySelect__Wrapper}>
      <Autocomplete
        style={{ width: 300 }}
        options={countries}
        value={country}
        onChange={(e, newValue) => setCountry(newValue)}
        autoHighlight
        getOptionLabel={(option) => option}
        renderOption={(option) => <Typography>{option}</Typography>}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a country"
            variant="outlined"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
      {error && (
        <Typography color="error">Unable to fetch the countries!</Typography>
      )}
      {loading && <LinearProgress />}
    </Box>
  );
}
