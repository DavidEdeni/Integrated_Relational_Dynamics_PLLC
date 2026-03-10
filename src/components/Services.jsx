import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button, Stack, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Supervision (Primary)",
      description: "Ethical judgment under pressure: conceptualization, documentation strength, boundary clarity, and responsibility when costs rise.",
      status: "Accepting now (telehealth).",
      isPrimary: true,
      exploreLink: "/supervision"
    },
    {
      title: "Therapy (Link only)",
      description: "Structured, values-informed psychotherapy for adults, couples, and adolescents navigating anxiety, burnout, conflict cycles, and high-stakes decisions — without outcome guarantees.",
      status: "Begins October 2026 (telehealth).",
      isPrimary: false,
      exploreLink: "/therapy"
    },
    {
      title: "Consulting (Link only)",
      description: "Consulting for individuals or organizations navigating role clarity, decision pressure, and responsibility under strain — especially when decisions feel high-stakes or stuck.",
      status: "Accepting now (remote).",
      isPrimary: false,
      exploreLink: "/consulting"
    }
  ];

  return (
    <Box component="section" id="services" sx={{ py: 12, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom align="center" sx={{ mb: 6 }}>
          Services
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, idx) => (
            <Grid item xs={12} md={idx === 0 ? 12 : 6} lg={4} key={idx}>
              <Paper
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: service.isPrimary ? '2px solid #2C2520' : '1px solid #E0D8D0',
                  boxShadow: service.isPrimary ? '0 10px 30px rgba(0,0,0,0.05)' : 'none',
                }}
              >
                <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem', mb: 2 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 3, flexGrow: 1, color: 'text.secondary' }}>
                  {service.description}
                </Typography>
                <Typography variant="body2" sx={{ mb: 3, fontWeight: 600 }}>
                  {service.status}
                </Typography>
                <Stack spacing={2}>
                  {service.isPrimary ? (
                    <>
                      <Button
                        component={RouterLink}
                        to="/supervision-fit"
                        variant="contained"
                        fullWidth
                      >
                        Request a Supervision Fit Consult &rarr;
                      </Button>
                      <Button
                        component={RouterLink}
                        to={service.exploreLink}
                        variant="outlined"
                        fullWidth
                      >
                        Explore Supervision &rarr;
                      </Button>
                    </>
                  ) : (
                    <Button
                      component={RouterLink}
                      to={service.exploreLink}
                      variant="outlined"
                      fullWidth
                    >
                      Explore {service.title.split(' (')[0]} &rarr;
                    </Button>
                  )}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
