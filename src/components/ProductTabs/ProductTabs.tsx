import React from 'react';
import {
  Box,
  Tabs,
  Tab,
  Grid,
  Typography,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  styled,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { motion, AnimatePresence } from 'framer-motion';

import car_charger from '../../assets/car_charger.webp';
import earbuds from '../../assets/earbuds.webp';
import power_bank from '../../assets/power_bank.webp';
import raffae_charger from '../../assets/raffae_charger.webp';
import speaker from '../../assets/speaker.webp';

interface Product {
  id: number;
  name: string;
  newPrice: string;
  oldPrice: string;
  discount: string;
  isNew?: boolean;
  image: string;
}

const newArrivals: Product[] = [
  {
    id: 1,
    name: 'Lorem ipsum speaker',
    newPrice: 'NPR9.54',
    oldPrice: 'NPR10.6',
    discount: '-10%',
    isNew: true,
    image: car_charger,
  },
  {
    id: 2,
    name: 'Lorem ipsum camera',
    newPrice: 'NPR10',
    oldPrice: 'NPR12.5',
    discount: '-20%',
    isNew: true,
    image: earbuds,
  },
  {
    id: 3,
    name: 'Lorem ipsum small speaker',
    newPrice: 'NPR2.25',
    oldPrice: 'NPR2.5',
    discount: '-10%',
    isNew: true,
    image: power_bank,
  },
  {
    id: 4,
    name: 'Lorem ipsum grinder',
    newPrice: 'NPR18',
    oldPrice: 'NPR22.5',
    discount: '-20%',
    isNew: true,
    image: raffae_charger,
  },
  {
    id: 5,
    name: 'Lorem ipsum bluetooth',
    newPrice: 'NPR29.25',
    oldPrice: 'NPR32.5',
    discount: '-10%',
    isNew: true,
    image: speaker,
  },
];

const bestSellers: Product[] = [
  {
    id: 6,
    name: 'Bestseller Speaker',
    newPrice: 'NPR15',
    oldPrice: 'NPR20',
    discount: '-25%',
    isNew: false,
    image: speaker,
  },
];

const saleItems: Product[] = [
  {
    id: 7,
    name: 'Sale Item Light',
    newPrice: 'NPR5.99',
    oldPrice: 'NPR9.99',
    discount: '-40%',
    isNew: false,
    image: speaker,
  },
];

const DiscountBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  color: '#bc9a64',
  fontWeight: 'bold',
  textAlign: 'right',
}));

const ProductCard = styled(Card)(() => ({
  position: 'relative',
  boxShadow: 'none',
  borderRadius: 0,
  backgroundColor: '#f9f9f9',
  transition: 'transform 0.3s ease-in-out',
  display: 'flex',
  flexDirection: 'column',
  height: '400px',

  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  },
}));

const ImageContainer = styled(Box)(() => ({
  position: 'relative',
  width: '100%',
  flex: 1,
  overflow: 'hidden',
}));

const StyledCardMedia = styled(CardMedia)(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  transition: 'transform 0.3s ease-in-out',

  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const MotionProductCard = motion(ProductCard);


function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}


const ProductTabs: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const renderProducts = (products: Product[]) => (
    <Grid
      container
      spacing={3}
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
          lg={3}
          key={product.id}
          component={motion.div}
          variants={itemVariants}
        >
          <MotionProductCard whileHover={{ scale: 1.05 }}>
            <DiscountBadge>
              <div>{product.discount}</div>
              {product.isNew && <div>New</div>}
            </DiscountBadge>
            <ImageContainer>
              <StyledCardMedia
                component="img"
                src={product.image}
                alt={product.name}
              />
            </ImageContainer>
            <CardContent sx={{ textAlign: 'left' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {product.name}
                </Typography>
                <IconButton sx={{ p: 0.5 }}>
                  <FavoriteBorderIcon fontSize="small" />
                </IconButton>
              </Box>
              <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333' }}>
                {product.newPrice}{' '}
                <Typography
                  component="span"
                  variant="body2"
                  sx={{
                    textDecoration: 'line-through',
                    color: '#999',
                    marginLeft: 1,
                  }}
                >
                  {product.oldPrice}
                </Typography>
              </Typography>
            </CardContent>
          </MotionProductCard>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box sx={{ maxWidth: 1200, margin: '0 auto', py: 5 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="New Arrivals" {...a11yProps(0)} />
          <Tab label="Best Sellers" {...a11yProps(1)} />
          <Tab label="Sale Items" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <AnimatePresence exitBeforeEnter>
        {value === 0 && (
          <motion.div
            key="newArrivals"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {renderProducts(newArrivals)}
          </motion.div>
        )}
        {value === 1 && (
          <motion.div
            key="bestSellers"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {renderProducts(bestSellers)}
          </motion.div>
        )}
        {value === 2 && (
          <motion.div
            key="saleItems"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {renderProducts(saleItems)}
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default ProductTabs;
