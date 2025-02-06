import React from 'react';
import { Box, Typography, Grid, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f9f9f9',
        py: 4,
        marginTop: '50px',
      }}
    >
      <Grid container spacing={4} justifyContent="center" sx={{ px: 2 }}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            About Raffae
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Raffae is your go-to destination for innovative and high-quality tech products. Our mission is to blend style and functionality to enhance your everyday life.
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Quick Links
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
              Home
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
              Products
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
              About Us
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
              Contact
            </Link>
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Follow Us
          </Typography>
          <Box>
            <IconButton aria-label="facebook" href="#">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="twitter" href="#">
              <TwitterIcon />
            </IconButton>
            <IconButton aria-label="instagram" href="#">
              <InstagramIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ borderTop: '1px solid #ddd', mt: 4, pt: 2 }}>
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} Raffae. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
