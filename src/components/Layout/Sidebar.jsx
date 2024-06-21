import { List, Avatar, Typography,Box } from '@mui/material';
import { Home, Business, LocalHospital, Search, LocalOffer } from '@mui/icons-material';
import SidebarItem from '../Common/SidebarItem';
import chart from '../../assets/chart.svg';
import users from '../../assets/user.png';
const Sidebar = () => {

  return (
    <div >
      <Box display="flex" alignItems="center" justifyContent= 'space-between' pr={1} >
      <Avatar src={users} sx={{ width: 40, height: 40  }}/>    
      <Typography variant="h6" sx={{ fontSize:'0.9rem' }}>
        User Name
      </Typography>
      <Avatar src={chart} alt="User Chart" sx={{ width: 40 ,height: 40 }} />
    </Box>

      <List>
        <SidebarItem to="services" icon={<Home fontSize='medium'/>} primary="Home" />
        <SidebarItem to="/institutions" icon={<Business fontSize='medium'/>} primary="My Institutions" />
        <SidebarItem to="/doctor-online" icon={<LocalHospital fontSize='medium'/>} primary="Doctor Online" />
        <SidebarItem to="/search-drugs" icon={<Search fontSize='medium' />} primary="Search Drugs" />
        <SidebarItem to="/offers" icon={<LocalOffer fontSize='medium' />} primary="Offers" />
      </List>
    </div>
  );
};

export default Sidebar;
