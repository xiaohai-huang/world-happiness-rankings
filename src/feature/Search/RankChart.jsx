import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
// x - year
// y - rank
const RankChart = ({ country, years, ranks }) => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Rank",
        data: [],
        fill: false,
        backgroundColor: "rgb(63, 81, 181)",
        borderColor: "rgba(63, 81, 181, 0.2)",
      },
    ],
  });

  useEffect(() => {
    setData((prev) => ({
      labels: years,
      datasets: [{ ...prev.datasets[0], data: ranks }],
    }));
  }, [years, ranks]);

  return <Line data={country && data} options={options} />;
};

export default RankChart;
