import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemText, Divider, Button, Stack, Paper } from '@mui/material';

const SupervisionFitPage = () => {
  return (
    <Box sx={{ py: 12, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography variant="body2" color="secondary.light" sx={{ textTransform: 'uppercase', letterSpacing: '0.1em', mb: 1 }}>
          Integrated Relational Dynamics, PLLC &middot; Kotia K. Whitaker, LMFT-S
        </Typography>
        <Typography variant="h1" gutterBottom sx={{ mb: 6 }}>
          Supervision Fit Consult
        </Typography>

        <Paper elevation={0} sx={{ p: { xs: 4, md: 6 }, border: '1px solid #E0D8D0', bgcolor: 'background.paper' }}>
          <Box component="section" sx={{ mb: 6 }}>
            <Typography variant="h3" gutterBottom sx={{ fontSize: '1.75rem' }}>
              What this is
            </Typography>
            <Typography variant="body1">
              A Supervision Fit Consult is a structured fit-and-frame-setting conversation to confirm alignment and establish the supervision frame. It is not supervision and does not include case consultation.
            </Typography>
          </Box>

          <Box component="section" sx={{ mb: 6 }}>
            <Typography variant="h3" gutterBottom sx={{ fontSize: '1.75rem' }}>
              What we'll cover
            </Typography>
            <List>
              {[
                "Goals, setting, population, and requirements",
                "Conceptualization habits and current stuck points (not a performance evaluation)",
                "Documentation strength: what notes must do and where they can be tightened",
                "Boundaries and ethics under pressure (role strain, competing obligations, risk)",
                "Proposed cadence and expectations if fit is confirmed"
              ].map((item, idx) => (
                <ListItem key={idx} disableGutters sx={{ alignItems: 'flex-start' }}>
                  <ListItemText primary={<Typography variant="body2" color="text.secondary"><Box component="span" sx={{ mr: 2, color: 'primary.main' }}>—</Box> {item}</Typography>} />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box component="section" sx={{ mb: 6 }}>
            <Typography variant="h3" gutterBottom sx={{ fontSize: '1.75rem' }}>
              What to bring
            </Typography>
            <List>
              {[
                "Setting and population (context, role, constraints)",
                "License status and any supervision requirements (if applicable)",
                "1–2 brief examples of cases/situations to strengthen conceptualization for (no identifying details)",
                "Documentation questions (brief)",
                "Boundary/ethics scenarios (brief)"
              ].map((item, idx) => (
                <ListItem key={idx} disableGutters sx={{ alignItems: 'flex-start' }}>
                  <ListItemText primary={<Typography variant="body2" color="text.secondary"><Box component="span" sx={{ mr: 2, color: 'primary.main' }}>—</Box> {item}</Typography>} />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box component="section" sx={{ mb: 6 }}>
            <Typography variant="h3" gutterBottom sx={{ fontSize: '1.75rem' }}>
              Logistics
            </Typography>
            <List>
              {[
                "Duration: 45–60 minutes (telehealth)",
                "Private pay: Fee provided by email (or list later)",
                "Email inquiries only",
                "Cancellation/reschedule: 24 hours' notice requested to avoid a late-cancel fee"
              ].map((item, idx) => (
                <ListItem key={idx} disableGutters sx={{ alignItems: 'flex-start' }}>
                  <ListItemText primary={<Typography variant="body2" color="text.secondary"><Box component="span" sx={{ mr: 2, color: 'primary.main' }}>—</Box> {item}</Typography>} />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box component="section" sx={{ mb: 6 }}>
            <Typography variant="h3" gutterBottom sx={{ fontSize: '1.75rem', color: 'error.main' }}>
              Stopping points / not a fit
            </Typography>
            <List>
              {[
                "No crisis coverage or on-demand availability",
                "No outcome guarantees",
                "Supervision is not used as leverage"
              ].map((item, idx) => (
                <ListItem key={idx} disableGutters sx={{ alignItems: 'flex-start' }}>
                  <ListItemText primary={<Typography variant="body2" color="error.main"><Box component="span" sx={{ mr: 2 }}>—</Box> {item}</Typography>} />
                </ListItem>
              ))}
            </List>
          </Box>

          <Divider sx={{ my: 6 }} />

          <Box component="section">
            <Typography variant="h2" align="center" gutterBottom sx={{ fontSize: '2rem', mb: 3 }}>
              Request a Consult
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              To request a Supervision Fit Consult, please use the button below to draft an email with your initial information.
            </Typography>
            
            <Stack direction="row" justifyContent="center">
              <Button
                href="mailto:integrated.relational.dynamics@gmail.com?subject=Supervision Fit Consult Inquiry&body=Name:%0D%0ALicense Status / Supervision Requirements:%0D%0AClinical Setting / Population:%0D%0AAvailability for 10-15 min screening:%0D%0AAny specific questions:"
                variant="contained"
                size="large"
                sx={{ py: 2, px: 6 }}
              >
                Email Inquiry &rarr;
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default SupervisionFitPage;
