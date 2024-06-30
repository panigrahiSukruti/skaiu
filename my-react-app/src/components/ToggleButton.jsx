// ToggleButton.js
import React from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useStore from '../store';

const ToggleButton = () => {
  const toggleSidebar = useStore((state) => state.toggleSidebar);

  return (
    <IconButton color="inherit" aria-label="open drawer" onClick={toggleSidebar}>
      <MenuIcon />
    </IconButton>
  );
};

export default ToggleButton;
