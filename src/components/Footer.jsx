import React from 'react';
import { Box, Container, Typography, Grid, Link, Divider, Stack } from '@mui/material';
import { useNavigate, useLocation, Link as RouterLink } from 'react-router-dom';
import { scroller } from 'react-scroll';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (target) => {
    if (location.pathname !== '/') {
      navigate('/?scroll=' + target);
    } else {
      scroller.scrollTo(target, {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -70
      });
    }
  };

  return (
    <Box component="footer" id="contact" sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, borderTop: '1px solid #E0D8D0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom sx={{ fontSize: '1.75rem', fontWeight: 600 }}>
              Contact
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary" sx={{ maxWidth: '90%' }}>
              This work is grounded in clear limits that protect supervision and sound clinical judgment. Communication boundaries are defined. Crisis coverage is not provided. Therapy or supervision is not used as leverage in relational conflict.
            </Typography>
            <Typography variant="body2" color="text.primary" sx={{ fontWeight: 600, mt: 2 }}>
              Telehealth (Texas)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Private pay &middot; Superbills available (reimbursement not guaranteed)
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ bgcolor: '#F9F7F5', p: 4, border: '1px solid #E0D8D0' }}>
              <Stack spacing={2}>
                <Typography variant="body1">
                  <strong>Supervision and Consulting:</strong> accepting now.
                </Typography>
                <Typography variant="body1">
                  <strong>Therapy:</strong> begins October 2026.
                </Typography>
                <Divider />
                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                  Email inquiries only (for now)
                </Typography>
                <Typography variant="body2" color="error.main" sx={{ fontWeight: 600 }}>
                  Not for emergencies (no crisis services)
                </Typography>
                <Link
                  href="mailto:integrated.relational.dynamics@gmail.com"
                  sx={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'primary.main',
                    textDecoration: 'underline'
                  }}
                >
                  integrated.relational.dynamics@gmail.com
                </Link>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Stack direction="row" spacing={3}>
            <FooterLink to="/policies" label="Policies" />
            <FooterLink to="/fees" label="Fees" />
            <FooterLink to="/resources" label="Resources" />
            <Link 
              component="button"
              onClick={() => handleNavClick('contact')}
              sx={{ 
                fontSize: '0.85rem', 
                color: 'text.secondary', 
                cursor: 'pointer',
                textDecoration: 'none', 
                '&:hover': { color: 'primary.main' } 
              }}
            >
              Contact
            </Link>
          </Stack>
          
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
            &copy; {new Date().getFullYear()} Integrated Relational Dynamics, PLLC. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

const FooterLink = ({ to, label }) => (
  <Link
    component={RouterLink}
    to={to}
    sx={{
      fontSize: '0.85rem',
      color: 'text.secondary',
      textDecoration: 'none',
      '&:hover': { color: 'primary.main' }
    }}
  >
    {label}
  </Link>
);

export default Footer;
