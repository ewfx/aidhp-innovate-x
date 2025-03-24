import React from 'react';
import { Container, Grid, Paper, Typography, TextField, Button } from '@mui/material';

const HelpAndSupportPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
  };

  
  return (
    <Container maxWidth="md">
      <Paper style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h5" gutterBottom>
        
        </Typography>
        <Typography variant="body1">
        <h3>Contact Information</h3>
            <p>Email: helpandsupport@2024.com</p>
            <p>Phone: +917890851263</p>
            
        <h3>Working Hours</h3>
            <p>Monday - Friday: 10:00 AM to 5:00 PM</p>
            <p>Saturday - Sunday: Closed</p>

        </Typography>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Support
            </Typography>
            <Typography variant="body1">
              If you need any help or have any questions, please feel free to contact us.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Submit a Query
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="name"
                label="Name"
                name="name"
                aria-label="Name"
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                aria-label="Email Address"
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="query"
                label="Your Query"
                name="query"
                multiline
                rows={4}
                aria-label="Your Query"
              />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HelpAndSupportPage;
