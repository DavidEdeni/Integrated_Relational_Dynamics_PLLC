import React from 'react';
import { Box, Container, Typography, Grid, Link, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Element } from 'react-scroll';

const Footer = () => {
  return (
    <Box component="footer" id="contact" sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, borderTop: '1px solid #E0D8D0' }}>
      <Container maxWidth="lg">
        <Element name="contact">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom sx={{ fontSize: '1.75rem', fontWeight: 600 }}>
                Boundaries & Logistics
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary">
                This practice is built on a frame of clarity before action. Communication is handled via email only. Crisis coverage is not provided. Services are provided via secure telehealth for individuals, clinicians, and organizations navigating responsibility under pressure.
              </Typography>
               <Typography variant="body2" sx={{ fontWeight: 600, mt: 2 }}>
                Telehealth (Texas & Colorado as applicable)
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
               <Box sx={{ bgcolor: '#F9F7F5', p: 4, border: '1px solid #E0D8D0' }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>Inquiries</Typography>
                <Typography variant="body2" paragraph><strong>Supervision/Consulting:</strong> Accepting now.</Typography>
                <Typography variant="body2" paragraph><strong>Therapy:</strong> Begins Oct 2026.</Typography>
                <Typography variant="body2" paragraph sx={{ fontStyle: 'italic' }}>Note: Email inquiries only (no phone screen at this stage).</Typography>
                
                <Typography variant="body2" sx={{ mt: 2 }}>
                  <Link 
                    href="mailto:integrated.relational.dynamics@gmail.com" 
                    color="primary" 
                    sx={{ fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid', pb: 0.5 }}
                  >
                    integrated.relational.dynamics@gmail.com
                  </Link>
                </Typography>
                 <Typography variant="body2" color="error.main" sx={{ mt: 2, fontSize: '0.75rem' }}>
                  No PHI (Protected Health Information) via email. 
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Element>

        <Divider sx={{ my: 6, borderColor: '#EEE' }} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Link component={RouterLink} to="/policies" sx={{ fontSize: '0.85rem', color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>Policies</Link>
            <Link component={RouterLink} to="/fees" sx={{ fontSize: '0.85rem', color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>Fees</Link>
            <Link component={RouterLink} to="/resources" sx={{ fontSize: '0.85rem', color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>Resources</Link>
            <Link 
               component="a" 
               href="mailto:integrated.relational.dynamics@gmail.com"
               sx={{ fontSize: '0.85rem', color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
            >
              Contact
            </Link>
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
