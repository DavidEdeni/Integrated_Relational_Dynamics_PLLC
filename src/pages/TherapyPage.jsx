import { Box, Container, Typography, Stack, Paper, Divider, List, ListItem, ListItemText, Link, Button } from '@mui/material';


const PAGE_WRAPPER_STYLES = { py: 8, bgcolor: 'background.default' };
const PAGE_TITLE_STYLES = { mb: 1, fontSize: { xs: '2.5rem', md: '3.5rem' } };
const STATUS_SUBTITLE_STYLES = { mb: 6, fontWeight: 600 };
const CONTENT_PAPER_STYLES = { p: { xs: 4, md: 8 }, border: '1px solid #E0D8D0', bgcolor: 'background.paper' };
const INTRO_TEXT_STYLES = { fontSize: '1.15rem', lineHeight: 1.8, color: 'text.secondary' };
const ITALIC_INFO_STYLES = { mt: 3, fontStyle: 'italic', color: 'text.secondary' };
const FRAMEWORK_BOX_STYLES = { mt: 2, p: 2, bgcolor: '#F9F7F5', borderLeft: '3px solid #6D5D50' };
const EMAIL_SECTION_WRAPPER_STYLES = { mt: 6 };
const FOOTER_ITALIC_STLYES = { mt: 2, fontStyle: 'italic' };

const TherapyPage = () => {
  return (
    <Box sx={PAGE_WRAPPER_STYLES}>
      <Container maxWidth="md">
        <Typography variant="h1" gutterBottom sx={PAGE_TITLE_STYLES}>
          Therapy
        </Typography>
        <Typography variant="h5" color="primary.main" gutterBottom sx={STATUS_SUBTITLE_STYLES}>
          Therapy begins October 2026 (telehealth).
        </Typography>

        <Paper elevation={0} sx={CONTENT_PAPER_STYLES}>
          
          <Section title="">
            <Typography variant="body1" paragraph sx={INTRO_TEXT_STYLES}>
              Therapy here offers stable, organized support for people who feel stuck—emotionally, relationally, or at a decision point. Many reach out when anxiety, burnout, low mood, conflict cycles, or shutdown keep repeating and nothing they’ve tried works. The aim is to help you understand what’s happening, clarify what matters, and find next steps you can truly maintain—without pressure for a specific outcome.
            </Typography>
            <Typography variant="body1" paragraph sx={INTRO_TEXT_STYLES}>
              Insight helps, but insight alone often isn’t enough when stress is high and patterns are deeply rooted. This work emphasizes lasting clarity, effective follow-through, and boundaries that uphold dignity, safety, and agency.
            </Typography>
          </Section>

          <Section title="Who this is for">
            <Typography variant="body1" color="text.secondary">
              Adults, couples, and adolescents dealing with relational strain, high-stakes decisions, and responsibility pressures. Telehealth-only.
            </Typography>
          </Section>

          <Section title="Common reasons people reach out">
            <BulletList items={[
              "Repeated cycles of conflict, shutdowns, or repairs that don’t last.",
              "Decision points where each option has a real cost",
              "Boundary confusion, role strain, or overload of responsibilities",
              "Anxiety, depression, burnout, numbness, or overwhelm caused by unresolved conflict.",
              "Dating and Premarital Discernment: Expectations, Authority, and Clarity in Commitment",
              "Family-of-origin patterns that significantly influence current dynamics (context, not excuse)"
            ]} />
          </Section>

          <Section title="How therapy works here">
             <Typography variant="body1" paragraph color="text.secondary">
              Therapy is paced for clarity and ethical safety. Sessions focus on:
            </Typography>
            <BulletList items={[
              "Stating what is true (without performance or persuasion)",
              "Clarifying what is yours to carry—and what isn't",
              "Identifying a clear next step when costs increase",
              "Building voluntary, sustainable, and paced follow-through",
              "Maintaining boundaries that preserve dignity, safety, and agency"
            ]} />
             <Typography variant="body2" sx={ITALIC_INFO_STYLES}>
              This work does not hurry reconciliation or certainty, nor does it use therapy as leverage in relational conflict.
            </Typography>
            <Typography variant="body2" sx={FRAMEWORK_BOX_STYLES}>
              Framework: Grounded in Bowenian, Structural, Contextual, and Attachment frameworks, with integrative CBT as needed.
            </Typography>
          </Section>

          <Section title="Biblical integration (optional)">
            <Typography variant="body1" paragraph color="text.secondary">
              For clients who follow Jesus and want to include their faith, therapy can incorporate biblically informed approaches upon request. The Bible is used to promote clarity, responsibility, and relational integrity. Biblical integration is always client-led and is not used to pressure predetermined outcomes.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic' }}>
              The Bible is not used as leverage in relational conflict or to pressure forgiveness, reconciliation, or ongoing contact.
            </Typography>
          </Section>

          <Section title="Rates, payment, and superbills">
            <Typography variant="body1" color="text.secondary">
              Private pay telehealth services. Superbills are available upon request; reimbursement depends on your insurer and is not guaranteed.
            </Typography>
          </Section>

          <Divider sx={{ my: 8 }} />

          <Section title="Therapy interest (email) — October 2026 start">
            <Typography variant="body1" paragraph color="text.secondary">
              If you would like to be contacted when openings begin, email:
            </Typography>
            <BulletList items={[
              "Your state (Texas or Colorado, if applicable)",
              "Individual / couple / adolescent services",
              "A brief description of what you want help clarifying (no PHI details)",
              "General availability (days/times)"
            ]} />
            <Stack direction="row" justifyContent="center" sx={EMAIL_SECTION_WRAPPER_STYLES}>
               <Button 
                variant="contained" 
                size="large" 
                href="mailto:integrated.relational.dynamics@gmail.com?subject=Therapy Interest Inquiry (Oct 2026)"
                aria-label="Send interest inquiry for therapy via email"
               >
                 Inquire via Email &rarr;
               </Button>
            </Stack>
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Email: <Link href="mailto:integrated.relational.dynamics@gmail.com" sx={{ textDecoration: 'underline' }} aria-label="Send email to integrated.relational.dynamics@gmail.com">integrated.relational.dynamics@gmail.com</Link>
            </Typography>
            <Typography variant="body2" align="center" color="text.secondary" sx={FOOTER_ITALIC_STLYES}>
              Communication boundary: Please do not include PHI or any identifying client details in emails. Email is not monitored for emergencies.
            </Typography>
          </Section>

        </Paper>
      </Container>
    </Box>
  );
};

const Section = ({ title, children }) => (
  <Box component="section" sx={{ mb: 8 }}>
    {title && <Typography variant="h3" gutterBottom sx={{ fontSize: '1.75rem', fontWeight: 600 }}>{title}</Typography>}
    {children}
  </Box>
);

const BulletList = ({ items }) => (
  <List sx={{ mb: 0 }}>
    {items.map((item, idx) => (
      <ListItem key={idx} disableGutters sx={{ alignItems: 'flex-start', py: 0.5 }}>
        <ListItemText primary={<Typography variant="body1" color="text.secondary"><Box component="span" sx={{ mr: 2, fontWeight: 700 }} aria-hidden="true">&mdash;</Box> {item}</Typography>} />
      </ListItem>
    ))}
  </List>
);

export default TherapyPage;
