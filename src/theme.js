import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2C2520', // Deep Charcoal/Wood
      contrastText: '#F5F5F5',
    },
    secondary: {
      main: '#5D544B', // Muted Earth Tone
      light: '#A89E94',
    },
    background: {
      default: '#FDFCFB', // Very light parchment/warm grey
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#4A4A4A',
    },
    divider: '#E0D8D0',
  },
  typography: {
    fontFamily: '"Inter", "Source Sans Pro", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: '#2C2520',
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
      color: '#2C2520',
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
      color: '#2C2520',
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
    },
    h5: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontSize: '0.9rem',
      color: '#4A4A4A',
    },
    body1: {
      fontSize: '1.05rem',
      lineHeight: 1.7,
      fontWeight: 300,
    },
    body2: {
      fontSize: '0.95rem',
      lineHeight: 1.6,
      fontWeight: 300,
    },
    button: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 500,
      textTransform: 'none',
      letterSpacing: '0.05em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '12px 28px',
          transition: 'all 0.3s ease',
        },
        containedPrimary: {
          backgroundColor: '#2C2520',
          '&:hover': {
            backgroundColor: '#1A1A1A',
            opacity: 0.95,
          },
        },
        outlinedPrimary: {
          borderColor: '#2C2520',
          color: '#2C2520',
          '&:hover': {
            backgroundColor: '#F5F5F5',
            borderColor: '#1A1A1A',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 'none',
          border: '1px solid #E0D8D0',
        },
      },
    },
  },
});

export default theme;
