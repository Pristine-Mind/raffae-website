import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import speakerImg1 from '../../assets/product1.webp';
import speakerImg2 from '../../assets/product3.webp';

const HeroSectionWrapper = styled(Box)({
  position: 'relative',
  width: '100%',
  backgroundColor: '#000',
  color: '#fff',
  overflow: 'hidden',
});

const StyledSwiperContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  minHeight: '70vh',

  '& .swiper': {
    width: '100%',
    height: '100%',
  },

  '& .swiper-pagination': {
    bottom: theme.spacing(2),
  },

  '& .swiper-pagination-bullet': {
    backgroundColor: '#fff',
    opacity: 0.5,
  },
  '& .swiper-pagination-bullet-active': {
    opacity: 1,
  },

  '& .swiper-button-prev, .swiper-button-next': {
    display: 'none',
  },
}));

const NavButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  zIndex: 10,
  transform: 'translateY(-50%)',
  backgroundColor: '#fff',
  color: '#000',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
  [theme.breakpoints.down('sm')]: {
    width: 36,
    height: 36,
  },
}));

const SlideContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  maxWidth: '1200px',
  margin: '0 auto',
  padding: theme.spacing(6, 2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '70vh',

  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
  },
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
  },
}));

const ProductImage = styled(motion.img)({
  position: 'absolute',
  bottom: 0,
  right: 0,
  maxHeight: '100%',
  objectFit: 'contain',
  zIndex: 1,
  opacity: 0.9,
});

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};


const HeroSection: React.FC = () => {
  return (
    <HeroSectionWrapper>
      {/* Swiper Container */}
      <StyledSwiperContainer>
        <NavButton className="my-swiper-button-prev" sx={{ left: 16 }}>
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </NavButton>

        <NavButton className="my-swiper-button-next" sx={{ right: 16 }}>
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </NavButton>

        <Swiper
          // Import the modules
          modules={[Navigation, Pagination]}
          navigation={{
            // Link to the custom buttons
            prevEl: '.my-swiper-button-prev',
            nextEl: '.my-swiper-button-next',
          }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <ProductImage
              src={speakerImg1}
              alt="Speaker 1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            />
            <SlideContent
              component={motion.div}
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <Typography variant="body1" sx={{ opacity: 0.8, mb: 1 }}>
                New Arrival
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 'bold',
                  mb: 1,
                  lineHeight: 1.2,
                }}
              >
                Final Sale
              </Typography>
              <Typography variant="h6" sx={{ mb: 3, opacity: 0.8 }}>
                30% off Summer Vacation
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#fff',
                  color: '#000',
                  '&:hover': {
                    backgroundColor: '#e0e0e0',
                  },
                }}
              >
                SHOP NOW
              </Button>
            </SlideContent>
          </SwiperSlide>

          <SwiperSlide>
            <ProductImage
              src={speakerImg2}
              alt="Speaker 2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            />
            <SlideContent
              component={motion.div}
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <Typography variant="body1" sx={{ opacity: 0.8, mb: 1 }}>
                Limited Time
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 'bold',
                  mb: 1,
                  lineHeight: 1.2,
                }}
              >
                Exclusive Offer
              </Typography>
              <Typography variant="h6" sx={{ mb: 3, opacity: 0.8 }}>
                Save up to 50%
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#fff',
                  color: '#000',
                  '&:hover': {
                    backgroundColor: '#e0e0e0',
                  },
                }}
              >
                SHOP NOW
              </Button>
            </SlideContent>
          </SwiperSlide>
        </Swiper>
      </StyledSwiperContainer>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
