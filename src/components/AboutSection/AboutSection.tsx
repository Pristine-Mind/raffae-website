import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutSection: React.FC = () => {
  return (
    <Box
      sx={{
        maxWidth: 800,      
        margin: '0 auto',
        textAlign: 'center',
        py: 8,
      }}
    >
      {/* Small heading */}
      <Typography
        variant="subtitle1"
        sx={{ color: '#555', textTransform: 'uppercase', mb: 1 }}
      >
        Who Are We
      </Typography>
      
      {/* Main heading */}
      <Typography
        variant="h3"
        sx={{ fontWeight: 'bold', mb: 1, color: '#333' }}
      >
        Welcome To Raffae
      </Typography>

      {/* Underline */}
      <Box
        sx={{
          width: 60,
          height: 3,
          backgroundColor: '#333',
          margin: '0 auto',
          mb: 3,
        }}
      />

      {/* Paragraph / description */}
      <Typography
        variant="body1"
        sx={{ color: '#555', lineHeight: 1.7 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
        tempor incididunt labor et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
        consequat irure.
      </Typography>
    </Box>
  );
};

export default AboutSection;
