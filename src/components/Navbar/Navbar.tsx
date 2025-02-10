import React from 'react';
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import floneLogo from '../../assets/logo.webp';

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'transparent',
  boxShadow: 'none',
});

const Navbar: React.FC = () => {
  // State and handlers for the user-menu dropdown
  const [userMenuAnchor, setUserMenuAnchor] = React.useState<null | HTMLElement>(null);

  const handleUserIconClick = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchor(null);
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
        {/* Left Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" sx={{ color: '#555' }}>
            Call Us 3965410
          </Typography>
        </Box>

        {/* Center Logo */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <Box
            component="img"
            src={floneLogo}
            alt="Flone Logo"
            sx={{ height: 40, cursor: 'pointer' }}
          />
        </Box>

        {/* Right Icons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton>
            <SearchIcon />
          </IconButton>

          {/* User (Profile) Icon */}
          <IconButton onClick={handleUserIconClick}>
            <PersonOutlineIcon />
          </IconButton>

          <IconButton>
            <CompareArrowsIcon />
          </IconButton>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton>
            <ShoppingBagIcon />
          </IconButton>
        </Box>
      </Toolbar>

      <Divider />

      {/* Bottom Nav Links */}
      <Toolbar
        sx={{
          minHeight: 50,
          px: { xs: 2, sm: 4 },
          display: 'flex',
          justifyContent: 'center',
          gap: 4,
        }}
      >
        <Typography
          variant="body1"
          sx={{ cursor: 'pointer', color: '#555' }}
          component={Link}
          to="/"
          style={{ textDecoration: 'none' }}
        >
          Home
        </Typography>
        <Typography
          variant="body1"
          sx={{ cursor: 'pointer', color: '#555' }}
          component={Link}
          to="/shop"
          style={{ textDecoration: 'none' }}
        >
          Shop
        </Typography>
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

      {/* Menu for user dropdown */}
      <Menu
        anchorEl={userMenuAnchor}
        open={Boolean(userMenuAnchor)}
        onClose={handleUserMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem component={Link} to="/login" onClick={handleUserMenuClose}>
          Login
        </MenuItem>
        <MenuItem component={Link} to="/register" onClick={handleUserMenuClose}>
          Register
        </MenuItem>
        <MenuItem component={Link} to="/my-account" onClick={handleUserMenuClose}>
          My Account
        </MenuItem>
      </Menu>
    </StyledAppBar>
  );
};

export default Navbar;
