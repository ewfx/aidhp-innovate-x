import React from 'react';
import { Container, Grid, Paper, Typography, TextField, Button, Box } from '@mui/material';

const HelpAndSupportPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
  };

  return (
    <Container maxWidth="md">
      <Paper style={{ padding: '20px', marginBottom: '20px', backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" gutterBottom>
          Help & Support
        </Typography>
        <Box mb={2}>
          <Typography variant="h6">Contact Information</Typography>
          <Typography variant="body1">Email: helpandsupport@2025.com</Typography>
          <Typography variant="body1">Phone: +123456789</Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="h6">Working Hours</Typography>
          <Typography variant="body1">Monday - Friday: 10:00 AM to 5:00 PM</Typography>
          <Typography variant="body1">Saturday - Sunday: Closed</Typography>
        </Box>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper style={{ padding: '20px', backgroundColor: '#e0f7fa' }}>
            <Typography variant="h6" gutterBottom>
              Support
            </Typography>
            <Typography variant="body1">
              If you need any help or have any questions, please feel free to contact us.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper style={{ padding: '20px', backgroundColor: '#e0f7fa' }}>
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
              <Button type="submit" variant="contained" color="primary" fullWidth>
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