import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const Login: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 400,
        mx: 'auto',
        mt: 5,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" textAlign="center" mb={2}>
        Login
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        fullWidth
        sx={{
            mt: 2,
            backgroundColor: '#C4832C',
            '&:hover': {
            backgroundColor: '#e0e0e0',
            },
        }}
        >
        Login
        </Button>

    </Box>
  );
};

export default Login;
