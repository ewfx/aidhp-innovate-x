import React from 'react';
import { Container, Grid, Paper, Typography, Card, CardContent, CardMedia, Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useSpring, animated } from 'react-spring';
import Carousel from 'react-material-ui-carousel';
import bannerImage1 from "../../imageassets/B-1.jpeg";
import bannerImage2 from "../../imageassets/B-2.jpeg";
import product1 from "../../imageassets/B-3.jpeg";
import product2 from "../../imageassets/B-4.jpeg";
import product3 from "../../imageassets/B-5.jpeg";

const AnimatedCard = styled(animated(Card))({
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  '&:hover': {
    background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
    boxShadow: '0 6px 10px 4px rgba(255, 105, 135, .3)',
  },
}));

const HomePage = () => {
  const springProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ mb: 4 }}>
        <Carousel>
          <CardMedia component="img" height="400" image={bannerImage1} alt="Banner 1" />
          <CardMedia component="img" height="400" image={bannerImage2} alt="Banner 2" />
        </Carousel>
      </Paper>
      <Typography variant="h4" gutterBottom align="center">
        Categories
      </Typography>
      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={4}>
          <StyledPaper elevation={3}>
            <Typography variant="h6">Shopping</Typography>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StyledPaper elevation={3}>
            <Typography variant="h6">Travel</Typography>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StyledPaper elevation={3}>
            <Typography variant="h6">LUX Apparels</Typography>
          </StyledPaper>
        </Grid>
      </Grid>
      <Typography variant="h4" gutterBottom align="center">
        Featured Products
      </Typography>
      <Grid container spacing={4}>
        {[product1, product2, product3].map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <AnimatedCard style={springProps}>
              <CardMedia component="img" height="300" image={product} alt={`Product ${index + 1}`} />
              <CardContent>
                <Typography variant="h6">Product {index + 1}</Typography>
                <Typography variant="body2" color="textSecondary">
                  check out our recommendation {index + 1}
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Buy Now
                </Button>
              </CardContent>
            </AnimatedCard>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 4, p: 2, backgroundColor: '#f5f5f5', textAlign: 'center' }}>
        <Typography variant="body2" color="textSecondary">
          &copy; 2025 Your Company. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;