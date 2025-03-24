import React, { useState } from "react";
import {
  CardActionArea,
  CardContent,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "auto",
    position: "relative",
    margin:"5px",
  },
  title: {
    fontSize: 8,
  },
  textDecorationNone: {
    textDecoration: "none",
  },
  dialog: {
    overflow: "auto",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    padding: "10px 10px 0",
  },
});

export default function AppCard(props) {
  const classes = useStyles();
  const { title, desc, route, icon, content, maximizable, height, width } =
    props;
  const [maximized, setMaximized] = useState(false);

  const toggleMaximize = () => {
    setMaximized(!maximized);
  };

  const getCardHeader = () => {
    return (
      <div>
        {icon && <div>{icon}</div>}
        {title && (
          <Typography
            gutterBottom
            variant="h6"
            style={{ className: classes.title }}
            component="p"
          >
            {title}
          </Typography>
        )}
        {desc && (
          <Typography color="textSecondary" component="p">
            {desc}
          </Typography>
        )}
        {maximizable && (
          <div style={{ position: "absolute", top: 0, right: 0 }} onClick={toggleMaximize}>
            {maximized ? <FullscreenExitIcon /> : <FullscreenIcon />}
          </div>
        )}
      </div>
    );
  };

  const getCardContent = () => {
    return <CardContent style={{ height: "100%" }}>{content}</CardContent>;
  };

  const getCard = () => {
    const cardStyles = {
      //whenever height or width is true height=300px, width =200px,
      // otherwise height and width is auto
      height: height ? "100%" : "auto",
      width: width ? "100%" : "auto",
    };

    return (
      <Card
        className={classes.root}
        elevation={6}
        overflow="auto"
        style={cardStyles}
      >
        {<CardActionArea>
          {getCardHeader()}
          {getCardContent()}
        </CardActionArea> }
      </Card>
    );
  };

  const getMaximizedDialog = () => {
    return (
      <Dialog open={maximized} onClose={toggleMaximize} fullWidth maxWidth="md">
        <DialogTitle>{getCardHeader()}</DialogTitle>
        <DialogContent className={classes.dialog}>
          {getCardContent()}
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <>
      {route ? (
        <Link to={route} className={classes.textDecorationNone}>
          {getCard()}
        </Link>
      ) : (
        getCard()
      )}
      {getMaximizedDialog()}
    </>
  );
}
