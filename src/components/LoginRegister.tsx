import React from 'react';
import { Box, Tabs, Tab, Divider } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const LoginRegister: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activeTab = location.pathname === '/register' ? 1 : 0;

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    navigate(newValue === 0 ? '/login' : '/register');
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 400,
        mx: 'auto',
        mt: 4,
        px: 2,
        textAlign: 'center',
      }}
    >
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        centered
        variant="fullWidth"
        TabIndicatorProps={{ style: { display: 'none' } }}
      >
        <Tab
          label="Login"
          sx={{
            color: activeTab === 0 ? 'purple' : 'black',
            fontWeight: activeTab === 0 ? 'bold' : 'normal',
            textTransform: 'none',
            fontSize: '1.2rem',
          }}
        />
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        <Tab
          label="Register"
          sx={{
            color: activeTab === 1 ? 'purple' : 'black',
            fontWeight: activeTab === 1 ? 'bold' : 'normal',
            textTransform: 'none',
            fontSize: '1.2rem',
          }}
        />
      </Tabs>

      <Divider sx={{ my: 3 }} />

      {activeTab === 0 ? <LoginForm /> : <RegisterForm />}
    </Box>
  );
};

export default LoginRegister;
