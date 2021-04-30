import React, { useState } from "react";
import { Box, Container } from "@material-ui/core";

import RankingsTable from "./RankingsTable";
import YearSelect from "./YearSelect";

function RankingsPage() {
  const [year, setYear] = useState("2015");
  return (
    <Container>
      <YearSelect year={year} setYear={setYear} />
      <Box mt={2} />
      <RankingsTable year={year} />
    </Container>
  );
}

export default RankingsPage;
