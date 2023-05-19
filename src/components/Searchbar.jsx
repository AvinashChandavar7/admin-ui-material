import React from 'react';
import { Box, TextField } from '@mui/material';

const Searchbar = ({ handleSearch, searchTerm }) => {
  return (
    <Box>
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="search by name, email, or role"
        fullWidth
        onChange={handleSearch}
        value={searchTerm}
      />
    </Box>
  );
};

export default Searchbar;
