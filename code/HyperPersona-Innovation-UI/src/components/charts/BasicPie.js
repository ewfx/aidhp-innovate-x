import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function BasicPie(props) {
  const { pieData } = props;
  return (
    <PieChart
      series={[
        {
          data: pieData,
        },
      ]}
      width={400}
      height={200}
    />
  );
}
