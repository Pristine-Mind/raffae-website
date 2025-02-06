import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Rating,
  Button,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  styled,
  Tabs,
  Tab,
} from '@mui/material';
import { FavoriteBorder, ZoomOutMap } from '@mui/icons-material';

import productImg1 from '../../assets/speaker.webp';
import ReviewsTabContent from '../ReviewsTabContent';

const DiscountBadge = styled(Box)(() => ({
  position: 'absolute',
  top: 8,
  left: 8,
  backgroundColor: '#ff66ff',
  color: '#fff',
  padding: '3px 8px',
  fontSize: '0.75rem',
  borderRadius: 4,
  fontWeight: 'bold',
  zIndex: 2,
}));

const ZoomIcon = styled(IconButton)(() => ({
  position: 'absolute',
  top: 8,
  right: 8,
  backgroundColor: '#f5f5f5',
  zIndex: 2,
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
}));

function TabPanel(props: { children?: React.ReactNode; value: number; index: number }) {
  const { children, value, index, ...other } = props;
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
      sx={{ pt: 2 }}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const ProductDetail: React.FC = () => {
  const product = {
    name: 'Lorem ipsum jacket',
    newPrice: '€11.2',
    oldPrice: '€12.45',
    discount: '-10%',
    rating: 4,
    description:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
    colors: ['#ccc', '#333', '#db3d44', '#fff'],
    sizes: ['X', 'M', 'XL'],
    image: productImg1,
    categories: ['fashion', 'men'],
    tags: ['electronics', 'charger'],
  };

  const [color, setColor] = useState(product.colors[0]);
  const [size, setSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const handleColorChange = (_e: React.MouseEvent<HTMLElement>, newColor: string) => {
    if (newColor) setColor(newColor);
  };
  const handleSizeChange = (_e: React.MouseEvent<HTMLElement>, newSize: string) => {
    if (newSize) setSize(newSize);
  };
  const incrementQuantity = () => setQuantity((q) => q + 1);
  const decrementQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const [tabValue, setTabValue] = useState(1);
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', py: 4, px: { xs: 2, md: 3 } }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
          {/* Discount Badge (if applicable) */}
          {product.discount && <DiscountBadge>{product.discount}</DiscountBadge>}

          <ZoomIcon aria-label="zoom">
            <ZoomOutMap />
          </ZoomIcon>

          <Box
            component="img"
            src={product.image}
            alt={product.name}
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 1,
              backgroundColor: '#fafafa',
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          {/* Title */}
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
            {product.name}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography
              variant="h6"
              sx={{ color: 'primary.main', mr: 2, fontWeight: 'bold' }}
            >
              {product.newPrice}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textDecoration: 'line-through',
                color: '#999',
              }}
            >
              {product.oldPrice}
            </Typography>
          </Box>

          <Rating
            name="rating"
            value={product.rating}
            precision={0.5}
            readOnly
            sx={{ mb: 2 }}
          />

          <Typography variant="body2" sx={{ color: '#555', mb: 3 }}>
            {product.description}
          </Typography>

          <Box sx={{ display: 'flex', gap: 4, mb: 3 }}>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                Color
              </Typography>
              <ToggleButtonGroup
                exclusive
                value={color}
                onChange={handleColorChange}
                aria-label="color selection"
              >
                {product.colors.map((clr) => (
                  <ToggleButton
                    key={clr}
                    value={clr}
                    aria-label={clr}
                    sx={{
                      width: 28,
                      height: 28,
                      minWidth: 'unset',
                      backgroundColor: clr,
                      '&.Mui-selected': {
                        outline: `2px solid ${clr === '#fff' ? '#000' : '#fff'}`,
                      },
                    }}
                  />
                ))}
              </ToggleButtonGroup>
            </Box>

            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                Size
              </Typography>
              <ToggleButtonGroup
                exclusive
                value={size}
                onChange={handleSizeChange}
                aria-label="size selection"
              >
                {product.sizes.map((sz) => (
                  <ToggleButton
                    key={sz}
                    value={sz}
                    sx={{
                      width: 40,
                      height: 32,
                      minWidth: 'unset',
                      fontSize: '0.875rem',
                      '&.Mui-selected': {
                        backgroundColor: '#000',
                        color: '#fff',
                      },
                    }}
                  >
                    {sz}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #ccc',
                borderRadius: 1,
              }}
            >
              <Button
                variant="text"
                sx={{ minWidth: 40 }}
                onClick={decrementQuantity}
              >
                -
              </Button>
              <TextField
                value={quantity}
                size="small"
                sx={{ width: 60, textAlign: 'center' }}
                inputProps={{ readOnly: true, style: { textAlign: 'center' } }}
              />
              <Button
                variant="text"
                sx={{ minWidth: 40 }}
                onClick={incrementQuantity}
              >
                +
              </Button>
            </Box>

            <Button
              variant="contained"
              sx={{
                backgroundColor: '#000',
                color: '#fff',
                borderRadius: 1,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#333',
                },
              }}
            >
              ADD TO CART
            </Button>

            <IconButton>
              <FavoriteBorder />
            </IconButton>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ color: '#777' }}>
              <strong>Categories :</strong>{' '}
              <strong>{product.categories.join('  ')}</strong>
            </Typography>
            <Typography variant="body2" sx={{ color: '#777' }}>
              <strong>Tags :</strong>{' '}
              <strong>{product.tags.join('  ')}</strong>
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Additional Information" {...a11yProps(0)} />
          <Tab label="Description" {...a11yProps(1)} />
          <Tab label="Reviews(2)" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={tabValue} index={0}>
          <Typography variant="body2" sx={{ color: '#555' }}>
            <strong>Material:</strong> 50% Cotton, 50% Polyester <br />
            <strong>Dimensions:</strong> 20 x 10 x 5 cm <br />
            <strong>Weight:</strong> 200g <br />
            This jacket is made from premium quality fabric and suitable for
            everyday use and travel. Wash instructions: machine wash cold, do
            not bleach.
          </Typography>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <Typography variant="body2" sx={{ color: '#555' }}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt...
          </Typography>
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <ReviewsTabContent />
        </TabPanel>
      </Box>
    </Box>
  );
};

export default ProductDetail;
