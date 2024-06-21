import { TextField } from '@mui/material';
import { styled } from '@mui/system';

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    },
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  '& .MuiInputBase-root': {
    backgroundColor: '#fff',
    '& input': {
      paddingLeft: '35px',
    },
  },
 '&.MuiInputLabel-root:focus': {
    top: '10px',
 }
}));

export default CustomTextField;
