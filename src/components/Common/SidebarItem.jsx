import { NavLink, useLocation } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import styles from './SidebarItem.module.css';

const SidebarItem = ({ to, icon, primary }) => {
  const location = useLocation();
  const isSelected = location.pathname === to;

  return (
    <NavLink
    to={to}
    className={({ isActive }) => 
      `${styles.navLink} ${isActive ? styles.selected : ''}`
    }
  >
      <ListItem
        sx={{ my: 2 }}
        button
        selected={isSelected}
        disableRipple
      >
        <ListItemIcon sx={{ minWidth: '30px' }}>{icon}</ListItemIcon>
        <ListItemText sx={{ fontSize: '4vw' }} primary={primary} />
      </ListItem>
    </NavLink>
  );
};

export default SidebarItem;
