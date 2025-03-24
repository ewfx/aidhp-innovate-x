import React, { useContext, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import AppCard from "../../components/card/AppCard";
import AppCarousel from "../../components/carousel/AppCarousel";
import bank from "../../imageassets/bank.jpeg";
import BasicPie from "../../components/charts/BasicPie";
import BarAnimation from "../../components/charts/BarAnimation";
import SimpleLineChart from "../../components/charts/SimpleLineChart";
import { AppContext } from "../../components/context/AppContext";
import FullPageOverlay from "./FullPageOverlay";

export default function Home() {
  const { userInfo } = useContext(AppContext);
  const [newUser, setNewUser] = useState(false);

  useEffect(() => {
    if (userInfo) {
      setNewUser(Object.keys(userInfo.userRoleRightMap).length === 0);
    }
  }, [userInfo]);

  const pieData = [
    { id: 0, value: 10, label: "series A" },
    { id: 1, value: 15, label: "series B" },
    { id: 2, value: 20, label: "series C" },
  ];

  const barData = [
    {
      label: "series 1",
      data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 1000)),
    },
  ];

  const pData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 5670, 6000, 3400, 5550, 1432];
  const uData = [2400, 1398, 9800, 3908, 4800, 3800, 4300, 6750, 1324, 4325, 8754, 9532];

  const getCardsWithDetails = () => [
    { title: "Deposit By Person", content: <BarAnimation barData={barData} /> },
    { title: "Share By Person", content: <BasicPie pieData={pieData} /> },
    { title: "Balance vs Loan", content: <SimpleLineChart lineData={{ pData, uData }} /> },
  ];

  const getTopRowCards = () => {
    const cards = getCardsWithDetails();
    return cards.map((card, index) => (
      <AppCard key={index} title={card.title} content={card.content} maximizable height width />
    ));
  };

  const carouselData = [
    { datatype: "image", imagesrc: bank, imagetype: "full", text: "Test", title: "ABC" },
    { datatype: "card", imagesrc: "", imagetype: "profile", text: "Test card", title: "ABC card" },
    { datatype: "text", imagesrc: "", imagetype: "", text: "Test text", title: "ABC text" },
  ];

  return (
    <div style={{ width: "100%" }}>
      {newUser ? (<><div align="center"><h2>Welcome {userInfo.userName}</h2></div> 
        <FullPageOverlay 
          message={"You are not a member of any society.\n You need to create a service request to register a society or to be part of a society."}
          link="/servicerequest"
          linkText="Go to service request"
        /></>
      ):(<>
      <Grid container justifyContent="center" paddingTop={1}>
        <Grid item xs={6}>
          <AppCarousel carouselData={carouselData} />
        </Grid>
      </Grid>

      <Grid container paddingTop={2}>
        <Grid item xs={12} display="flex">
          {getTopRowCards()}
        </Grid>
      </Grid></>)}
    </div>
  );
}
