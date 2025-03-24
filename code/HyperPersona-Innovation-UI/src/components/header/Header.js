import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import ColoredAvatar from "../avatar/ColoredAvatar";
import { AppContext } from "../../components/context/AppContext";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
  },
  header: {
    zIndex: theme.zIndex.drawer + 1,
    borderBottom: `4px solid ${theme.palette.header.main}`,
    background: "#d71e28",
    "& a": {
      color: theme.palette.headercolor.main,
      textDecoration: "none",
    },
    position: "fixed",
    height: "50px",
  },
  headerBannerImage: {
    height: "22px",
    verticalAlign: "sub",
    marginRight: theme.spacing(1),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#fff",
    textShadow: "1px 1px 3px #000",
    "& > div": {
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
    },
  },
  toggleLabel: {
    margin: "0 10px",
  },
  ripple: {
    color: "#FFAE00",
    display: "inline-flex",
    transform: "rotate(15deg)",
    fontSize: "1.5rem",
    textShadow: "1px 1px 3px #000",
  },
}));
export default function DenseAppBar() {
  const classes = useStyles();
  const [username, setUsername] = useState(null);
  const {userInfo } = useContext(AppContext);
  
  useEffect(() => {
    if(userInfo && userInfo.userName)
    {
      setUsername(userInfo.userName);
    }        
  }, [userInfo]);

  return (
    <AppBar
      position="fixed"
      boxshadow={3}
      color="primary"
      className={classes.header}
    >
      <Toolbar variant="dense" className={classes.toolbar}>
        <Link to="/" style={{ color: "#fff", cursor: "pointer" }}>
          <Typography variant="h5" className="h5">
            | Hyper-Personalization (Your Personal Interests)
          </Typography>
        </Link>
        <Stack direction={"row"}>
          <Typography component={"span"}>Welcome </Typography>
          <div
            style={{
              color: "white",
              textTransform: "capitalize",
              marginLeft: 5,
              marginRight: 10,
            }}
          >
            {username}
          </div>
          <ColoredAvatar />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
