import makeStyles from "@mui/styles/makeStyles";
import { Grid } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "fixed",
    bottom: 0,
    marginLeft: "-1vh",
    backgroundColor: theme.palette.footer.main,
    color: "#131313",
    borderTop: "4px solid #fcc60a",
    alignItems: "center",
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.footer}>
      <Grid item xs={12} paddingLeft={0}>
        Developed by Team InnovateX {new Date().getFullYear()}
      </Grid>
    </Grid>
  );
};

export default Footer;
