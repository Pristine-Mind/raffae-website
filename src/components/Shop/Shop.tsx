import React from 'react';
import {
  Box,
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
  styled,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import ViewListIcon from '@mui/icons-material/ViewList';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// EXAMPLE IMAGES (replace with your own)
import productImg1 from '../../assets/product1.webp';
import productImg2 from '../../assets/product2.webp';
import productImg3 from '../../assets/product3.webp';

interface Product {
  id: number;
  name: string;
  image: string;
  discount?: string;
  isNew?: boolean;
  rating: number;
  newPrice: string;
  oldPrice: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Lorem ipsum jacket',
    image: productImg1,
    discount: '-10%',
    rating: 4,
    newPrice: '€11.2',
    oldPrice: '€12.45',
  },
  {
    id: 2,
    name: 'Lorem ipsum coat',
    image: productImg2,
    discount: '-15%',
    rating: 2,
    newPrice: '€15.72',
    oldPrice: '€18.5',
  },
  {
    id: 3,
    name: 'Lorem ipsum jacket',
    image: productImg3,
    discount: '-40%',
    isNew: true,
    rating: 3,
    newPrice: '€10.47',
    oldPrice: '€17.45',
  },
];

// A pink discount badge in the top-right
const DiscountBadge = styled(Box)(() => ({
  position: 'absolute',
  top: 8,
  right: 8,
  backgroundColor: '#ff66ff',
  color: '#fff',
  padding: '2px 6px',
  fontSize: '0.75rem',
  borderRadius: 4,
  fontWeight: 'bold',
}));

// If product is new, show a "New" badge just below the discount
const NewBadge = styled(Box)(() => ({
  position: 'absolute',
  top: 32, // space it below discount
  right: 8,
  backgroundColor: '#ff66ff',
  color: '#fff',
  padding: '2px 6px',
  fontSize: '0.75rem',
  borderRadius: 4,
  fontWeight: 'bold',
}));

const Shop: React.FC = () => {
  // State for the "sort by" select
  const [sortOption, setSortOption] = React.useState('default');

  // Example categories
  const categories = [
    'All Categories',
    'Fashion',
    'Men',
    'Women',
    'Electronics',
    'Furniture',
    'Plant',
    'Organic Food',
    'Flower',
  ];

  return (
    <Box sx={{ maxWidth: 1400, margin: '0 auto', py: 4 }}>
      {/* 2-column layout: Sidebar (3 or 4) + Main (8 or 9) */}
      <Grid container spacing={4}>
        {/* LEFT SIDEBAR */}
        <Grid item xs={12} md={3}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Search
            </Typography>
            <TextField
              placeholder="Search here..."
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Categories
            </Typography>
            {categories.map((cat) => (
              <Box key={cat} sx={{ mb: 1 }}>
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label={cat}
                />
              </Box>
            ))}
          </Box>
        </Grid>

        {/* RIGHT MAIN */}
        <Grid item xs={12} md={9}>
          {/* Top bar: Sort dropdown, results count, layout icons */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 3,
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            {/* Sort dropdown */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as string)}
                size="small"
              >
                <MenuItem value="default">Default</MenuItem>
                <MenuItem value="priceLow">Price: Low to High</MenuItem>
                <MenuItem value="priceHigh">Price: High to Low</MenuItem>
              </Select>
              <Typography variant="body2" sx={{ color: '#999' }}>
                Showing 15 of 144 result
              </Typography>
            </Box>

            {/* Layout toggle icons */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton>
                <ViewModuleIcon fontSize="small" />
              </IconButton>
              <IconButton>
                <ViewComfyIcon fontSize="small" />
              </IconButton>
              <IconButton>
                <ViewListIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>

          {/* Product Grid */}
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Box
                  sx={{
                    position: 'relative',
                    backgroundColor: '#fff',
                    p: 2,
                    boxShadow: '0 0 5px rgba(0,0,0,0.1)',
                  }}
                >
                  {/* Discount + New badges */}
                  {product.discount && <DiscountBadge>{product.discount}</DiscountBadge>}
                  {product.isNew && <NewBadge>New</NewBadge>}

                  {/* Product Image */}
                  <CardMedia
                    component="img"
                    src={product.image}
                    alt={product.name}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      marginBottom: 2,
                    }}
                  />

                  {/* Product Title + Wishlist Icon */}
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 1,
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      {product.name}
                    </Typography>
                    <IconButton sx={{ p: 0.5 }}>
                      <FavoriteBorderIcon fontSize="small" />
                    </IconButton>
                  </Box>

                  {/* Rating Stars */}
                  <Rating
                    name={`rating-${product.id}`}
                    value={product.rating}
                    precision={0.5}
                    readOnly
                    size="small"
                  />

                  {/* Price */}
                  <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 1 }}>
                    {product.newPrice}{' '}
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ textDecoration: 'line-through', color: '#999', ml: 1 }}
                    >
                      {product.oldPrice}
                    </Typography>
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Shop;
