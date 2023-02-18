import { Typography } from '@mui/material';
import React from 'react';

const Header = () => {
   return (
      <Typography variant='h5' sx={{
         fontFamily: "'Philosopher', sans-serif",
         fontWeight: 700,
         color: '#0d6efd',
      }} >
         Online Customer Survey
      </Typography>
   );
};

export default Header;