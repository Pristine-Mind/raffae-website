import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  ThemeProvider,
  createTheme,
} from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'sans-serif',
    h4: {
      fontWeight: 700,
      fontSize: '2rem',
    },
    subtitle1: {
      color: '#777',
      fontSize: '1rem',
      marginBottom: '1.5rem',
    },
  },
  palette: {
    primary: {
      main: '#000000',
    },
  },
});

const Subscribe: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Subscribed Email:', email);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: 400,
          margin: '0 auto',
          textAlign: 'center',
          py: 4,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Subscribe
        </Typography>

        <Typography variant="subtitle1">
          Subscribe to our newsletter to receive news on update
        </Typography>

        <TextField
          placeholder="Your Email Address"
          variant="standard"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            disableUnderline: false,
          }}
          sx={{
            mb: 3,
            mt: 2,
            textAlign: 'left',
          }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: '#000',
            color: '#fff',
            borderRadius: 0,
            width: '100%',
            py: 1.2,
            fontWeight: 700,
            '&:hover': {
              backgroundColor: '#333',
            },
          }}
        >
          SUBSCRIBE
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default Subscribe;
