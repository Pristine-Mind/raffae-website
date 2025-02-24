import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Select,
  CardMedia,
  Rating,
  Button,
  styled,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import ViewListIcon from '@mui/icons-material/ViewList';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { motion } from 'framer-motion';

import productImg1 from '../../assets/product1.webp';
import productImg2 from '../../assets/product2.webp';
import productImg3 from '../../assets/product3.webp';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  discount?: string;
  isNew?: boolean;
  rating: number;
  newPrice: string;
  oldPrice: string;
}

const products: Product[] = [
  { id: 1, name: 'Lorem ipsum jacket', image: productImg1, description: 'A stylish jacket made from high-quality materials, perfect for all seasons.', discount: '-10%', rating: 4, newPrice: 'NPR11.2', oldPrice: 'NPR12.45' },
  { id: 2, name: 'Lorem ipsum coat', image: productImg2, description: 'Elegant coat designed to keep you warm and fashionable during the colder months.', discount: '-15%', rating: 2, newPrice: 'NPR15.72', oldPrice: 'NPR18.5' },
  { id: 3, name: 'Lorem ipsum jacket', image: productImg3, description: 'Comfortable and versatile jacket suitable for various occasions and styles.', discount: '-40%', isNew: true, rating: 3, newPrice: 'NPR10.47', oldPrice: 'NPR17.45' },
];

const DiscountBadge = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 12,
  left: 12,
  backgroundColor: '#e91e63', // Vibrant pink for discounts
  color: '#fff',
  padding: '4px 8px',
  fontSize: '0.8rem',
  borderRadius: 6,
  fontWeight: 'bold',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
}));

const NewBadge = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 12,
  right: 12,
  backgroundColor: '#4caf50', // Green for "new" items
  color: '#fff',
  padding: '4px 8px',
  fontSize: '0.8rem',
  borderRadius: 6,
  fontWeight: 'bold',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
}));

const StyledCard = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#fff',
  padding: theme.spacing(2.5),
  borderRadius: 12,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s ease',
  height: '100%',
  '&:hover': {
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
    transform: 'translateY(-4px)', // Slight lift on hover
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: '8px 20px',
  borderRadius: 8,
  fontWeight: 'bold',
  textTransform: 'none',
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const Shop: React.FC = () => {
  const [sortOption, setSortOption] = React.useState('default');
  const [view, setView] = React.useState<'grid3' | 'grid4' | 'list'>('grid3');
  const navigate = useNavigate();

  const handleSelectOption = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const categories = [
    'All Categories', 'Fashion', 'Men', 'Women', 'Electronics', 'Furniture', 'Plant', 'Organic Food', 'Flower',
  ];

  const getGridItemSize = () => {
    switch (view) {
      case 'grid3': return { xs: 12, sm: 6, md: 4 };
      case 'grid4': return { xs: 12, sm: 6, md: 3 };
      case 'list': return { xs: 12 };
      default: return { xs: 12, sm: 6, md: 4 };
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div style={{ maxWidth: 1400, margin: '0 auto', padding: '32px 16px', backgroundColor: '#f9fafb' }}>
      <Grid container spacing={4}>
        {/* Left Sidebar */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#333' }}>
            Search
          </Typography>
          <TextField
            placeholder="Search products..."
            variant="outlined"
            size="small"
            fullWidth
            sx={{ mb: 4, '& .MuiOutlinedInput-root': { borderRadius: 8 } }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" sx={{ color: '#1976d2' }}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#333' }}>
            Categories
          </Typography>
          {categories.map((cat) => (
            <FormControlLabel
              key={cat}
              control={<Checkbox size="small" color="primary" />}
              label={cat}
              sx={{ mb: 1, '& .MuiTypography-root': { fontSize: '0.95rem', color: '#555' } }}
            />
          ))}
        </Grid>

        {/* Product Grid */}
        <Grid item xs={12} md={9}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <Select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as string)}
                size="small"
                sx={{ minWidth: 160, borderRadius: 2 }}
              >
                <MenuItem value="default">Sort: Default</MenuItem>
                <MenuItem value="priceLow">Price: Low to High</MenuItem>
                <MenuItem value="priceHigh">Price: High to Low</MenuItem>
              </Select>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Showing {products.length} of 144 results
              </Typography>
            </div>

            <div style={{ display: 'flex', gap: 8 }}>
              <IconButton onClick={() => setView('grid3')} color={view === 'grid3' ? 'primary' : 'default'} sx={{ borderRadius: 2 }}>
                <ViewModuleIcon fontSize="small" />
              </IconButton>
              <IconButton onClick={() => setView('grid4')} color={view === 'grid4' ? 'primary' : 'default'} sx={{ borderRadius: 2 }}>
                <ViewComfyIcon fontSize="small" />
              </IconButton>
              <IconButton onClick={() => setView('list')} color={view === 'list' ? 'primary' : 'default'} sx={{ borderRadius: 2 }}>
                <ViewListIcon fontSize="small" />
              </IconButton>
            </div>
          </div>

          <Grid
            container
            spacing={3}
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {products.map((product) => (
              <Grid item key={product.id} {...getGridItemSize()} component={motion.div} variants={itemVariants}>
                <StyledCard component={motion.div} whileHover={{ scale: 1.03 }}>
                  {product.discount && <DiscountBadge>{product.discount}</DiscountBadge>}
                  {product.isNew && <NewBadge>New</NewBadge>}

                  <CardMedia
                    component="img"
                    src={product.image}
                    alt={product.name}
                    sx={{
                      width: view === 'list' ? 200 : '100%',
                      height: view === 'list' ? 200 : 220,
                      objectFit: 'cover',
                      borderRadius: 2,
                      mb: view === 'list' ? 0 : 2,
                      mr: view === 'list' ? 3 : 0,
                    }}
                  />

                  <div style={{ display: view === 'list' ? 'flex' : 'block', flexDirection: 'column', gap: 8 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#333' }}>
                        {product.name}
                      </Typography>
                      <IconButton sx={{ p: 0.5, color: '#e91e63' }}>
                        <FavoriteBorderIcon fontSize="small" />
                      </IconButton>
                    </div>

                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666',
                        mb: 1,
                        display: '-webkit-box',
                        WebkitLineClamp: view === 'list' ? 3 : 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {product.description}
                    </Typography>

                    <Rating value={product.rating} precision={0.5} readOnly size="small" sx={{ mb: 1 }} />

                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                      {product.newPrice}{' '}
                      <Typography component="span" variant="body2" sx={{ textDecoration: 'line-through', color: '#999', ml: 1 }}>
                        {product.oldPrice}
                      </Typography>
                    </Typography>

                    <StyledButton onClick={() => handleSelectOption(product.id)}>
                      Select Option
                    </StyledButton>
                  </div>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Shop;