import React from 'react';
import { Box, Container, Typography, Grid, Paper, Link, Stack, Divider } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const ResourcesPage = () => {
  const resources = [
    { title: "Accountability Map", description: "A framework for navigating role clarity and responsibility under pressure.", link: "/assets/accountability-map.pdf" },
    { title: "Repair-Labor Audit", description: "Tools for evaluating high-stakes rupture patterns and follow-through.", link: "/assets/repair-labor-audit.pdf" }
  ];

  return (
    <Box sx={{ py: 12, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography variant="h1" gutterBottom sx={{ mb: 6 }}>
          Resource Library
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 8 }}>
          A selection of tools and frameworks for clinicians and clients navigating complex relational dynamics and high-stakes decisions.
        </Typography>

        <Grid container spacing={4}>
          {resources.map((res, idx) => (
            <Grid item xs={12} key={idx}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  border: '1px solid #E0D8D0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 4,
                  transition: 'background-color 0.2s ease',
                  '&:hover': { bgcolor: 'rgba(0,0,0,0.02)' }
                }}
              >
                <Box>
                  <Typography variant="h3" sx={{ fontSize: '1.5rem', mb: 1 }}>
                    {res.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {res.description}
                  </Typography>
                </Box>
                <Link
                  href={res.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    fontSize: '0.8rem',
                    color: 'primary.main',
                    textDecoration: 'none',
                    borderBottom: '1px solid currentColor',
                    pb: 0.5
                  }}
                >
                  <PictureAsPdfIcon fontSize="small" /> Download PDF
                </Link>
              </Paper>
            </Grid>
          ))}
        </Grid>
        
        <Divider sx={{ my: 8 }} />
        
        <Typography variant="body2" color="text.secondary" align="center">
          More resources coming in late 2026.
        </Typography>
      </Container>
    </Box>
  );
};

export default ResourcesPage;
