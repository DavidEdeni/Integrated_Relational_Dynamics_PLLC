import React from 'react';
import { Box, Container, Typography, Grid, List, ListItem, ListItemText, Divider } from '@mui/material';
import treeImg from '../assets/tree.jpg';

const HelpAreas = () => {
  const commonFitAreas = [
    { title: "Supervision:", text: "conceptualization under pressure, documentation strength, boundary clarity, ethical judgment when stakes rise" },
    { title: "Accountability dilemmas:", text: "insight present, but follow-through remains costly, disputed, or avoided" },
    { title: "Rupture patterns:", text: "apology without follow-through, repeated cycles, chronic strain" },
    { title: "High-stakes strain:", text: "burnout, shutdown, anxiety/depression linked to unresolved conflict or responsibility overload" },
    { title: "Consulting:", text: "role clarity, decision pressure, and responsibility when a system is strained" }
  ];

  return (
    <Box component="section" id="helps" sx={{ py: 12, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={treeImg}
              alt="Deep Rooted Tree"
              sx={{ width: '100%', height: 'auto', border: '1px solid #E0D8D0', filter: 'sepia(20%) contrast(90%)' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 4, color: 'text.secondary' }}>
              This work helps clinicians and clients name what is true, clarify what they are responsible for carrying, and identify sustainable next steps &mdash; without coercion, control, or performance pressure.
            </Typography>
            <Typography variant="h3" gutterBottom sx={{ fontSize: '1.75rem', fontWeight: 600 }}>
              Common fit areas
            </Typography>
            <List sx={{ mb: 4 }}>
              {commonFitAreas.map((area, idx) => (
                <ListItem key={idx} disableGutters sx={{ alignItems: 'flex-start' }}>
                  <ListItemText
                    primary={
                      <Typography variant="body2" sx={{ fontWeight: 600, color: 'primary.main' }}>
                        {area.title}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {area.text}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
            <Divider sx={{ my: 3 }} />
            <Typography variant="h5" color="error.main" sx={{ fontSize: '1.1rem', mb: 1 }}>
              Not a fit
            </Typography>
            <Typography variant="body2">
              Quick leverage, forced compliance, or outcome guarantees.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HelpAreas;
