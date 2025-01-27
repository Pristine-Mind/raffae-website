import React from 'react';
import { Grid, Box, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

import headphoneImg from '../../assets/wireless_headphone.webp';
import bluetoothImg from '../../assets/earbuds.webp';

const BannerBox = styled(Box)(() => ({
  backgroundColor: '#ecc484',
  position: 'relative',
  overflow: 'hidden',
  height: 300,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem',
}));

const PromoBanners: React.FC = () => {
  return (
    <Box sx={{ maxWidth: 1200, margin: '0 auto', py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <BannerBox>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography
                variant="h3"
                sx={{ fontFamily: 'serif', color: '#8C4E3A', mb: 1 }}
              >
                HeadPhone
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontFamily: 'serif', color: '#000', mb: 2 }}
              >
                Starting at <span style={{ color: '#8C4E3A' }}>NPR99.00</span>
              </Typography>
            </Box>

            <Box
              component="img"
              src={headphoneImg}
              alt="HeadPhone"
              sx={{
                width: { xs: '120px', md: '250px' },
                height: 'auto',
              }}
            />
          </BannerBox>
        </Grid>

        <Grid item xs={12} md={6}>
          <BannerBox>
            <Box
              component="img"
              src={bluetoothImg}
              alt="Bluetooth"
              sx={{
                width: { xs: '120px', md: '250px' },
                height: 'auto',
              }}
            />

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'right',
              }}
            >
              <Typography
                variant="h3"
                sx={{ fontFamily: 'serif', color: '#8C4E3A', mb: 1 }}
              >
                Bluetooth
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontFamily: 'serif', color: '#000', mb: 2 }}
              >
                Starting at <span style={{ color: '#8C4E3A' }}>NPR79.00</span>
              </Typography>
            </Box>
          </BannerBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PromoBanners;
