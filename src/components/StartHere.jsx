import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import spheresImg from '../assets/spheres.jpg';

const StartHere = () => {
  const steps = [
    { title: "Step 1 — Brief screening meeting (10–15 minutes)", text: "A short fit and logistics check. Not supervision or case consultation. Held via secure video (Zoom) or by phone if requested." },
    { title: "Step 2 — Supervision Fit Consult (45–60 minutes)", text: "A structured conversation to confirm fit and establish a clear supervision frame." }
  ];

  const expectations = [
    "Goals + context clarified (setting, population, requirements, constraints)",
    "Conceptualization habits + stuck points (not a performance evaluation)",
    "Documentation focus: what notes must do and how to tighten them",
    "Boundaries + ethics under pressure (role strain, competing obligations, risk)",
    "Proposed cadence + expectations (if fit is confirmed)"
  ];

  return (
    <Box component="section" sx={{ py: 12, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom align="center" sx={{ mb: 6 }}>
          Start Here: Supervision Fit
        </Typography>
        
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {steps.map((step, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Paper sx={{ p: 4, height: '100%', border: '1px solid #E0D8D0', textAlign: 'center' }}>
                <Typography variant="h5" color="primary" gutterBottom sx={{ fontSize: '1.2rem', fontWeight: 600 }}>
                   {step.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {step.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="h3" sx={{ fontSize: '1.75rem', mb: 3 }}>
              You can expect
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 600, mb: 2 }}>
              If fit is confirmed, ongoing supervision can begin right away.
            </Typography>
            <List>
              {expectations.map((item, idx) => (
                <ListItem key={idx} disableGutters sx={{ alignItems: 'flex-start' }}>
                  <ListItemText
                    primary={
                      <Typography variant="body2" sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center' }}>
                         <Box component="span" sx={{ mr: 2, color: 'primary.main' }}>—</Box> {item}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2, fontStyle: 'italic' }}>
               Optional: Fit Summary (1 page), emailed within 48–72 hours (if requested).
            </Typography>
            <Box sx={{ mt: 4, p: 2, borderLeft: '4px solid #2C2520', bgcolor: 'background.default' }}>
               <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                 Stopping point: This work is not used to create leverage. It is used to create clarity.
               </Typography>
            </Box>
            <Button
              component={RouterLink}
              to="/supervision-fit"
              variant="contained"
              size="large"
              sx={{ mt: 4 }}
            >
              Request a Supervision Fit Consult &rarr;
            </Button>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src={spheresImg}
              alt="Wooden Spheres of Different Sizes"
              sx={{ width: '100%', height: 'auto', border: '1px solid #E0D8D0', filter: 'sepia(10%) contrast(95%)' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StartHere;
