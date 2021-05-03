import React, { useEffect, useState } from "react";
import { Box, Container, Grid } from "@material-ui/core";
import { useSnackbar } from "notistack";

import useFactors from "./useFactors";
import FactorsTable from "./FactorsTable";
import YearSelect from "../Rankings/YearSelect";
import CountrySelect from "../Search/CountrySelect";
import FactorBarChart from "./FactorBarChart";
import LimitSlider from "./LimitSlider";
import NumRowsSlider from "./NumRowsSlider";
const FACTOR_NAMES = [
  "economy",
  "family",
  "health",
  "freedom",
  "generosity",
  "trust",
];
const COLORS = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
function FactorsPage() {
  const [year, setYear] = useState("2015");
  const [country, setCountry] = useState("");
  const [limit, setLimit] = useState(50);
  const [range, setRange] = React.useState([1, 10]);
  const { factors, error, loading } = useFactors(year, {
    limit,
    country,
  });
  const { enqueueSnackbar } = useSnackbar();

  // handle error by displaying error message
  useEffect(() => {
    if (error) enqueueSnackbar(error, { variant: "error" });
  }, [error, enqueueSnackbar]);

  return (
    <Container>
      <Box display="flex" flexWrap="wrap">
        <Box pb={1} pr={1}>
          <YearSelect year={year} setYear={setYear} size="medium" />
        </Box>
        <Box pb={1} pr={1}>
          <CountrySelect country={country} setCountry={setCountry} />
        </Box>
        <LimitSlider
          limit={limit}
          setLimit={setLimit}
          disabled={Boolean(country) || Boolean(error) || !Boolean(year)}
        />
      </Box>
      <Box mt={2} />
      <FactorsTable
        year={year}
        factors={factors}
        limit={limit}
        error={error}
        loading={loading}
      />
      {!country && !loading && !error && year && limit !== 1 && limit !== 0 && (
        <>
          <Box mt={5} />
          <Box display="flex" justifyContent="center">
            <NumRowsSlider
              max={factors.length}
              value={range}
              setValue={setRange}
            />
          </Box>
          <Grid container>
            {FACTOR_NAMES.map((factor, i) => {
              // range starts at 1
              let [left, right] = range;
              left = left - 1;

              const countryNames = factors
                .map((f) => f.country)
                .slice(left, right);
              const singleFactorData = factors
                .map((f) => f[factor])
                .slice(left, right);
              return (
                <Grid key={factor} item xs={12} md={6}>
                  <FactorBarChart
                    title={factor}
                    color={COLORS[i % COLORS.length]}
                    countryNames={countryNames}
                    factorData={singleFactorData}
                  />
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
      <Box mb={5} />
    </Container>
  );
}

export default FactorsPage;
