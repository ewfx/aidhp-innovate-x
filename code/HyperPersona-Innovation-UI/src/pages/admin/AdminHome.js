import React from "react";
import { makeStyles } from "@mui/styles";
import { Card, CardContent, Typography, Grid, Paper, Box } from "@mui/material";
import { styled } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundColor: "#f0f0f0",
  },
  card: {
    minWidth: 150,
    height: 150,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    border: "1px solid #ddd",
    cursor: "pointer",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
    },
  },
  cardContent: {
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    fontFamily: "Arial, sans-serif",
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
  boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
  "&:hover": {
    background: "linear-gradient(45deg, #21CBF3 30%, #2196F3 90%)",
    boxShadow: "0 6px 10px 4px rgba(33, 203, 243, .3)",
  },
}));

const AdminPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {["Configuration", "User Management", "Product Management", "Analytics", "Feedback", "Campaigns", "System Logs", "Account Settlement", "MOM"].map((option, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography variant="h5" component="h2" className={classes.title}>
                  {option}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 4, p: 2, backgroundColor: "#e0e0e0", textAlign: "center", borderRadius: 8 }}>
        <Typography variant="body2" color="textSecondary">
          &copy; 2025 Your Company. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
};

export default AdminPage;