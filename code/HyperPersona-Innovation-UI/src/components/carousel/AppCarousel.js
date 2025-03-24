import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AppCard from "../card/AppCard";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  divEffect: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow
    borderRadius: "6px",
    textAlign: "center",
    lineHeight: "100px",
    justifyContent: "center",
    overflow: "hidden",
    border: "1px solid black",
    padding: "10px",
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "grey" /* Dot color */,
    margin: " 0 5px",
    border: "black",
    cursor: "pointer",
  },
  selectedDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "black" /* Selected dot color */,
    margin: "0 5px",
    border: "black",
    cursor: "pointer",
  },
}));

const AppCarousel = (props) => {
  const { carouselData } = props;
  const classes = useStyles();
  function CustomDot(props) {
    return (
      <button
        className={props.selected ? classes.selectedDot : classes.dot}
        onClick={props.onClick}
      ></button>
    );
  }
  const carousalComponents = () => {
    let elements = [];

    {
      carouselData &&
        carouselData.map((carousel, index) => {
          elements.push(
            <div key={index} className={classes.divEffect}>
              {carousel.datatype === "image" && (
                <img src={carousel.imagesrc} alt={carousel.text} />
              )}
              {carousel.datatype === "card" && (
                <AppCard title={carousel.title} content={carousel.text} />
              )}
              {carousel.datatype === "text" && (
                <div title={carousel.title}>{carousel.text}</div>
              )}
            </div>
          );
        });
    }
    return elements;
  };
  return (
    <Carousel
      style={{ height: "50%", width: "50%", justifyContent: "center" }}
      autoPlay={true}
      infiniteLoop={true}
      showArrows={true}
      showStatus={true}
      showThumbs={false}
      interval={3000}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        return (
          <CustomDot
            selected={isSelected}
            onClick={() => onClickHandler(index)}
          />
        );
      }}
    >
      {carousalComponents()}
    </Carousel>
  );
};

export default AppCarousel;
