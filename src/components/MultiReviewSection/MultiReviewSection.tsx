import React from 'react';
import { Box, Typography, Grid, Icon } from '@mui/material';
import { styled } from '@mui/material/styles';

interface Review {
  id: number;
  text: string;
  name: string;
  role: string;
}

const reviewsData: Review[] = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore.',
    name: 'Grace Alvarado',
    role: 'Customer',
  },
  {
    id: 2,
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco. Duis aute irure dolor in reprehenderit.',
    name: 'John Doe',
    role: 'Client',
  },
  {
    id: 3,
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    name: 'Jane Smith',
    role: 'Buyer',
  },
];

const ReviewSectionContainer = styled(Box)(() => ({
  backgroundColor: '#f9f9f9',
  padding: '4rem 0',
  textAlign: 'center',
}));

const SingleReviewBox = styled(Box)(() => ({
  backgroundColor: '#fff',
  borderRadius: 4,
  padding: '2rem',
  boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
  transition: '0.3s',
  '&:hover': {
    boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
  },
}));

// Decorative icon (e.g., a quote symbol)
const DecorativeIcon = styled(Icon)(() => ({
  fontSize: '2rem',
  color: '#999',
  marginBottom: '1rem',
  borderRadius: '2px',
}));

const MultiReviewSection: React.FC = () => {
  return (
    <ReviewSectionContainer>
      <Box sx={{ maxWidth: 1000, margin: '0 auto', px: 2 }}>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 800}}>
          What Our Customers Say
        </Typography>

        <Grid container spacing={4}>
          {reviewsData.map((review) => (
            <Grid item xs={12} md={4} key={review.id}>
              <SingleReviewBox>
                <DecorativeIcon>format_quote</DecorativeIcon>
                <Typography
                  variant="body1"
                  sx={{ color: '#555', mb: 2, lineHeight: 1.7 }}
                >
                  {review.text}
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                  {review.name.toUpperCase()}
                </Typography>
                <Typography variant="body2" sx={{ color: '#999' }}>
                  {review.role}
                </Typography>
              </SingleReviewBox>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ReviewSectionContainer>
  );
};

export default MultiReviewSection;
