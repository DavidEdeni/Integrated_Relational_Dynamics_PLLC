import { memo } from 'react';
import { Box, Container, Typography, Grid, Button, List, ListItem, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import spheresImg from '../assets/8a46ffa53352710009d9cc110eff458f-4.jpg';

const START_IMAGE_STYLES = {
  width: '100%',
  height: 'auto',
  boxShadow: '-20px 20px 0px #E0D8D0',
  border: '1px solid #E0D8D0'
};

const SECTION_BOX_STYLES = { mb: 6 };
const SECTION_WRAPPER_STYLES = { py: 12, bgcolor: '#F9F7F5' };
const HEADER_TITLE_STYLES = { fontSize: '2.5rem', mb: 4 };
const SUBHEADER_TITLE_STYLES = { fontSize: '1.25rem', fontWeight: 600, mb: 1 };
const ITALIC_SUBTEXT_STYLES = { fontStyle: 'italic' };
const HIGHLIGHT_TEXT_STYLES = { fontWeight: 600, color: 'primary.main', mb: 4 };
const LIST_LABEL_STYLES = { fontSize: '1.1rem', fontWeight: 600, mb: 2, textTransform: 'uppercase', letterSpacing: '0.05em' };
const STAKE_TAGLINE_STYLES = { color: 'text.secondary', borderLeft: '3px solid #E0D8D0', pl: 2, mb: 6 };
const CTA_BUTTON_STYLES = { px: 4, py: 2 };
const FIT_SUMMARY_STYLES = { color: 'text.secondary', mb: 3 };

const StartHere = () => {
  return (
    <Box sx={SECTION_WRAPPER_STYLES}>
      <Container maxWidth="lg">
        <Grid container spacing={8} direction="row-reverse" alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={spheresImg}
              alt="Ordered wooden spheres"
              loading="lazy"
              sx={START_IMAGE_STYLES}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom sx={HEADER_TITLE_STYLES}>
              Start Here: Supervision Fit
            </Typography>

            <Box sx={SECTION_BOX_STYLES}>
              <Typography variant="h3" sx={SUBHEADER_TITLE_STYLES}>
                Step 1 — Brief screening meeting (10–15 minutes)
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                A short fit and logistics check. Not supervision or case consultation.
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={ITALIC_SUBTEXT_STYLES}>
                Held via secure video (Zoom) or by phone if requested.
              </Typography>
        <Grid container spacing={10} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="h2" sx={TITLE_STYLES}>
              Start Here: Supervision Fit Consult
            </Typography>
            
            <Typography variant="body1" sx={BODY_TEXT_STYLES}>
              Supervision is not a commodity—it is a frame. It works best when the frame is stable and the focus is clear.
            </Typography>

            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'secondary.light', fontSize: '0.85rem' }}>
              Your current context:
            </Typography>

            <List sx={{ mb: 4 }}>
              {[
                "You’re a clinician in private practice, an agency, or a group setting.",
                "You need a supervisor who values conceptualization support and documentation strength.",
                "You want someone who won’t co-sign decisions without shared reasoning.",
                "You value a steady pace of responsibility over a cycle of urgency."
              ].map((item, idx) => (
                <ListItem key={idx} disableGutters sx={BULLET_POINT_STYLES}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>

            <Button
              component={RouterLink}
              to="/supervision-fit"
              variant="contained"
              sx={CTA_BUTTON_STYLES}
              aria-label="Request a Supervision Fit Consultation"
            >
              Request a Consultation &rarr;
            </Button>
          </Grid>
          
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src={treeImg}
              alt="Deeply rooted tree"
              loading="lazy"
              sx={IMAGE_STYLES}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default memo(StartHere);
