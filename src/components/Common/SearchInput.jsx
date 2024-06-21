import { TextField, InputAdornment, Box } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchInput = ({ value, onChange, onClear }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <TextField
        variant="outlined"
        placeholder="Add New Services"
        value={value}
        onChange={onChange}
        fullWidth
        sx={{ ml: 1, borderRadius: '25px', '& .MuiOutlinedInput-root': { borderRadius: '25px' } }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search color="primary" fontSize='large' />
            </InputAdornment>
          ),
       
        }}
      />
    </Box>
  );
};
export default SearchInput;
