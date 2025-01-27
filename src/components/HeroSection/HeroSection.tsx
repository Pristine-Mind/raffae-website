import React from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import speakerImg1 from '../../assets/product1.webp';
import speakerImg2 from '../../assets/product2.webp';

const HeroContainer = styled(Box)({
  backgroundColor: '#ecc484',
  padding: '50px 0',
  position: 'relative',
});

const StyledSwiperContainer = styled('div')(() => ({
  width: '100%',
  height: '100%',
  position: 'relative',

  '& .swiper-pagination-bullet': {
    backgroundColor: '#000',
    opacity: 0.4,
    width: '10px',
    height: '10px',
    marginBottom: '2px',
  },
  '& .swiper-pagination-bullet-active': {
    opacity: 1,
  },
}));

const slidesData = [
  {
    label: 'New Arrival',
    title: 'New Design Bluetooth Speaker',
    buttonText: 'Shop Now',
    image: speakerImg1,
  },
  {
    label: 'Wireless Bliss',
    title: 'Experience True Freedom',
    buttonText: 'Shop Now',
    image: speakerImg2,
  },
];

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <Box sx={{ maxWidth: 1600, margin: '0 auto' }}>
        <StyledSwiperContainer>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            style={{ width: '100%', height: '100%' }}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <Grid container spacing={4} alignItems="center">
                  {/* Text Column */}
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      textAlign: { xs: 'center', md: 'left' },
                      px: { xs: 2, md: 6 },
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ color: '#333', mb: 1 }}>
                      {slide.label}
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}
                    >
                      {slide.title}
                    </Typography>
                    <Button variant="outlined" sx={{ borderColor: '#333', color: '#333' }}>
                      {slide.buttonText}
                    </Button>
                  </Grid>

                  {/* Image Column */}
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      px: { xs: 2, md: 6 },
                    }}
                  >
                    <Box
                      component="img"
                      src={slide.image}
                      alt={slide.label}
                      sx={{
                        width: '100%',
                        maxWidth: 700,
                      }}
                    />
                  </Grid>
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        </StyledSwiperContainer>
      </Box>
    </HeroContainer>
  );
};

export default HeroSection;
