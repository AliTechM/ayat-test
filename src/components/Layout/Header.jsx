import React from 'react';
import { useLocation } from 'react-router-dom';
import { Breadcrumbs, Link, Typography, Box } from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';

const Header = () => {
  const location = useLocation();
  
  // Extract url
  const pathname = location.pathname;
  const pathSegments = pathname.split('/').filter(segment => segment); //take empty 
  const dynamicSegment = pathSegments.length > 1 ? pathSegments.slice(1).join(' ›› ') : null; // Adjust to the structure

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb" separator="››">
        <Link sx={{ color: "primary", textDecoration: 'none' }} href="/home/services">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <HomeIcon sx={{ mr: 1 }} color="primary" />
            Home
          </Box>
        </Link>
        <Link sx={{ color: 'black', textDecoration: 'none' }} href="/profile">
          Profile
        </Link>
        {dynamicSegment && (
          <Typography color="textPrimary">
            {dynamicSegment}
          </Typography>
        )}
      </Breadcrumbs>
    </div>
  );
};

export default Header;
