import { Box, Container, Typography, Divider, TextField, Button, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const PAGE_WRAPPER_STYLES = { py: { xs: 12, md: 18 }, bgcolor: 'background.default' };
const PAGE_TITLE_STYLES = { 
  textAlign: 'center',
  mb: 2, 
  fontSize: { xs: '2.5rem', md: '4rem' },
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: -20,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 80,
    height: 1,
    bgcolor: 'primary.main',
    opacity: 0.2
  }
};
const STATUS_SUBTITLE_STYLES = { 
  textAlign: 'center',
  mb: 10, 
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  fontSize: '0.85rem',
  color: 'secondary.main',
  mt: 4
};
const CONTENT_CONTAINER_STYLES = { maxWidth: '800px', mx: 'auto' };

const SupervisionFitPage = () => {
  return (
    <Box sx={PAGE_WRAPPER_STYLES}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Button 
            component={RouterLink} 
            to="/" 
            sx={{ 
              color: 'text.secondary', 
              fontSize: '0.75rem', 
              letterSpacing: '0.1em',
              '&:hover': { color: 'primary.main', bgcolor: 'transparent', textDecoration: 'underline' }
            }}
          >
            &larr; Back to Home
          </Button>
        </Box>

        <Typography variant="h1" sx={PAGE_TITLE_STYLES}>
          Fit Consult
        </Typography>
        <Typography variant="h5" sx={STATUS_SUBTITLE_STYLES}>
          Request a consultation
        </Typography>

        <Box sx={{ mt: 10 }}>
          <Box sx={CONTENT_CONTAINER_STYLES}>
            <Section title="What this is">
              <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.9, fontWeight: 300, mb: 4 }}>
                A Supervision Fit Consult is a structured conversation to confirm alignment and establish the supervision frame.
              </Typography>
            </Section>

            <Divider sx={{ my: 10, opacity: 0.1 }} />

            <Box sx={{ maxWidth: '600px', mx: 'auto' }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Name" variant="standard" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email" variant="standard" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth multiline rows={4} label="Brief summary of your clinical context" variant="standard" />
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ textAlign: 'center', mt: 6 }}>
                    <Button 
                      variant="contained" 
                      size="large" 
                      sx={{ px: 8, py: 2 }}
                      href="mailto:integrated.relational.dynamics@gmail.com?subject=Supervision Fit Consult Inquiry"
                    >
                      Inquire via Email &rarr;
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const Section = ({ title, children }) => (
  <Box component="section" sx={{ mb: 8 }}>
    <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 600, mb: 3, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{title}</Typography>
    {children}
  </Box>
);

export default SupervisionFitPage;
