import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { BarChart } from "@mui/x-charts/BarChart";

export default function BarAnimation(props) {
  const { barData } = props;

  return (
    <Box sx={{ width: "100%" }}>
      <BarChart height={300} series={barData} />
    </Box>
  );
}
