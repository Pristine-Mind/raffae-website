import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  Button,
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
  {
    id: 1,
    name: 'Lorem ipsum jacket',
    image: productImg1,
    description:
      'A stylish jacket made from high-quality materials, perfect for all seasons.',
    discount: '-10%',
    rating: 4,
    newPrice: 'NPR11.2',
    oldPrice: 'NPR12.45',
  },
  {
    id: 2,
    name: 'Lorem ipsum coat',
    image: productImg2,
    description:
      'Elegant coat designed to keep you warm and fashionable during the colder months.',
    discount: '-15%',
    rating: 2,
    newPrice: 'NPR15.72',
    oldPrice: 'NPR18.5',
  },
  {
    id: 3,
    name: 'Lorem ipsum jacket',
    image: productImg3,
    description:
      'Comfortable and versatile jacket suitable for various occasions and styles.',
    discount: '-40%',
    isNew: true,
    rating: 3,
    newPrice: 'NPR10.47',
    oldPrice: 'NPR17.45',
  },
];

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

const NewBadge = styled(Box)(() => ({
  position: 'absolute',
  top: 32,
  right: 8,
  backgroundColor: '#ff66ff',
  color: '#fff',
  padding: '2px 6px',
  fontSize: '0.75rem',
  borderRadius: 4,
  fontWeight: 'bold',
}));

const Shop: React.FC = () => {
  const [sortOption, setSortOption] = React.useState('default');
  const [view, setView] = React.useState<'grid3' | 'grid4' | 'list'>('grid3');
  const navigate = useNavigate();
  const handleSelectOption = (productId: number) => {
    navigate(`/product/${productId}`);
  };

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

  const getGridItemSize = () => {
    switch (view) {
      case 'grid3':
        return { xs: 12, sm: 6, md: 4 };
      case 'grid4':
        return { xs: 12, sm: 6, md: 3 };
      case 'list':
        return { xs: 12 };
      default:
        return { xs: 12, sm: 6, md: 4 };
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.15, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Box sx={{ maxWidth: 1400, margin: '0 auto', py: 4, px: { xs: 2, md: 3 } }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          {/* Search */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
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
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
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

        <Grid item xs={12} md={9}>
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
              <Typography variant="body2" sx={{ color: '#666' }}>
                Showing {products.length} of 144 results
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton
                onClick={() => setView('grid3')}
                color={view === 'grid3' ? 'primary' : 'default'}
                aria-label="3-column grid view"
              >
                <ViewModuleIcon
                  fontSize="small"
                  color={view === 'grid3' ? 'primary' : 'inherit'}
                />
              </IconButton>
              <IconButton
                onClick={() => setView('grid4')}
                color={view === 'grid4' ? 'primary' : 'default'}
                aria-label="4-column grid view"
              >
                <ViewComfyIcon
                  fontSize="small"
                  color={view === 'grid4' ? 'primary' : 'inherit'}
                />
              </IconButton>
              <IconButton
                onClick={() => setView('list')}
                color={view === 'list' ? 'primary' : 'default'}
                aria-label="list view"
              >
                <ViewListIcon
                  fontSize="small"
                  color={view === 'list' ? 'primary' : 'inherit'}
                />
              </IconButton>
            </Box>
          </Box>

          <Grid
            container
            spacing={3}
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {products.map((product) => (
              <Grid
                item
                key={product.id}
                {...getGridItemSize()}
                component={motion.div}
                variants={itemVariants}
              >
                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.02 }}
                  sx={{
                    display: view === 'list' ? 'flex' : 'block',
                    position: 'relative',
                    backgroundColor: '#fff',
                    p: 2,
                    boxShadow: '0 0 6px rgba(0,0,0,0.1)',
                    borderRadius: 1,
                    height: '100%',
                    transition: 'box-shadow 0.3s',
                    '&:hover': {
                      boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  {product.discount && <DiscountBadge>{product.discount}</DiscountBadge>}
                  {product.isNew && <NewBadge>New</NewBadge>}

                  <CardMedia
                    component="img"
                    src={product.image}
                    alt={product.name}
                    sx={{
                      width: view === 'list' ? 180 : '100%', 
                      height: view === 'list' ? 180 : 200,
                      marginBottom: view === 'list' ? 0 : 2,
                      marginRight: view === 'list' ? 2 : 0,
                      objectFit: 'cover',
                      borderRadius: 1,
                    }}
                  />

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}
                  >
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

                    <Typography
                      variant="body2"
                      sx={{
                        color: '#555',
                        mb: view === 'list' ? 2 : 1,
                        display: '-webkit-box',
                        WebkitLineClamp: view === 'list' ? 3 : 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {product.description}
                    </Typography>

                    <Rating
                      name={`rating-${product.id}`}
                      value={product.rating}
                      precision={0.5}
                      readOnly
                      size="small"
                    />

                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 'bold', mt: 1 }}
                    >
                      {product.newPrice}{' '}
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{
                          textDecoration: 'line-through',
                          color: '#999',
                          ml: 1,
                        }}
                      >
                        {product.oldPrice}
                      </Typography>
                    </Typography>

                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{
                        mt: 2,
                        padding: '5px 15px',
                        fontSize: '0.875rem',
                        alignSelf: 'flex-start',
                      }}
                      onClick={() => handleSelectOption(3)}
                    >
                      Select Option
                    </Button>
                  </Box>
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
