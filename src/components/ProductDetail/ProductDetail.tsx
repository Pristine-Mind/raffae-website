import React, { useState } from 'react';
import {
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
  Stack,
} from '@mui/material';
import { FavoriteBorder, ZoomOutMap } from '@mui/icons-material';
import { motion } from 'framer-motion';

import productImg1 from '../../assets/speaker.webp';
import ReviewsTabContent from '../ReviewsTabContent';

const DiscountBadge = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 12,
  left: 12,
  backgroundColor: '#e91e63', // Vibrant pink for discount
  color: '#fff',
  padding: '4px 10px',
  fontSize: '0.85rem',
  borderRadius: 6,
  fontWeight: 'bold',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
  zIndex: 2,
}));

const ZoomIcon = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: 12,
  right: 12,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  zIndex: 2,
  '&:hover': {
    backgroundColor: '#fff',
    transform: 'scale(1.1)',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#1976d2', // MUI primary blue
  color: '#fff',
  padding: '10px 24px',
  borderRadius: 8,
  textTransform: 'none',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#1565c0',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
}));

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const detailsVariant = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const tabPanelVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function TabPanel(props: { children?: React.ReactNode; value: number; index: number }) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      style={{ paddingTop: 16 }}
      {...other}
    >
      {value === index && (
        <motion.div initial="hidden" animate="visible" variants={tabPanelVariant}>
          {children}
        </motion.div>
      )}
    </div>
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
    newPrice: 'NPR11.2',
    oldPrice: 'NPR12.45',
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
  const [tabValue, setTabValue] = useState(1);

  const handleColorChange = (_e: React.MouseEvent<HTMLElement>, newColor: string) => {
    if (newColor) setColor(newColor);
  };
  const handleSizeChange = (_e: React.MouseEvent<HTMLElement>, newSize: string) => {
    if (newSize) setSize(newSize);
  };
  const incrementQuantity = () => setQuantity((q) => q + 1);
  const decrementQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : 1));
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const bgColors = ['#e91e63', '#1976d2', '#4caf50', '#ff9800', '#9c27b0'];

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 16px', backgroundColor: '#f9fafb' }}>
      <Grid container spacing={4}>
        {/* Product Image */}
        <Grid item xs={12} md={6} style={{ position: 'relative' }}>
          {product.discount && (
            <DiscountBadge
              as={motion.div}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
            >
              {product.discount}
            </DiscountBadge>
          )}
          <ZoomIcon aria-label="zoom">
            <ZoomOutMap fontSize="small" />
          </ZoomIcon>
          <motion.div initial="hidden" animate="visible" variants={imageVariant}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 12,
                backgroundColor: '#fff',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              }}
            />
          </motion.div>
        </Grid>

        {/* Product Details */}
        <Grid item xs={12} md={6}>
          <motion.div initial="hidden" animate="visible" variants={detailsVariant}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1, color: '#333' }}>
              {product.name}
            </Typography>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
              <Typography variant="h5" sx={{ color: '#1976d2', mr: 2, fontWeight: 'bold' }}>
                {product.newPrice}
              </Typography>
              <Typography variant="body1" sx={{ textDecoration: 'line-through', color: '#999' }}>
                {product.oldPrice}
              </Typography>
            </div>

            <Rating value={product.rating} precision={0.5} readOnly sx={{ mb: 2, color: '#ff9800' }} />

            <Typography variant="body1" sx={{ color: '#555', mb: 3, lineHeight: 1.6 }}>
              {product.description}
            </Typography>

            {/* Color and Size Selection */}
            <div style={{ display: 'flex', gap: 32, marginBottom: 24 }}>
              <div>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#333' }}>
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
                      sx={{
                        width: 32,
                        height: 32,
                        backgroundColor: clr,
                        borderRadius: '50%',
                        border: '1px solid #ddd',
                        '&.Mui-selected': {
                          border: `2px solid ${clr === '#fff' ? '#333' : '#fff'}`,
                          boxShadow: '0 0 0 2px #1976d2',
                        },
                      }}
                    />
                  ))}
                </ToggleButtonGroup>
              </div>

              <div>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#333' }}>
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
                        height: 40,
                        borderRadius: 8,
                        fontWeight: 'bold',
                        color: '#555',
                        '&.Mui-selected': {
                          backgroundColor: '#1976d2',
                          color: '#fff',
                        },
                      }}
                    >
                      {sz}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </div>
            </div>

            {/* Quantity and Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: 8 }}>
                <Button variant="text" sx={{ minWidth: 40, color: '#1976d2' }} onClick={decrementQuantity}>
                  -
                </Button>
                <TextField
                  value={quantity}
                  size="small"
                  sx={{ width: 60, '& .MuiInputBase-input': { textAlign: 'center' } }}
                  inputProps={{ readOnly: true }}
                />
                <Button variant="text" sx={{ minWidth: 40, color: '#1976d2' }} onClick={incrementQuantity}>
                  +
                </Button>
              </div>

              <StyledButton>Add to Cart</StyledButton>

              <IconButton sx={{ color: '#e91e63' }}>
                <FavoriteBorder />
              </IconButton>
            </div>

            {/* Tags */}
            <div style={{ marginBottom: 24 }}>
              <Typography variant="body2" sx={{ color: '#777', mb: 1, fontWeight: 'bold' }}>
                Tags:
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {product.tags.map((tag, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: bgColors[index % bgColors.length],
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 6,
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                      transition: 'transform 0.2s',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  >
                    {tag}
                  </div>
                ))}
              </Stack>
            </div>
          </motion.div>
        </Grid>
      </Grid>

      {/* Tabs */}
      <div style={{ marginTop: 32 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          centered
          sx={{
            '& .MuiTab-root': { fontWeight: 'bold', textTransform: 'none', fontSize: '1rem' },
            '& .Mui-selected': { color: '#1976d2' },
            '& .MuiTabs-indicator': { backgroundColor: '#1976d2' },
          }}
        >
          <Tab label="Additional Information" {...a11yProps(0)} />
          <Tab label="Description" {...a11yProps(1)} />
          <Tab label="Reviews (2)" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={tabValue} index={0}>
          <div style={{ padding: 16, color: '#555', lineHeight: 1.6 }}>
            <div style={{ marginBottom: 16 }}>
              <Typography variant="subtitle1" component="span" sx={{ fontWeight: 'bold', mr: 1 }}>
                Material:
              </Typography>
              <Typography variant="body2" component="span">
                50% Cotton, 50% Polyester
              </Typography>
            </div>
            <div style={{ marginBottom: 16 }}>
              <Typography variant="subtitle1" component="span" sx={{ fontWeight: 'bold', mr: 1 }}>
                Dimensions:
              </Typography>
              <Typography variant="body2" component="span">
                20 x 10 x 5 cm
              </Typography>
            </div>
            <div style={{ marginBottom: 16 }}>
              <Typography variant="subtitle1" component="span" sx={{ fontWeight: 'bold', mr: 1 }}>
                Weight:
              </Typography>
              <Typography variant="body2" component="span">
                200g
              </Typography>
            </div>
            <Typography variant="body2">
              This jacket is made from premium quality fabric and is suitable for everyday use and travel. Wash instructions: machine wash cold, do not bleach.
            </Typography>
          </div>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <div style={{ padding: 16, color: '#555', lineHeight: 1.6 }}>
            <Typography variant="body1">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores...
            </Typography>
          </div>
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <ReviewsTabContent />
        </TabPanel>
      </div>
    </div>
  );
};

export default ProductDetail;