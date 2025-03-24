import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const xLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "sept",
  "Oct",
  "Nov",
  "Dec",
];

export default function SimpleLineChart(props) {
  const { lineData } = props;
  const { pData, uData } = lineData;

  return (
    <LineChart
      width={440}
      height={300}
      series={[
        { data: pData, label: "Loan", color: "red" },
        { data: uData, label: "Deposit", color: "green" },
      ]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
    />
  );
}
