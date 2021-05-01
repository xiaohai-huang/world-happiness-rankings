import React, { useEffect, useState } from "react";
import { Box, Container, Grid } from "@material-ui/core";
import { useSnackbar } from "notistack";

import useFactors from "./useFactors";
import FactorsTable from "./FactorsTable";
import YearSelect from "../Rankings/YearSelect";
import CountrySelect from "../Search/CountrySelect";
import FactorBarChart from "./FactorBarChart";
import LimitSlider from "./LimitSlider";
const FACTOR_NAMES = [
  "economy",
  "family",
  "health",
  "freedom",
  "generosity",
  "trust",
];
const COLORS = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
const LIMIT = 10;
function FactorsPage() {
  const [year, setYear] = useState("2015");
  const [country, setCountry] = useState("");
  const [limit, setLimit] = useState(10);
  const { factors, error, loading } = useFactors(year, {
    limit: LIMIT,
    country,
  });
  const { enqueueSnackbar } = useSnackbar();

  // handle error by displaying error message
  useEffect(() => {
    if (error) enqueueSnackbar(error, { variant: "error" });
  }, [error, enqueueSnackbar]);

  return (
    <Container>
      <Box display="flex">
        <YearSelect year={year} setYear={setYear} size="medium" />
        <Box ml={1} />
        <CountrySelect country={country} setCountry={setCountry} />
        <Box ml={1} />
        <LimitSlider
          limit={limit}
          setLimit={setLimit}
          disabled={Boolean(country) || Boolean(error)}
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
      {!country && !loading && !error && limit !== (1 || 0) && (
        <>
          <Box mt={2} />
          <Grid container>
            {FACTOR_NAMES.map((factor, i) => {
              const countryNames = factors
                .map((f) => f.country)
                .slice(0, limit);
              const singleFactorData = factors
                .map((f) => f[factor])
                .slice(0, limit);
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
