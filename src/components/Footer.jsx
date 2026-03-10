import React from 'react';
import { Box, Container, Typography, Grid, Link, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Element } from 'react-scroll';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, borderTop: '1px solid #E0D8D0' }}>
      <Container maxWidth="lg">
        <Element name="contact">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom sx={{ fontSize: '1.75rem' }}>
                Contact & Boundaries
              </Typography>
              <Typography variant="body1" paragraph>
                This work is grounded in clear limits that protect supervision and sound clinical judgment. Communication boundaries are defined. Crisis coverage is not provided. Therapy or supervision is not used as leverage in relational conflict.
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>Telehealth (Texas)</Typography>
                <Typography variant="body2">Private pay &middot; Superbills available (reimbursement not guaranteed)</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
               <Box sx={{ bgcolor: '#F9F7F5', p: 4, border: '1px solid #E0D8D0' }}>
                <Typography variant="h5" gutterBottom>Logistics</Typography>
                <Typography variant="body2" paragraph><strong>Supervision and Consulting:</strong> Now accepting.</Typography>
                <Typography variant="body2" paragraph><strong>Therapy:</strong> Begins October 2026.</Typography>
                <Typography variant="body2" paragraph>Email inquiries only (for now)</Typography>
                <Typography variant="body2" color="text.secondary">Not for emergencies (no crisis services)</Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  <Link href="mailto:integrated.relational.dynamics@gmail.com" color="primary" sx={{ textDecoration: 'none', borderBottom: '1px solid', pb: 0.5 }}>
                    integrated.relational.dynamics@gmail.com
                  </Link>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Element>

        <Divider sx={{ my: 6, borderColor: '#EEE' }} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Link component={RouterLink} to="/policies" sx={{ fontSize: '0.85rem', color: 'text.secondary', textDecoration: 'none' }}>Policies</Link>
            <Link component={RouterLink} to="/fees" sx={{ fontSize: '0.85rem', color: 'text.secondary', textDecoration: 'none' }}>Fees</Link>
            <Link component={RouterLink} to="/resources" sx={{ fontSize: '0.85rem', color: 'text.secondary', textDecoration: 'none' }}>Resources</Link>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
            &copy; {new Date().getFullYear()} Integrated Relational Dynamics, PLLC. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
