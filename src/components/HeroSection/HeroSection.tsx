import React from 'react';
import { Typography, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import speakerImg1 from '../../assets/product1.webp';
import speakerImg2 from '../../assets/product3.webp';

const HeroSectionWrapper = styled('div')({
  position: 'relative',
  width: '100%',
  backgroundColor: '#000', // Black background
  color: '#fff',
  overflow: 'hidden',
});

const StyledSwiperContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '70vh', // Fixed height for consistency
  maxWidth: 1400,
  margin: '0 auto',

  '& .swiper': {
    width: '100%',
    height: '100%',
  },

  '& .swiper-pagination': {
    bottom: theme.spacing(3),
  },

  '& .swiper-pagination-bullet': {
    backgroundColor: '#fff',
    opacity: 0.6,
    width: 10,
    height: 10,
  },
  '& .swiper-pagination-bullet-active': {
    backgroundColor: '#1976d2', // Blue for active state
    opacity: 1,
  },

  '& .swiper-button-prev, .swiper-button-next': {
    color: '#fff', // White arrows
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
    width: 48,
    height: 48,
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
  },
}));

const NavButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  zIndex: 10,
  transform: 'translateY(-50%)',
  '&:hover': {
    color: '#1976d2', // Blue on hover
  },
  [theme.breakpoints.down('sm')]: {
    width: 40,
    height: 40,
  },
}));

const SlideWrapper = styled('div')({
  position: 'relative',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between', // Space between text and image
  background: 'linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 60%)', // Gradient for text overlay
});

const SlideContent = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  padding: theme.spacing(4, 2),
  width: '50%', // Fixed width for text
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: theme.spacing(3, 2),
    textAlign: 'center',
  },
}));

const ProductImage = styled(motion.img)(({ theme }) => ({
  position: 'absolute',
  right: 0,
  bottom: 0,
  maxWidth: '50%',
  maxHeight: '90%',
  objectFit: 'contain',
  zIndex: 1,
  opacity: 0.85,
  [theme.breakpoints.down('md')]: {
    maxWidth: '70%',
    maxHeight: '60%',
    opacity: 0.7,
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#1976d2', // Blue button
  color: '#fff',
  padding: '12px 32px',
  borderRadius: 8,
  fontWeight: 'bold',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#1565c0',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
}));

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const HeroSection: React.FC = () => {
  return (
    <HeroSectionWrapper>
      <StyledSwiperContainer>
        <NavButton className="my-swiper-button-prev" sx={{ left: 24 }}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </NavButton>
        <NavButton className="my-swiper-button-next" sx={{ right: 24 }}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </NavButton>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: '.my-swiper-button-prev',
            nextEl: '.my-swiper-button-next',
          }}
          pagination={{ clickable: true }}
          loop
        >
          <SwiperSlide>
            <SlideWrapper>
              <ProductImage
                src={speakerImg1}
                alt="Product 1"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.9 } }}
              />
              <SlideContent as={motion.div} initial="hidden" animate="visible" variants={textVariants}>
                <Typography variant="body1" sx={{ opacity: 0.9, mb: 1, fontWeight: '500', fontSize: '1rem' }}>
                  Limited Time
                </Typography>
                <Typography
                  variant="h1"
                  sx={{ fontWeight: 'bold', mb: 2, lineHeight: 1.1, fontSize: { xs: '2rem', md: '3.5rem' } }}
                >
                  Exclusive Offer
                </Typography>
                <Typography variant="h6" sx={{ mb: 3, opacity: 0.9, fontSize: { xs: '1rem', md: '1.25rem' } }}>
                  Save Up to 50%
                </Typography>
                <StyledButton>Shop Now</StyledButton>
              </SlideContent>
            </SlideWrapper>
          </SwiperSlide>

          <SwiperSlide>
            <SlideWrapper>
              <ProductImage
                src={speakerImg2}
                alt="Product 2"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.9 } }}
              />
              <SlideContent as={motion.div} initial="hidden" animate="visible" variants={textVariants}>
                <Typography variant="body1" sx={{ opacity: 0.9, mb: 1, fontWeight: '500', fontSize: '1rem' }}>
                  New Arrival
                </Typography>
                <Typography
                  variant="h1"
                  sx={{ fontWeight: 'bold', mb: 2, lineHeight: 1.1, fontSize: { xs: '2rem', md: '3.5rem' } }}
                >
                  Final Sale
                </Typography>
                <Typography variant="h6" sx={{ mb: 3, opacity: 0.9, fontSize: { xs: '1rem', md: '1.25rem' } }}>
                  30% Off Summer Vacation
                </Typography>
                <StyledButton>Shop Now</StyledButton>
              </SlideContent>
            </SlideWrapper>
          </SwiperSlide>
        </Swiper>
      </StyledSwiperContainer>
    </HeroSectionWrapper>
  );
};

export default HeroSection;