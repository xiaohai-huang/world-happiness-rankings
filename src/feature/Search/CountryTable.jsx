import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { LinearProgress, Typography } from "@material-ui/core";

function CountryTable({ country, rankings, years, loading, error }) {
  const columns = [
    {
      headerName: "Year",
      field: "year",
      sortable: true,
      filter: "agNumberColumnFilter",
    },
    {
      headerName: "Rank",
      field: "rank",
      sortable: true,
      filter: "agNumberColumnFilter",
    },
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
        height: "300px",
        width: "100%",
      }}
    >
      {loading && <LinearProgress />}
      {error && (
        <Typography color="error">
          An error just occured! Cannot fetch data from the server.
        </Typography>
      )}
      {!country && <Typography>Please selete a country.</Typography>}

      <AgGridReact
        columnDefs={columns}
        rowData={country && rankings}
        pagination={true}
        paginationPageSize={10}
      />
      <Typography variant="caption">
        Happiniess Data for country: {country}
      </Typography>
      <br />
      <Typography variant="caption">
        Years {years[0]}-{years[years.length - 1]}
      </Typography>
    </div>
  );
}

export default CountryTable;
