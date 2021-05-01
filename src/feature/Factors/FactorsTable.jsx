import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import { LinearProgress, Typography } from "@material-ui/core";

function FactorsTable({ year, factors, limit, loading, error }) {
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
    { headerName: "Economy", field: "economy" },
    { headerName: "Family", field: "family" },
    { headerName: "Health", field: "health" },
    { headerName: "Freedom", field: "freedom" },
    { headerName: "Generosity", field: "generosity" },
    { headerName: "Trust", field: "trust" },
  ];
  return (
    <div
      className="ag-theme-balham"
      style={{
        height: "400px",
        width: "100%",
      }}
    >
      {loading && <LinearProgress />}
      {error && (
        <Typography color="error">An error has occured! - {error}</Typography>
      )}
      {!year && <Typography>Please select a year.</Typography>}
      <AgGridReact
        columnDefs={columns}
        rowData={year && factors.slice(0, limit)}
        pagination={true}
        paginationPageSize={10}
        loading={loading}
      />
      <Typography variant="caption">
        Happiniess Factors Data from year: {year}
      </Typography>
    </div>
  );
}

export default FactorsTable;
