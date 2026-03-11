import { memo } from 'react';
import { Box, Container, Typography, Button, Stack, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const HERO_SECTION_STYLES = {
  bgcolor: 'background.default',
  color: 'text.primary',
  pt: { xs: 15, md: 20 },
  pb: { xs: 12, md: 15 },
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden'
};

const CONSULT_BUTTON_STYLES = {
  mt: 4,
  mb: 2
};

const SUBTITLE_STYLES = { 
  letterSpacing: '0.2em', 
  fontWeight: 600, 
  color: 'secondary.main',
  mb: 3
};

const TITLE_STYLES = { 
  fontSize: { xs: '2.5rem', md: '4.5rem' }, 
  fontWeight: 500,
  mb: 2,
  maxWidth: '900px',
  mx: 'auto'
};

const NAME_STYLES = { 
  color: 'text.secondary', 
  fontWeight: 400, 
  fontSize: { xs: '1.2rem', md: '1.5rem' },
  fontStyle: 'italic',
  mb: 4
};

const Hero = () => {
  return (
    <Box sx={HERO_SECTION_STYLES}>
      <Container maxWidth="lg">
        <Typography variant="h5" sx={SUBTITLE_STYLES}>
          Supervision · Consulting · Therapy
        </Typography>
        
        <Typography variant="h1" sx={TITLE_STYLES}>
          Integrated Relational Dynamics
        </Typography>
        
        <Typography variant="h4" sx={NAME_STYLES}>
          Kotia K. Whitaker, LMFT-S
        </Typography>

        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={3} 
          justifyContent="center" 
          alignItems="center"
          sx={{ mt: 6 }}
        >
          <Button
            component={RouterLink}
            to="/supervision-fit"
            variant="contained"
            size="large"
            sx={CONSULT_BUTTON_STYLES}
            aria-label="Request a Supervision Fit Consultation"
          >
            Request a Consultation
          </Button>
        </Stack>
        
        <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
          <LinkRouter to="/therapy" label="Therapy &rarr;" />
          <LinkRouter to="/consulting" label="Consulting &rarr;" />
          <LinkRouter to="/supervision" label="Supervision &rarr;" />
        </Box>
      </Container>
    </Box>
  );
};

const LinkRouter = memo(({ to, label }) => (
  <Link
    component={RouterLink}
    to={to}
    aria-label={label}
    sx={{
      color: 'text.secondary',
      textDecoration: 'none',
      fontSize: '0.85rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      borderBottom: '1px solid transparent',
      pb: 0.5,
      transition: 'all 0.3s ease',
      '&:hover': { 
        color: 'primary.main', 
        borderColor: 'primary.main' 
      }
    }}
  >
    {label}
  </Link>
));

LinkRouter.displayName = 'LinkRouter';

export default memo(Hero);
