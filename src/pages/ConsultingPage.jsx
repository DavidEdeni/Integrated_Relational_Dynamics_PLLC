import React from 'react';
import { Box, Container, Typography, Stack, Paper, Divider, List, ListItem, ListItemText, Link, Button } from '@mui/material';

const ConsultingPage = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography variant="h1" gutterBottom sx={{ mb: 1, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
          Consulting
        </Typography>
        <Typography variant="h5" color="primary.main" gutterBottom sx={{ mb: 6, fontWeight: 600 }}>
          Now accepting consulting inquiries.
        </Typography>

        <Paper elevation={0} sx={{ p: { xs: 4, md: 8 }, border: '1px solid #E0D8D0', bgcolor: 'background.paper' }}>
          
          <Section title="Who this is for">
             <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
              Consulting is for people who need clarity before taking action—especially when decisions are high-stakes, costly, or contested. This work helps leaders, clinicians, and organizations identify what is true, clarify responsibilities, and move forward without coercion or performance pressure.
            </Typography>
             <Typography variant="body1" gutterBottom sx={{ fontWeight: 600 }}>
              Common consulting situations:
            </Typography>
             <BulletList items={[
              "Role confusion or unclear authority (who decides, who owns what, who is responsible)",
              "Decision bottlenecks where every option involves loss or tradeoffs",
              "Chronic conflict patterns within a team or system (such as escalation, avoidance, or stalled follow-through)",
              "Accountability breakdowns (process replacing ownership, optics replacing repair)",
              "Transitions Under Strain (Growth, Restructuring, Leadership Change, Crisis Aftermath)"
            ]} />
             <Typography variant="body2" color="error.main" sx={{ mt: 3, fontStyle: 'italic', p: 2, bgcolor: '#FFF9F9', borderLeft: '3px solid #B71C1C' }}>
               Not a fit for crisis response, HR adjudication, legal advice, or pressure-work meant to control others.
            </Typography>
          </Section>

          <Section title="What consulting is">
            <Typography variant="body1" color="text.secondary">
              Consulting at Integrated Relational Dynamics involves clarity before action for individuals, leaders, and organizations navigating authority, role strain, and responsibility under cost—especially when decisions feel high-stakes or stuck.
            </Typography>
          </Section>

          <Section title="Engagement options">
             <BulletList items={[
              { primary: "Single Consulting Consult (60–90 minutes)", secondary: "Clarify the situation, map constraints, and identify the next responsible step." },
              { primary: "Short Series (3–6 sessions)", secondary: "Sustained clarity work for complex dynamics, role strain, or decision pressure." },
              { primary: "Documentation/deliverables (optional)", secondary: "Brief written summary upon request." }
            ]} isNested />
          </Section>

          <Section title="Boundaries">
             <BulletList items={[
              "Consulting is not psychotherapy or crisis intervention.",
              "Consulting does not offer legal advice, clinical supervision, or HR adjudication.",
              "There are no guarantees of specific outcomes, and consulting should not be used as leverage over others."
            ]} />
          </Section>

          <Divider sx={{ my: 8 }} />

           <Section title="Request a Consulting Inquiry">
            <Typography variant="body1" paragraph color="text.secondary">
              If you’d like to explore fit, send an email including:
            </Typography>
            <BulletList items={[
              "Your state and role (individual, leader, or organization)",
              "The situation summarized in four to six sentences without including sensitive details.",
              "Which decision or responsibility do you need clarity on?",
              "Timeline and overall availability"
            ]} />
            <Stack direction="row" justifyContent="center" sx={{ mt: 6 }}>
               <Button 
                variant="contained" 
                size="large" 
                href="mailto:integrated.relational.dynamics@gmail.com?subject=Consulting Inquiry"
               >
                 Inquire via Email &rarr;
               </Button>
            </Stack>
            <Typography variant="body2" align="center" sx={{ mt: 3, fontWeight: 600 }}>
              Email: <Link href="mailto:integrated.relational.dynamics@gmail.com" sx={{ textDecoration: 'underline' }}>integrated.relational.dynamics@gmail.com</Link>
            </Typography>
          </Section>

        </Paper>
      </Container>
    </Box>
  );
};

const Section = ({ title, children }) => (
  <Box component="section" sx={{ mb: 8 }}>
    <Typography variant="h3" gutterBottom sx={{ fontSize: '1.75rem', fontWeight: 600 }}>{title}</Typography>
    {children}
  </Box>
);

const BulletList = ({ items, isNested = false }) => (
  <List sx={{ mb: 0 }}>
    {items.map((item, idx) => (
      <ListItem key={idx} disableGutters sx={{ alignItems: 'flex-start', py: isNested ? 1.5 : 0.5 }}>
        {isNested ? (
          <ListItemText 
            primary={<Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 600 }}>{item.primary}</Typography>} 
            secondary={<Typography variant="body2" color="text.secondary">{item.secondary}</Typography>} 
          />
        ) : (
          <ListItemText primary={<Typography variant="body1" color="text.secondary"><Box component="span" sx={{ mr: 2, fontWeight: 700 }}>&mdash;</Box> {item}</Typography>} />
        )}
      </ListItem>
    ))}
  </List>
);

export default ConsultingPage;
