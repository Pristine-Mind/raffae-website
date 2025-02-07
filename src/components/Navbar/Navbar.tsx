// src/components/Navbar.tsx
import React from 'react';
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import floneLogo from '../../assets/logo.webp';

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'transparent',
  boxShadow: 'none',
});

const Navbar: React.FC = () => {
  // State to handle the dropdown menu for the Personal Icon
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledAppBar position="static">
      <Toolbar
        sx={{
          minHeight: 50,
          px: { xs: 2, sm: 4 },
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" sx={{ color: '#555' }}>
            Call Us 3965410
          </Typography>
        </Box>

        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <Box
            component="img"
            src={floneLogo}
            alt="Flone Logo"
            sx={{ height: 40, cursor: 'pointer' }}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton>
            <SearchIcon />
          </IconButton>
          {/* Personal Icon that opens a dropdown menu */}
          <IconButton onClick={handleMenuOpen}>
            <PersonOutlineIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem component={Link} to="/login" onClick={handleMenuClose}>
              Login
            </MenuItem>
            <MenuItem component={Link} to="/register" onClick={handleMenuClose}>
              Register
            </MenuItem>
          </Menu>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton>
            <ShoppingBagIcon />
          </IconButton>
        </Box>
      </Toolbar>

      <Divider />

      <Toolbar
        sx={{
          minHeight: 50,
          px: { xs: 2, sm: 4 },
          display: 'flex',
          justifyContent: 'center',
          gap: 4,
        }}
      >
        {/* Link to Home */}
        <Typography
          variant="body1"
          sx={{ cursor: 'pointer', color: '#555' }}
          component={Link}
          to="/"
          style={{ textDecoration: 'none' }}
        >
          Home
        </Typography>

        {/* Link to Shop */}
        <Typography
          variant="body1"
          sx={{ cursor: 'pointer', color: '#555' }}
          component={Link}
          to="/shop"
          style={{ textDecoration: 'none' }}
        >
          Shop
        </Typography>

        {/* Link to Contact Us */}
        <Typography 
          variant="body1"
          sx={{ cursor: 'pointer', color: '#555' }}
          component={Link}
          to="/contact-us"
          style={{ textDecoration: 'none' }}
        >
          Contact Us
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
