import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Rating,
  TextField,
  Button,
  styled,
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

const ReviewItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(3),
}));

const AvatarImg = styled('img')({
  width: 60,
  height: 60,
  borderRadius: '50%',
  objectFit: 'cover',
  marginRight: 16,
});

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

const MotionReviewItem = motion(ReviewItem);
const MotionButton = motion(Button);
const MotionGridItem = motion(Grid);

const ReviewsTabContent: React.FC = () => {
  const [newRating, setNewRating] = useState<number | null>(5);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmitReview = () => {
    console.log({ newRating, name, email, message });
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Grid container spacing={4}>
        {/* Reviews List */}
        <MotionGridItem item xs={12} md={7} initial="hidden" animate="visible">
          {mockReviews.map((review, index) => (
            <MotionReviewItem
              key={review.id}
              custom={index}
              variants={reviewItemVariant}
              whileHover={{ scale: 1.02 }}
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
                    />
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer',
                      color: 'primary.main',
                    }}
                  >
                    <Typography variant="body2" sx={{ mr: 0.5 }}>
                      Reply
                    </Typography>
                    <ReplyIcon sx={{ fontSize: '1rem' }} />
                  </Box>
                </Box>

                <Typography variant="body2" sx={{ mt: 1, color: '#555' }}>
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
            />
          </Box>

          <Box component="form" onSubmit={(e) => e.preventDefault()}>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <TextField
                label="Name"
                variant="outlined"
                size="small"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
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
            />

            <MotionButton
              variant="contained"
              sx={{
                textTransform: 'none',
                backgroundColor: '#b76aff',
                '&:hover': { backgroundColor: '#a64eff' },
              }}
              whileHover={{ scale: 1.05 }}
              onClick={handleSubmitReview}
            >
              SUBMIT QUERY
            </MotionButton>
          </Box>
        </MotionGridItem>
      </Grid>
    </Box>
  );
};

export default ReviewsTabContent;
