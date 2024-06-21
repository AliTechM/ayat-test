import { Container, Grid } from '@mui/material';
import Sidebar from './Sidebar';
import Header from './Header';
import TopHead from '../Common/NavBar';
import { Outlet } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


  

const Layout = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));

  const padd = isXs ? 0 : isSm ? 0 : isMd ? 5 : isLg ? 7 : 10;

  return (
    <Container maxWidth={false} disableGutters sx={{ px: 5, py: 2, backgroundColor: '#F5F6FA' }}>
      <TopHead />
      <Grid container spacing={5} pl={5} mt={3}>
        <Grid item xs={12} md={2}  py={3} pr={0} sx={{ backgroundColor: '#ffffff', borderRadius: '10px',paddingLeft:'15px !important' }}>
          <Sidebar />
        </Grid>
        <Grid   item xs={12} md={10} sx={{paddingLeft:`${padd} !important`}}>
          <Header />
          <Outlet/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
