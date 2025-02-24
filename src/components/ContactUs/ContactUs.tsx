import React, { useState } from 'react';
import {
  Grid,
  Typography,
  TextField,
  Button,
  Stack,
  createTheme,
  ThemeProvider,
  IconButton,
  Divider,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import PlaceIcon from '@mui/icons-material/Place';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { styled } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'sans-serif',
    h4: { fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' },
    h6: { fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' },
    body1: { fontSize: '1rem', color: '#444' },
  },
  palette: {
    primary: { main: '#1976d2' },
  },
});

const StyledCard = styled('div')(({ theme }) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(3),
  borderRadius: 12,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  height: '100%',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: '12px 32px',
  borderRadius: 8,
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  fontWeight: 'bold',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
}));

const IconWrapper = styled('div')(({ theme }) => ({
  width: 40,
  height: 40,
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.main,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
  },
}));

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: '40px 16px', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
        <Grid container spacing={4} style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <StyledCard>
              <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                <IconWrapper>
                  <PhoneIcon fontSize="small" />
                </IconWrapper>
                <div>
                  <Typography variant="body1">+012 345 678 102</Typography>
                  <Typography variant="body1">+012 345 678 103</Typography>
                </div>
              </Stack>

              <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                <IconWrapper>
                  <LanguageIcon fontSize="small" />
                </IconWrapper>
                <div>
                  <Typography variant="body1">yourname@email.com</Typography>
                  <Typography variant="body1">yourwebsitename.com</Typography>
                </div>
              </Stack>

              <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                <IconWrapper>
                  <PlaceIcon fontSize="small" />
                </IconWrapper>
                <div>
                  <Typography variant="body1">
                    Address goes here,
                    <br />
                    Street, Crossroad 123.
                  </Typography>
                </div>
              </Stack>

              <Typography variant="h6" sx={{ color: '#333' }}>
                Follow Us
              </Typography>
              <Stack direction="row" spacing={1}>
                <IconButton
                  aria-label="facebook"
                  sx={{ color: '#3b5998', '&:hover': { color: '#2a4373' } }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  aria-label="twitter"
                  sx={{ color: '#1da1f2', '&:hover': { color: '#0d8ddb' } }}
                >
                  <TwitterIcon />
                </IconButton>
              </Stack>
            </StyledCard>
          </Grid>

          {/* Divider */}
          <Grid item xs={12} sx={{ display: { xs: 'block', md: 'none' } }}>
            <Divider sx={{ borderColor: '#ddd', my: 2 }} />
          </Grid>
          <Grid item xs={0} md={1} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <Divider orientation="vertical" flexItem sx={{ borderColor: '#ddd' }} />
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <StyledCard>
              <Typography variant="h4" sx={{ color: '#333' }}>
                Get In Touch
              </Typography>
              <form onSubmit={handleSubmit} style={{ marginTop: 16 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      required
                      label="Name"
                      name="name"
                      variant="outlined"
                      value={formData.name}
                      onChange={handleChange}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 8,
                          '&:hover fieldset': { borderColor: theme.palette.primary.main },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      required
                      label="Email"
                      name="email"
                      variant="outlined"
                      value={formData.email}
                      onChange={handleChange}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 8,
                          '&:hover fieldset': { borderColor: theme.palette.primary.main },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      label="Subject"
                      name="subject"
                      variant="outlined"
                      value={formData.subject}
                      onChange={handleChange}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 8,
                          '&:hover fieldset': { borderColor: theme.palette.primary.main },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      label="Your Message"
                      name="message"
                      variant="outlined"
                      multiline
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 8,
                          '&:hover fieldset': { borderColor: theme.palette.primary.main },
                        },
                      }}
                    />
                  </Grid>
                </Grid>
                <StyledButton type="submit">Send Message</StyledButton>
              </form>
            </StyledCard>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default ContactUs;