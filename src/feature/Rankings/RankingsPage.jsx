import React, { useState } from "react";
import { Box, Checkbox, Container, FormControlLabel } from "@material-ui/core";

import RankingsTable from "./RankingsTable";
import YearSelect from "./YearSelect";

function RankingsPage() {
  const [year, setYear] = useState("2015");
  const [all, setAll] = useState(false);
  return (
    <Container>
      <Box display="flex">
        <YearSelect year={year} setYear={setYear} disabled={all} />
        <Box ml={1} />
        <AllCheckBox all={all} setAll={setAll} />
      </Box>
      <Box mt={2} />
      <RankingsTable year={year} all={all} />
    </Container>
  );
}

function AllCheckBox({ all, setAll }) {
  return (
    <FormControlLabel
      value={all}
      onChange={(e) => setAll(e.target.checked)}
      control={<Checkbox name="checkedB" color="primary" />}
      label="All (2015-2020)"
    />
  );
}
export default RankingsPage;
