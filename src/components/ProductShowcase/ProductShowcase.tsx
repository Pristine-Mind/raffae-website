import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

import product1 from '../../assets/product1.webp';
import product2 from '../../assets/product2.webp';
import product3 from '../../assets/product3.webp';

const products = [
  { id: 1, img: product1, name: 'Speaker Mini' },
  { id: 2, img: product2, name: 'Wireless Headset' },
  { id: 3, img: product3, name: 'Portable Charger' },
];

const ProductShowcase: React.FC = () => {
  return (
    <Box sx={{ maxWidth: 1200, margin: '50px auto', px: 2 }}>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={4} key={product.id}>
            <Box sx={{ textAlign: 'center' }}>
              <Box
                component="img"
                src={product.img}
                alt={product.name}
                sx={{
                  width: '100%',
                  height: 'auto',
                  marginBottom: 2,
                  // Transition for smooth zoom
                  transition: 'transform 0.3s ease-in-out',
                  // On hover, scale up (zoom in)
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                {product.name}
              </Typography>

            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductShowcase;
