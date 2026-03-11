import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2D2926', // Charcoal/Dark Brown
      contrastText: '#F2EFE9',
    },
    secondary: {
      main: '#6D5D50', // Muted Brown
      light: '#A89E94',
    },
    background: {
      default: '#F2EFE9', // Sophisticated Creme
      paper: '#FDFCFB',
    },
    text: {
      primary: '#2D2926',
      secondary: '#6D5D50',
    },
    divider: '#E0D8D0',
  },
  typography: {
    fontFamily: '"Inter", "system-ui", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
      letterSpacing: '-0.01em',
      color: '#2D2926',
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
      color: '#2D2926',
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
      color: '#2D2926',
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
    },
    h5: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      fontSize: '0.85rem',
      color: '#6D5D50',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.8,
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.95rem',
      lineHeight: 1.7,
      fontWeight: 400,
    },
    button: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 500,
      textTransform: 'none',
      letterSpacing: '0.05em',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#F2EFE9',
          color: '#2D2926',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '2px',
          padding: '14px 32px',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        containedPrimary: {
          backgroundColor: '#2D2926',
          '&:hover': {
            backgroundColor: '#000000',
            transform: 'translateY(-1px)',
          },
        },
        outlinedPrimary: {
          borderColor: '#2D2926',
          color: '#2D2926',
          '&:hover': {
            backgroundColor: 'rgba(45, 41, 38, 0.04)',
            borderColor: '#000000',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '2px',
        },
      },
    },
  },
});

export default theme;
