import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import AppCarousel from "../../components/carousel/AppCarousel";
import society1 from "../../imageassets/society1.jpg";
import society2 from "../../imageassets/society2.jpg";
import society3 from "../../imageassets/society3.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  divider: {
    margin: theme.spacing(0, 0),
  },
}));

const AboutUs = () => {
  const classes = useStyles();

  const carouselData = [
    {
      datatype: "image",
      imagesrc: society1,
      imagetype: "full",
      text: "Test",
      title: "society1",
    },
    {
      datatype: "image",
      imagesrc: society2,
      imagetype: "full",
      text: "Test",
      title: "society2",
    },
    {
      datatype: "image",
      imagesrc: society3,
      imagetype: "full",
      text: "Test",
      title: "society3",
    },
  ];

  return (
    <div style={{ width: "100%", overflow: "auto" }}>
      <Grid container justifyContent="center" paddingTop={1}>
        {/* Left Side */}
        <Grid item xs={6}>
          {/* Society Information */}
          <div>
            <Typography variant="h2" gutterBottom>
              About Our Recommend System
            </Typography>
            <Typography variant="body1" paragraph>
              A recommendation system is an artificial intelligence or AI algorithm,
              usually associated with machine learning, that uses Big Data to suggest
              or recommend additional products to consumers. These can be based on various
              criteria, including past purchases, search history, demographic information, and other factors.
            </Typography>
            <Typography variant="body1" paragraph>
              Recommender systems are a critical component driving personalized user experiences,
              deeper engagement with customers, and powerful decision support tools in retail,
              entertainment, healthcare, finance, and other industries. On some of the largest
              commercial platforms, recommendations account for as much as 30% of the revenue.
              A 1% improvement in the quality of recommendations can translate into billions of dollars in revenue.
            </Typography>
            {/* Add more information about the society as needed */}
          </div>
        </Grid>

        {/* Divider */}
        <Grid item xs={false} sm={1}>
          <Divider className={classes.divider} orientation="vertical" />
        </Grid>

        {/* Right Side */}
        <Grid item xs={5}>
          {/* Carousel */}
          <div style={{ margin: "0 auto", maxWidth: "1000px" }}>
            <AppCarousel carouselData={carouselData} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutUs;