import React from "react";
import { useContext, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../components/context/AppContext";
import AppCard from "../../components/card/AppCard";
import AppTab from "../../components/tab/AppTab";
import { Box } from "@mui/material";
import AppCarousel from "../../components/carousel/AppCarousel";
import bank from "../../imageassets/bank.jpeg";
import BasicPie from "../../components/charts/BasicPie";
import BarAnimation from "../../components/charts/BarAnimation";
import SimpleLineChart from "../../components/charts/SimpleLineChart";

export default function NewUserHome() {
    return (
    <div style={{ width: "100%" }}>
      <Grid container justifyContent={"center"} paddingTop={1}>
        <Grid item xs={6} justifyContent={"center"}>
          {<AppCarousel carouselData={carouselData} />}
        </Grid>
      </Grid>
      <Grid container paddingTop={2}>
        <Grid item xs={12} display="flex">
          {getTopRowCards()}
        </Grid>
      </Grid>
    </div>
  );
}
