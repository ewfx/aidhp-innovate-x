import React from "react";
import { makeStyles } from "@mui/styles";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  card: {
    minWidth: 10,
    height: 100,
    backgroundColor: "white",
    borderRadius: 0,
    border: "1px solid #000",
    cursor: "pointer",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  cardContent: {
    textAlign: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "Arial",
  },
}));

const AdminPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={2}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h5" component="h2" className={classes.title}>
                Configuration
              </Typography>
              {/* Add Configuration*/}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={2}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h5" component="h2" className={classes.title}>
                User settlement
              </Typography>
              {/* Add User settlement*/}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={2}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h5" component="h2" className={classes.title}>
                Account settlement
              </Typography>
              {/* Add Account settlement */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={2}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h5" component="h2" className={classes.title}>
                MOM
              </Typography>
              {/* Add MOM */}
            </CardContent>
          </Card>
        </Grid>
        {/* Add other Grid items similarly */}
      </Grid>
      <Grid item xs={10}>
        <Paper
          sx={{
            p: 12,
            display: "flex",
            flexDirection: "column",
            border: "2px light grey",
          }}
        ></Paper>
      </Grid>
    </div>
  );
};

export default AdminPage;
