
import { Box, Typography } from '@mui/material';

export default function LinedHeader(props) {
    return (<Typography variant="h6" gutterBottom component="div" sx={{
      position: 'relative',
      display: 'inline-block',
      marginBottom: props.mb?props.mb:'30px',
      marginLeft: '20px',
      letterSpacing: '1px'
    }}>
      {props.text}
      <Box sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '50%',
        height: '4px',
        backgroundColor: '#3b86ff',
        borderRadius: '10px',
        transform: 'translateY(2px)',
        letterSpacing: '2px'
      }} />
    </Typography>);
  }