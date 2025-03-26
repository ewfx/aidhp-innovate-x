import React from 'react';
import { Container, Grid, Paper, Typography, Card, CardContent, CardMedia, Box, Button, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import { useSpring, animated } from 'react-spring';
import society1 from "../../imageassets/luxury-bag_1.jpeg";
import society2 from "../../imageassets/luxury-bag_2.jpeg";
import society3 from "../../imageassets/luxury-bag_3.jpeg";
import LA1 from "../../imageassets/LA-1.jpeg";
import LA2 from "../../imageassets/LA-2.jpeg";
import LA3 from "../../imageassets/LA-3.jpeg";
import TL1 from "../../imageassets/TL-1.jpeg";
import TL2 from "../../imageassets/TL-2.jpeg";
import TL3 from "../../imageassets/TL-3.jpeg";

const recommendations = {
  shoppingBags: [
    { title: 'Gucci', description: 'Upto 5% Off', image: society1 },
    { title: 'Lavie', description: 'Upto 30% Off', image: society2 },
    { title: 'Caprese', description: 'Upto 10% Off', image: society3 },
  ],
  apparels: [
    { title: 'LUX Cloth', description: 'Grab New stocks,Hurry!!', image: LA1 },
    { title: 'LUX Jewels', description: 'Upto 2% off in making charge', image: LA2 },
    { title: 'LUX Jewels', description: 'Upto 2% off in making charge', image: LA3 },
  ],
  travel: [
    { title: 'LUX Travel', description: 'Its time to pack your bags!!', image: TL1 },
    { title: 'LUX Travel', description: 'Peace and calm', image: TL2},
     { title: 'LUX Travel', description: 'Just get relaxed!!', image: TL3},
  ],
};

const AnimatedCard = styled(animated(Card))({
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const UserDashboard = () => {
  const springProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3, backgroundColor: '#e3f2fd' }}>
            <Typography variant="h5" gutterBottom>
              Recommendations for Luxury Shopping Bags
            </Typography>
            <Grid container spacing={3}>
              {recommendations.shoppingBags.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <AnimatedCard style={springProps}>
                    <CardMedia component="img" height="200" image={item.image} alt={item.title} />
                    <CardContent>
                      <Typography variant="h6">{item.title}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {item.description}
                      </Typography>
                      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                        Learn More
                      </Button>
                    </CardContent>
                  </AnimatedCard>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3, backgroundColor: '#e8f5e9' }}>
            <Typography variant="h5" gutterBottom>
              Recommendations for Luxury Apparels
            </Typography>
            <Grid container spacing={3}>
              {recommendations.apparels.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <AnimatedCard style={springProps}>
                    <CardMedia component="img" height="200" image={item.image} alt={item.title} />
                    <CardContent>
                      <Typography variant="h6">{item.title}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {item.description}
                      </Typography>
                      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                        Learn More
                      </Button>
                    </CardContent>
                  </AnimatedCard>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3, backgroundColor: '#fff3e0' }}>
            <Typography variant="h5" gutterBottom>
              Recommendations for Luxury Travel
            </Typography>
            <Grid container spacing={3}>
              {recommendations.travel.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <AnimatedCard style={springProps}>
                    <CardMedia component="img" height="200" image={item.image} alt={item.title} />
                    <CardContent>
                      <Typography variant="h6">{item.title}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {item.description}
                      </Typography>
                      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                        Learn More
                      </Button>
                    </CardContent>
                  </AnimatedCard>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserDashboard;