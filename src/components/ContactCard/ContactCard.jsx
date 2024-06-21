import { Box, Card, CardContent, CardMedia, CardActionArea, Paper, Typography, List, ListItem, ListItemIcon, ListItemText, Link, Divider } from '@mui/material';
import { Phone, Language, Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import clincImg from '../../assets/clinic.png'
import LinedHeader from '../Common/LinedHeader';
import SideButton from '../Common/SideButton';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CreateIcon from '@mui/icons-material/Create';

const ContactCard = () => {
  return (
    <Paper sx={{ borderRadius: '15px', overflow: 'hidden' }}>
      <Card sx={{ boxShadow: '0 -1px 0 0 #e0e0e0' }}>
        <CardActionArea>
        <Box sx={{ position: 'relative', display: 'inline-block' }}>
          <SideButton dir='right' top={"65%"}>
            <CameraAltIcon fontSize='small' />
          </SideButton>
          <CardMedia
            component="img"
            image={clincImg}
            alt="clinic contact"
            sx={{
              borderRadius: '0 0 15px 15px'
            }}
          />
          </Box>
          <CardContent sx={{ position: 'relative', marginTop: '20px' }}>
            <Typography gutterBottom variant="h5" component="div">
              lorem ipsum
            </Typography>
            <Typography variant="body2" color="#a4afb7">
              lorem ipsum dolor sit amet consectetur adipiscing
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Divider variant='middle' sx={{ marginBottom: '15px' }} />

      <Box sx={{ position: 'relative', pb: "25px" }}>
        <SideButton dir='right' top="0">
          <CreateIcon fontSize='small' />
        </SideButton>
        <LinedHeader text='Contact Us' mb="20px" />
        <List>
          <ListItem sx={{ py: '2px' }}>
            <ListItemIcon>
              <Phone color='primary' fontSize='small' />
            </ListItemIcon>
            <ListItemText>
              <Link href="tel:+963123456789" color="inherit" sx={{ textDecoration: 'none' }}>
                +963 123 456 789
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ py: '2px' }}>
            <ListItemIcon>
              <Language color='primary' fontSize='small' />
            </ListItemIcon>
            <ListItemText>
              <Link href="http://google.com" target="_blank"   color="inherit" sx={{ textDecoration: 'none' }}>
                Lorem Ipsum dolor sit
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ py: '2px' }}>
            <ListItemIcon>
              <Facebook color='primary' fontSize='small' />
            </ListItemIcon>
            <ListItemText>
              <Link href="https://facebook.com" target="_blank"   color="inherit" sx={{ textDecoration: 'none' }}>
                Lorem Ipsum dolor sit
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ py: '2px' }}>
            <ListItemIcon>
              <Instagram color='primary' fontSize='small' />
            </ListItemIcon>
            <ListItemText>
              <Link href="https://instagram.com" target="_blank"   color="inherit" sx={{ textDecoration: 'none' }}>
                Lorem Ipsum dolor sit
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ py: '2px' }}>
            <ListItemIcon>
              <LinkedIn color='primary' fontSize='small' />
            </ListItemIcon>
            <ListItemText>
              <Link href="https://linkedin.com" target="_blank"   color="inherit" sx={{ textDecoration: 'none' }}>
                Lorem Ipsum dolor sit
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Box>
    </Paper>
  );
};

export default ContactCard;
