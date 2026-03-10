import React from 'react';
import { Box, Container, Typography, Button, Grid, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import heroBg from '../assets/header_wood.jpg';

const Hero = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        pt: { xs: 10, md: 15 },
        pb: { xs: 8, md: 12 },
        backgroundImage: `linear-gradient(rgba(44, 37, 32, 0.85), rgba(44, 37, 32, 0.9)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography variant="h5" color="secondary.light" gutterBottom>
              Supervision &middot; Consulting &middot; Therapy
            </Typography>
            <Typography variant="h1" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, color: '#FFF' }}>
              Integrated Relational Dynamics, PLLC
            </Typography>
            <Typography variant="h4" sx={{ fontStyle: 'italic', mb: 3, fontWeight: 400, color: 'secondary.light' }}>
              Clarity without coercion.
            </Typography>
            <Stack spacing={2} sx={{ mb: 4, maxWidth: '600px' }}>
              <Typography variant="body1">
                Supervision grounded in ethical judgment and responsible action &mdash; without pressure toward predetermined outcomes.
              </Typography>
              <Typography variant="body1">
                Best fit when the next step is clear but seems challenging &mdash; because the cost is real, the stakes are high, or the system is strained.
              </Typography>
            </Stack>
            <Button
              component={RouterLink}
              to="/supervision-fit"
              variant="contained"
              size="large"
              sx={{
                bgcolor: '#FFF',
                color: 'primary.main',
                '&:hover': { bgcolor: '#F0F0F0' },
                fontSize: '1rem',
                py: 2,
                px: 4
              }}
            >
              Request a Supervision Fit Consult &rarr;
            </Button>
            <Box sx={{ mt: 4, display: 'flex', gap: 3 }}>
              <LinkRouter to="/therapy" label="Explore Therapy &rarr;" />
              <LinkRouter to="/consulting" label="Explore Consulting &rarr;" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const LinkRouter = ({ to, label }) => (
  <Typography
    component={RouterLink}
    to={to}
    sx={{
      color: 'secondary.light',
      textDecoration: 'none',
      fontSize: '0.85rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      '&:hover': { color: '#FFF', textDecoration: 'underline' }
    }}
  >
    {label}
  </Typography>
);

export default Hero;
