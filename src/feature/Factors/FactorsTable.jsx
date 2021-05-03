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
    { headerName: "Country", field: "country", sortable: true, filter: true },
    {
      headerName: "Score",
      field: "score",
      sortable: true,
      filter: "agNumberColumnFilter",
    },
    {
      headerName: "Economy",
      field: "economy",
      sortable: true,
      filter: "agNumberColumnFilter",
    },
    {
      headerName: "Family",
      field: "family",
      sortable: true,
      filter: "agNumberColumnFilter",
    },
    {
      headerName: "Health",
      field: "health",
      sortable: true,
      filter: "agNumberColumnFilter",
    },
    {
      headerName: "Freedom",
      field: "freedom",
      sortable: true,
      filter: "agNumberColumnFilter",
    },
    {
      headerName: "Generosity",
      field: "generosity",
      sortable: true,
      filter: "agNumberColumnFilter",
    },
    {
      headerName: "Trust",
      field: "trust",
      sortable: true,
      filter: "agNumberColumnFilter",
    },
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
        rowData={year && factors?.slice(0, limit)}
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
