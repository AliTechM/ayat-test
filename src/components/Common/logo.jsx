import React from 'react';
import { Box } from '@mui/material';

const Logo = ({ src, alt, width,margin ,onClick}) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: width || '45%',
        height: 'auto',
        display: 'block', 
        margin: margin? margin :0,
        cursor:'pointer'
      }}
      onClick={onClick}
      
    />
  );
};

export default Logo;
