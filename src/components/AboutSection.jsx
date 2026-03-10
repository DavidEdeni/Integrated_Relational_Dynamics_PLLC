import React from 'react';
import { Box, Container, Typography, Grid, List, ListItem, ListItemText, Stack, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import hourglassImg from '../assets/hourglass.jpg';

const AboutSection = () => {
  const strongFit = [
    "Clear supervision frame: goals, expectations, boundaries",
    "Conceptualization support that holds under pressure",
    "Documentation strength (clarity, risk thinking, defensibility)",
    "Ethical judgment when roles and stakes collide",
    "A steady pace: responsibility over urgency"
  ];

  const notFit = [
    "Crisis supervision or on-demand availability",
    "A supervisor who co-signs decisions without reasoning",
    "Shortcut notes, templates-as-cover, or outcome guarantees",
    "Supervision used to pressure someone else",
    "A plan built on urgency rather than ownership"
  ];

  return (
    <Box component="section" id="about" sx={{ py: 12, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={hourglassImg}
              alt="Hourglass with dark sand"
              sx={{ width: '100%', height: 'auto', border: '1px solid #E0D8D0', filter: 'sepia(10%) contrast(95%)' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom sx={{ mb: 4 }}>
              About / Supervision Fit
            </Typography>
            
            <Typography variant="h3" sx={{ fontSize: '1.5rem', mb: 2, fontWeight: 600 }}>
              Strong fit if you want
            </Typography>
            <List sx={{ mb: 4 }}>
              {strongFit.map((item, idx) => (
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

            <Typography variant="h3" sx={{ fontSize: '1.5rem', mb: 2, fontWeight: 600 }}>
              May not be a fit if you need
            </Typography>
            <List sx={{ mb: 4 }}>
              {notFit.map((item, idx) => (
                <ListItem key={idx} disableGutters sx={{ alignItems: 'flex-start' }}>
                  <ListItemText
                    primary={
                      <Typography variant="body2" sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center' }}>
                         <Box component="span" sx={{ mr: 2, color: 'error.main' }}>—</Box> {item}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>

            <Typography variant="body1" sx={{ mt: 2, fontWeight: 600 }}>
              If this isn't the right fit, I'll help you identify a better match.
            </Typography>
            <Button
              component={RouterLink}
              to="/supervision-fit"
              variant="text"
              sx={{ mt: 2, p: 0, textDecoration: 'underline', '&:hover': { textDecoration: 'none' } }}
            >
              Request a Supervision Fit Consult &rarr;
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
