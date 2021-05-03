import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import useRankings from "./useRankings";
import { LinearProgress, Typography } from "@material-ui/core";

const YEAR_COLUMN_DEF = {
  headerName: "Year",
  field: "year",
  sortable: true,
  filter: "agNumberColumnFilter",
};

const COLUMN_DEFS = [
  {
    headerName: "Rank",
    field: "rank",
    sortable: true,
    filter: "agNumberColumnFilter",
  },
  { headerName: "Country", field: "country", sortable: true, filter: true },
  {
    headerName: "Score",
    field: "score",
    sortable: true,
    filter: "agNumberColumnFilter",
  },
];

const COLUMN_DEFS_WITH_YEAR = [YEAR_COLUMN_DEF, ...COLUMN_DEFS];

function RankingsTable({ year, all }) {
  const { rankings, loading, error } = useRankings({ year, all });

  return (
    <div
      className="ag-theme-balham"
      style={{
        height: "400px",
        width: "70%",
      }}
    >
      {loading && <LinearProgress />}
      {error && (
        <Typography color="error">
          An error just occured! Cannot fetch data from the server.
        </Typography>
      )}
      {!year && !all && <Typography>Please select a year.</Typography>}

      <AgGridReact
        columnDefs={all ? COLUMN_DEFS_WITH_YEAR : COLUMN_DEFS}
        rowData={(all || year) && rankings}
        pagination={true}
        paginationPageSize={10}
        loading={loading}
        applyColumnDefOrder={true}
      />
      <Typography variant="caption">
        Happiniess Data from year(s): {all ? "2015~2020" : year}
      </Typography>
    </div>
  );
}

export default RankingsTable;
