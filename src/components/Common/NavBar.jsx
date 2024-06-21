import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Menu, MenuItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Dome from '../../assets/Dome.png';
import Logo from './logo';
import { useNavigate } from 'react-router-dom';

const AppBarContainer = styled(AppBar)({
  backgroundColor: '#f5f6fa',
  boxShadow: 'none',
  borderBottom: '1px solid #e0e0e0',
});

const ToolbarContainer = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const IconButtonsContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const CustomIconButton = styled(IconButton)(({ active }) => ({
  margin: '0 10px',
  color: active ? 'black' : '#d0dbe5',
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: '#dce1e8',
  },
}));

const NavBar = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleIconClick = (event) => {
    setAnchorEl(event.currentTarget);
    setActiveIcon('account');
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActiveIcon('');
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    handleClose();
    navigate('/');
  };

  const handleLogoClick = () => {
    navigate('/home');
  };

  return (
    <AppBarContainer position="static" sx={{ border: 'none' }}>
      <ToolbarContainer>
        <Logo onClick={handleLogoClick} src={Dome} width="14%" alt="Dome logo" margin="5px 0 0 5px;" />

        <IconButtonsContainer>
          <CustomIconButton>
            <ChatIcon fontSize="small" />
          </CustomIconButton>
          <CustomIconButton>
            <Badge
              color="primary"
              variant="dot"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <NotificationsIcon fontSize="small" />
            </Badge>
          </CustomIconButton>
          <Box>
            <CustomIconButton
              active={activeIcon === 'account'}
              onClick={handleIconClick}
            >
              <AccountCircleIcon fontSize="small" />
            </CustomIconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        </IconButtonsContainer>
      </ToolbarContainer>
    </AppBarContainer>
  );
};

export default NavBar;
