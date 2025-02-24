import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Rating,
  TextField,
  Button,
  Paper,
  styled,
  useTheme,
} from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';
import { motion } from 'framer-motion';

import avatar1 from '../assets/avatar.jpg';
import avatar2 from '../assets/avatar.jpg';

const mockReviews = [
  {
    id: 1,
    name: 'White Lewis',
    rating: 5,
    text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Suspendisse viverra ed viverra. Mauris ullamper euismod vehicula.',
    avatar: avatar1,
  },
  {
    id: 2,
    name: 'White Lewis',
    rating: 5,
    text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Suspendisse viverra ed viverra. Mauris ullamper euismod vehicula.',
    avatar: avatar2,
  },
];

const ReviewCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
}));

const AvatarImg = styled('img')(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: '50%',
  objectFit: 'cover',
  marginRight: theme.spacing(2),
  boxShadow: theme.shadows[2],
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

const reviewItemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

const formVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const MotionReviewItem = motion(ReviewCard);
const MotionButton = motion(Button);
const MotionGridItem = motion(Grid);

const ReviewsTabContent: React.FC = () => {
  const theme = useTheme();
  const [newRating, setNewRating] = useState<number | null>(5);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmitReview = () => {
    console.log({ newRating, name, email, message });
  };

  return (
    <Box sx={{ mt: 2, p: { xs: 1, md: 2 } }}>
      <Grid container spacing={4}>
        {/* Reviews List */}
        <MotionGridItem item xs={12} md={7} initial="hidden" animate="visible">
          {mockReviews.map((review, index) => (
            <MotionReviewItem
              key={review.id}
              custom={index}
              variants={reviewItemVariant}
              whileHover={{ scale: 1.02 }}
              elevation={3}
            >
              <AvatarImg src={review.avatar} alt={review.name} />

              <Box sx={{ flex: 1 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                  }}
                >
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 'bold', lineHeight: 1.2 }}
                    >
                      {review.name}
                    </Typography>
                    <Rating
                      name={`rating-${review.id}`}
                      value={review.rating}
                      precision={0.5}
                      readOnly
                      size="small"
                      aria-label={`Rating: ${review.rating} out of 5`}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer',
                      color: 'primary.main',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Reply to ${review.name}'s review`}
                  >
                    <Typography variant="body2" sx={{ mr: 0.5 }}>
                      Reply
                    </Typography>
                    <ReplyIcon sx={{ fontSize: '1rem' }} />
                  </Box>
                </Box>

                <Typography variant="body2" sx={{ mt: 1, color: '#555', lineHeight: 1.5 }}>
                  {review.text}
                </Typography>
              </Box>
            </MotionReviewItem>
          ))}
        </MotionGridItem>

        <MotionGridItem
          item
          xs={12}
          md={5}
          initial="hidden"
          animate="visible"
          variants={formVariant}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Add a Review
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography variant="body2" sx={{ mr: 2 }}>
              Your rating:
            </Typography>
            <Rating
              name="userRating"
              value={newRating}
              onChange={(_e, newVal) => setNewRating(newVal)}
              aria-label="User rating"
            />
          </Box>

          <Box component="form" onSubmit={(e) => e.preventDefault()}>
            <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
              <TextField
                label="Name"
                variant="outlined"
                size="small"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                inputProps={{ 'aria-label': 'Your name' }}
              />
              <TextField
                label="Email"
                variant="outlined"
                size="small"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                inputProps={{ 'aria-label': 'Your email address' }}
              />
            </Box>

            <TextField
              label="Message"
              variant="outlined"
              size="small"
              multiline
              rows={5}
              fullWidth
              sx={{ mb: 3 }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              inputProps={{ 'aria-label': 'Your review message' }}
            />

            <MotionButton
              variant="contained"
              sx={{
                textTransform: 'none',
                backgroundColor: theme.palette.primary.main,
                '&:hover': { backgroundColor: theme.palette.primary.dark },
              }}
              whileHover={{ scale: 1.05 }}
              onClick={handleSubmitReview}
            >
              Submit Review
            </MotionButton>
          </Box>
        </MotionGridItem>
      </Grid>
    </Box>
  );
};

export default ReviewsTabContent;
