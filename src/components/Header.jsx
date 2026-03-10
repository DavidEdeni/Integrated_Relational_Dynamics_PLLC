import React from 'react';
import { AppBar, Toolbar, Box, Container } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/logo.jpg';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const NavItem = ({ to, label, isScrollLink }) => (
    <Box sx={{ ml: 4 }}>
      {isScrollLink && isHome ? (
        <ScrollLink
          to={to}
          smooth={true}
          duration={500}
          offset={-70}
          style={{ cursor: 'pointer', fontSize: '0.85rem', fontWeight: 500, color: '#4A4A4A', textDecoration: 'none', transition: 'color 0.2s ease', '&:hover': { color: '#1A1A1A' }}}
        >
          {label}
        </ScrollLink>
      ) : (
        <RouterLink
          to={isScrollLink ? `/#${to}` : to}
          style={{ fontSize: '0.85rem', fontWeight: 500, color: '#4A4A4A', textDecoration: 'none', transition: 'color 0.2s ease', '&:hover': { color: '#1A1A1A' }}}
        >
          {label}
        </RouterLink>
      )}
    </Box>
  );

  return (
    <AppBar position="sticky" color="default" elevation={0} sx={{ borderBottom: '1px solid #E0D8D0', background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(8px)' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
             <Box
              component="img"
              src={logo}
              alt="IRD Logo"
              sx={{ height: 40, mr: 2, filter: 'grayscale(30%)' }}
            />
            {/* Optional text-based logo title could go here if logo is image-only, but the provided IRD logo is quite complete */}
          </Box>
          <Box component="nav" sx={{ display: 'flex', alignItems: 'center' }}>
            <NavItem to="services" label="Services" isScrollLink />
            <NavItem to="about" label="About" isScrollLink />
            <NavItem to="contact" label="Contact" isScrollLink />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
