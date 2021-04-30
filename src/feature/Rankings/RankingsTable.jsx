import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import useRankings from "./useRankings";
import { LinearProgress, Typography } from "@material-ui/core";

function RankingsTable({ year }) {
  const { rankings, loading, error } = useRankings({ year });

  const columns = [
    {
      headerName: "Rank",
      field: "rank",
      sortable: true,
      filter: "agNumberColumnFilter",
    },
    { headerName: "Country", field: "country" },
    {
      headerName: "Score",
      field: "score",
      sortable: true,
      filter: "agNumberColumnFilter",
    },
  ];
  return (
    <div
      className="ag-theme-balham"
      style={{
        height: "400px",
        width: "650px",
      }}
    >
      {loading && <LinearProgress />}
      {error && (
        <Typography color="error">
          An error just occured! Cannot fetch data from the server.
        </Typography>
      )}
      {!year && <Typography>Please select a year.</Typography>}

      <AgGridReact
        columnDefs={columns}
        rowData={year && rankings}
        pagination={true}
        paginationPageSize={10}
        loading={loading}
      />
      <Typography variant="caption">
        Happiniess Data from year: {year}
      </Typography>
    </div>
  );
}

export default RankingsTable;
