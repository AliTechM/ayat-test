import React from 'react';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledButton = styled(Button)(({ dir ,top,width }) => ({
  position: 'absolute',
  top: top?top:'40%',
  left: dir === 'left' ? '0' : 'auto',
  right: dir === 'right' ? '0' : 'auto',
  backgroundColor: '#3b86ff',
  color: '#fff',
  borderRadius: dir === 'left' ? '0 20px 20px 0' : '20px 0 0 20px',
  width:  width?width:'45px',
  height:'45px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  zIndex: '1',
  '&:hover': {
    backgroundColor: '#ebf3ff',
    color: 'black'
  }
}));

export default function SideButton({ children,...props }) {
  return (
    <Box {...props}>
      <StyledButton dir={props.dir} top={props.top} width={props.width}>
        {children}
      </StyledButton>
    </Box>
  );
}
