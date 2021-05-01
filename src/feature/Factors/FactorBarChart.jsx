import React from "react";
import { Bar } from "react-chartjs-2";

const COLORS = {
  Red: "rgba(255, 99, 132, 0.2)",
  Blue: "rgba(54, 162, 235, 0.2)",
  Yellow: "rgba(255, 206, 86, 0.2)",
  Green: "rgba(75, 192, 192, 0.2)",
  Purple: "rgba(153, 102, 255, 0.2)",
  Orange: "rgba(255, 159, 64, 0.2)",
};
const BORDER_COLORS = {
  Red: "rgba(255, 99, 132, 1)",
  Blue: "rgba(54, 162, 235, 1)",
  Yellow: "rgba(255, 206, 86, 1)",
  Green: "rgba(75, 192, 192, 1)",
  Purple: "rgba(153, 102, 255, 1)",
  Orange: "rgba(255, 159, 64, 1)",
};
const captilize = (word) => word[0].toUpperCase() + word.substring(1);

const FactorBarChart = ({ title, color, countryNames, factorData }) => {
  const data = {
    labels: countryNames,
    datasets: [
      {
        label: "Country",
        data: factorData,
        backgroundColor: [COLORS[color]],
        borderColor: [BORDER_COLORS[color]],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    indexAxis: "y",
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: captilize(title),
      },
    },
  };
  return <Bar data={data} options={options} />;
};

export default FactorBarChart;
