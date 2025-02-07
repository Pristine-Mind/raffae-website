import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Divider,
  SxProps,
  Theme,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import SecurityIcon from '@mui/icons-material/Security';
import PublicIcon from '@mui/icons-material/Public';
import BalanceIcon from '@mui/icons-material/Balance'; 
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import earbuds from '../../assets/earbuds.webp';
import speaker from '../../assets/speaker.webp';
import power_bank from '../../assets/power_bank.webp';

const arrowButtonStyle: SxProps<Theme> = {
  width: 40,
  height: 40,
  border: '1px solid #7D3C14', 
  color: '#7D3C14',
  borderRadius: '50%',
  '&:hover': {
    backgroundColor: '#7D3C14',
    color: '#fff',
  },
};

const circleIconWrapper: SxProps<Theme> = {
  width: 80,
  height: 80,
  borderRadius: '50%',
  backgroundColor: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mx: 'auto',
  mb: 2,
};

const AboutUs: React.FC = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 1 }} color='#C4832C'>
            Welcome To Raffae
          </Typography>
          <Divider
            sx={{
              width: 60,
              mx: 'auto',
              my: 2,
              borderBottomWidth: 2,
              borderColor: '#000',
            }}
          />
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt labor et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat irure
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ mb: 6 }} alignItems="stretch">
          {/* Watches */}
          <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
            <Card
              sx={{
                textAlign: 'center',
                boxShadow: 'none',
                backgroundColor: '#f9f9f9',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h3" sx={{ color: '#7D3C14', fontWeight: 'bold' }}>
                  Watches
                </Typography>
                <Typography variant="body2" sx={{ color: '#444', mb: 2 }}>
                  Starting at <span style={{ color: '#7D3C14' }}>$99.00</span>
                </Typography>
                <IconButton sx={arrowButtonStyle}>
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              </CardContent>
              <CardMedia
                component="img"
                image={earbuds}
                alt="Watches"
                sx={{ mt: 'auto' }}
              />
            </Card>
          </Grid>

          <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
            <Card
              sx={{
                textAlign: 'center',
                boxShadow: 'none',
                backgroundColor: '#f9f9f9',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h3" sx={{ color: '#7D3C14', fontWeight: 'bold' }}>
                  Plo Bag
                </Typography>
                <Typography variant="body2" sx={{ color: '#444', mb: 2 }}>
                  Starting at <span style={{ color: '#7D3C14' }}>$79.00</span>
                </Typography>
                <IconButton sx={arrowButtonStyle}>
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              </CardContent>
              <CardMedia
                component="img"
                image={speaker}
                alt="Bag"
                sx={{ mt: 'auto' }}
              />
            </Card>
          </Grid>

          <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
            <Card
              sx={{
                textAlign: 'center',
                boxShadow: 'none',
                backgroundColor: '#f9f9f9',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h3" sx={{ color: '#7D3C14', fontWeight: 'bold' }}>
                  Sunglass
                </Typography>
                <Typography variant="body2" sx={{ color: '#444', mb: 2 }}>
                  Starting at <span style={{ color: '#7D3C14' }}>$29.00</span>
                </Typography>
                <IconButton sx={arrowButtonStyle}>
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              </CardContent>
              <CardMedia
                component="img"
                image={power_bank}
                alt="Sunglass"
                sx={{ mt: 'auto' }}
              />
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={4} alignItems="stretch" sx={{ mb: 8 }}>
          <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }} color='#C4832C'>
                Our Vision
              </Typography>
              <Typography variant="body2" sx={{ color: '#444', lineHeight: 1.8 }}>
                Flone provide how all this mistaken idea of denounc pleasure and sing pain
                was born and will give you a ete account of the system, and expound the
                actual teangs the eat explorer of the truth.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }} color='#C4832C'>
                Our Mission
              </Typography>
              <Typography variant="body2" sx={{ color: '#444', lineHeight: 1.8 }}>
                Flone provide how all this mistaken idea of denounc pleasure and sing pain
                was born and will give you a ete account of the system, and expound the
                actual teangs the eat explorer of the truth.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }} color='#C4832C'>
                Our Goal
              </Typography>
              <Typography variant="body2" sx={{ color: '#444', lineHeight: 1.8 }}>
                Flone provide how all this mistaken idea of denounc pleasure and sing pain
                was born and will give you a ete account of the system, and expound the
                actual teangs the eat explorer of the truth.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              color: '#C4832C',
            }}
          >
            WHY CHOOSE RAFFAE?
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex' }}>
            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <Box sx={circleIconWrapper}>
                <SecurityIcon sx={{ color: '#C4832C', fontSize: 40 }} />
              </Box>
              <Typography
                variant="h6"
                sx={{ color: '#C4832C', fontWeight: 'bold', mb: 1 }}
              >
                Quality Assurance
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#555', maxWidth: 250, mx: 'auto' }}
              >
                We source our products from reputable manufacturers known for their commitment to quality.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex' }}>
            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <Box sx={circleIconWrapper}>
                <PublicIcon sx={{ color: '#C4832C', fontSize: 40 }} />
              </Box>
              <Typography
                variant="h6"
                sx={{ color: '#C4832C', fontWeight: 'bold', mb: 1 }}
              >
                Wide Selection
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#555', maxWidth: 250, mx: 'auto' }}
              >
                Explore our extensive range of mobile accessories designed to meet your specific needs.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex' }}>
            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <Box sx={circleIconWrapper}>
                <BalanceIcon sx={{ color: '#C4832C', fontSize: 40 }} />
              </Box>
              <Typography
                variant="h6"
                sx={{ color: '#C4832C', fontWeight: 'bold', mb: 1 }}
              >
                Competitive Pricing
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#555', maxWidth: 250, mx: 'auto' }}
              >
                We believe that top-notch technology should be accessible to all. Quality Without Compromising Competitive Pricing.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex' }}>
            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <Box sx={circleIconWrapper}>
                <LocalShippingIcon sx={{ color: '#C4832C', fontSize: 40 }} />
              </Box>
              <Typography
                variant="h6"
                sx={{ color: '#C4832C', fontWeight: 'bold', mb: 1 }}
              >
                Fast Shipping
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#555', maxWidth: 250, mx: 'auto' }}
              >
                Efficient shipping ensures your accessories reach you promptly, enhancing your mobile experience without delay.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
