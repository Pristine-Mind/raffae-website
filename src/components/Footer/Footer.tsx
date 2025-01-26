import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f9f9f9',
        py: 3,
        textAlign: 'center',
        marginTop: '50px',
      }}
    >
      <Typography variant="body2">© {new Date().getFullYear()} Raffae. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
