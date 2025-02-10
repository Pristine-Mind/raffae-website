import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Stack,
  createTheme,
  ThemeProvider,
  SxProps,
  IconButton,
  Divider,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import PlaceIcon from '@mui/icons-material/Place';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const theme = createTheme({
  typography: {
    fontFamily: 'sans-serif',
    h4: {
      fontSize: '1.8rem',
      fontWeight: 600,
      marginBottom: '1.2rem',
    },
    h6: {
      fontSize: '1.1rem',
      fontWeight: 600,
      marginBottom: '0.5rem',
    },
    body1: {
      fontSize: '0.95rem',
      color: '#333',
    },
  },
  palette: {
    primary: {
      main: '#000000',
    },
  },
});

const iconWrapperStyle: SxProps = {
  minWidth: 40,
  minHeight: 40,
  border: '1px solid #000',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <Grid container spacing={4}>
          {/* Left Section - Contact Info */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: '#f3f3f3',
                p: 3,
                borderRadius: 2,
                boxShadow: 2,
              }}
            >
              <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                <Box sx={iconWrapperStyle}>
                  <PhoneIcon fontSize="small" />
                </Box>
                <Box>
                  <Typography variant="body1">+012 345 678 102</Typography>
                  <Typography variant="body1">+012 345 678 102</Typography>
                </Box>
              </Stack>

              <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                <Box sx={iconWrapperStyle}>
                  <LanguageIcon fontSize="small" />
                </Box>
                <Box>
                  <Typography variant="body1">
                    yourname@email.com
                  </Typography>
                  <Typography variant="body1">
                    yourwebsitename.com
                  </Typography>
                </Box>
              </Stack>

              <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                <Box sx={iconWrapperStyle}>
                  <PlaceIcon fontSize="small" />
                </Box>
                <Box>
                  <Typography variant="body1">
                    Address goes here,
                    <br />
                    street, Crossroad 123.
                  </Typography>
                </Box>
              </Stack>

              <Typography variant="h6" sx={{ mb: 1 }}>
                Follow Us
              </Typography>
              <Stack direction="row" spacing={1}>
                <IconButton aria-label="facebook" size="small">
                  <FacebookIcon />
                </IconButton>
                <IconButton aria-label="twitter" size="small">
                  <TwitterIcon />
                </IconButton>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} sx={{ display: { xs: 'block', md: 'none' } }}>
            <Divider sx={{ borderColor: '#ddd' }} />
          </Grid>

          <Grid
            item
            xs={0}
            md={1}
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
            }}
          >
            <Divider orientation="vertical" flexItem sx={{ borderColor: '#ddd' }} />
          </Grid>

          <Grid item xs={12} md={7}>
            <Box
              sx={{
                backgroundColor: '#f3f3f3',
                p: { xs: 2, md: 4 },
                borderRadius: 2,
                boxShadow: 2,
              }}
            >
              <Typography variant="h4">Get In Touch</Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      required
                      label="Name*"
                      name="name"
                      variant="outlined"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      required
                      label="Email*"
                      name="email"
                      variant="outlined"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      label="Subject*"
                      name="subject"
                      variant="outlined"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      label="Your Message*"
                      name="message"
                      variant="outlined"
                      multiline
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 3,
                    backgroundColor: '#000',
                    color: '#fff',
                    borderRadius: 0,
                    px: 4,
                    py: 1.2,
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: '#333',
                    },
                  }}
                >
                  SEND
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default ContactUs;
