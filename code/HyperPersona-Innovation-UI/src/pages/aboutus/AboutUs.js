import React from "react";
import { makeStyles }  from "@mui/styles";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
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
            <h2>About Our Society</h2>
            <p>
              Our society values innovation and creativity, encouraging members
              to explore new ideas and pursue their passions. With a focus on
              social responsibility, our society actively engages in initiatives
              aimed at making a positive impact in our local community and
              beyond. We pride ourselves on creating a supportive environment
              where members can collaborate, learn, and grow together.
            </p>
            <p>
              At the heart of our society lies a commitment to promoting
              diversity and embracing the unique perspectives of every
              individual. Our society is a vibrant community dedicated to
              fostering inclusivity and belonging among its members.
            </p>
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
