import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

import product1 from '../../assets/product1.webp';
import product2 from '../../assets/product2.webp';
import product3 from '../../assets/product3.webp';

const products = [
  { id: 1, img: product1, name: 'Speaker Mini' },
  { id: 2, img: product2, name: 'Wireless Headset' },
  { id: 3, img: product3, name: 'Portable Charger' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProductShowcase: React.FC = () => {
  return (
    <Box sx={{ maxWidth: 1600, margin: '50px auto', px: 2 }}>
      <Grid
        container
        spacing={4}
        component={motion.div}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {products.map((product) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={product.id}
            component={motion.div}
            variants={itemVariants}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Box
                component={motion.img}
                src={product.img}
                alt={product.name}
                loading="lazy"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                sx={{
                  width: '100%',
                  height: 'auto',
                  marginBottom: 2,
                  borderRadius: 2,
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                }}
              />
              <Typography variant="subtitle1" component="h2" sx={{ fontWeight: 'bold' }}>
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
