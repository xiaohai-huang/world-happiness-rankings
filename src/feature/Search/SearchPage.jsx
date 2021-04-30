import React, { useEffect, useState } from "react";
import { Box, Container } from "@material-ui/core";

import CountrySelect from "./CountrySelect";
import CountryTable from "./CountryTable";
import RankChart from "./RankChart";
import useRankings from "../Rankings/useRankings";

function SearchPage() {
  const [country, setCountry] = useState("Australia");
  const { rankings, loading, error } = useRankings({ country });
  const [chartData, setChartData] = useState({ years: [], ranks: [] });

  // obtain years and ranks for line chart
  useEffect(() => {
    const newChartDataMap = {};
    rankings.forEach((rank) => {
      newChartDataMap[rank.year] = rank.rank;
    });
    const newChartData = { years: [], ranks: [] };
    const orderedYears = Object.keys(newChartDataMap);
    orderedYears.sort((a, b) => a - b);
    orderedYears.forEach((year) => {
      newChartData.years.push(year);
      newChartData.ranks.push(newChartDataMap[year]);
    });

    setChartData(newChartData);
  }, [country, rankings]);

  return (
    <Container>
      <Box display="flex" alignItems="center">
        {/* left */}
        <Box>
          <CountrySelect country={country} setCountry={setCountry} />
          <Box mt={2} />
          <CountryTable
            country={country}
            rankings={rankings}
            loading={loading}
            error={error}
            years={chartData.years}
          />
        </Box>
        <Box ml={2} />
        {/* line chart */}
        <Box width="100%" height="100%">
          <RankChart
            country={country}
            years={chartData.years}
            ranks={chartData.ranks}
          />
        </Box>
      </Box>
    </Container>
  );
}

export default SearchPage;
