import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

// Import local images from the `assets` folder
import avatar1 from '../../assets/avatar.jpg';
import avatar2 from '../../assets/avatar.jpg';

interface Review {
  id: number;
  text: string;
  name: string;
  role: string;
  avatar: string;
}

// Provide the imported avatar files to each review
const reviewsData: Review[] = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet...',
    name: 'Grace Alvarado',
    role: 'Customer',
    avatar: avatar1, // Using the imported asset
  },
  {
    id: 2,
    text: 'Ut enim ad minim veniam...',
    name: 'John Doe',
    role: 'Client',
    avatar: avatar2, // Another imported asset
  },
];

const AvatarImage = styled('img')({
  width: 70,
  height: 70,
  borderRadius: '50%',
  objectFit: 'cover',
  marginBottom: '1rem',
});

const MultiReviewSection: React.FC = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 4 }} color='#FFBF00' align="center">
        Our Customers
      </Typography>

      <Grid container spacing={4}>
        {reviewsData.map((review) => (
          <Grid item xs={12} sm={6} md={4} key={review.id}>
            <Box
              sx={{
                backgroundColor: '#fff',
                p: 3,
                borderRadius: 2,
                boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
              }}
            >
              {/* Use the imported image file */}
              <AvatarImage src={review.avatar} alt={review.name} />

              <Typography sx={{ mb: 1 }}>{review.text}</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                {review.name}
              </Typography>
              <Typography variant="caption" sx={{ color: '#999' }}>
                {review.role}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MultiReviewSection;
