import  { useState } from 'react';
import { Box, Collapse, Checkbox, Typography, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import LinedHeader from '../components/Common/LinedHeader';
import SearchInput from '../components/Common/SearchInput';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SideButton from '../components/Common/SideButton';
import classes from './AddServices.module.css';
import { useNavigate } from 'react-router-dom';
const services = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur",
    subItems: [
      {
        title: "Lorem ipsum dolor sit amet, consectetur",
        subItems: [
          "Lorem ipsum dolor sit amet, consectetur",
          "Lorem ipsum dolor sit amet, consectetur"
        ]
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur",
        subItems: [
          "Lorem ipsum dolor sit amet, consectetur",
          "Lorem ipsum dolor sit amet, consectetur"
        ]
      }
    ]
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur",
    subItems: [
      {
        title: "Lorem ipsum dolor sit amet, consectetur",
        subItems: [
          "Lorem ipsum dolor sit amet, consectetur",
          "Lorem ipsum dolor sit amet, consectetur"
        ]
      }
    ]
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur",
    subItems: []
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur",
    subItems: []
  }
];

const AddNewServices = () => {
  const [open, setOpen] = useState({});
  const [checked, setChecked] = useState([]);
  const navigate= useNavigate();
  const handleToggle = (index, level) => {
    if (level === 0) {
      const isOpen = !open[index];
      const updatedOpen = { ...open, [index]: isOpen };
      
      // collapse all 
      services[index].subItems.forEach((_, subIndex) => {
        updatedOpen[`${index}-${subIndex}`] = isOpen;
        services[index].subItems[subIndex].subItems?.forEach((_, grandIndex) => {
          updatedOpen[`${index}-${subIndex}-${grandIndex}`] = isOpen;
        });
      });
      
      setOpen(updatedOpen);
    } else {
      setOpen(prev => ({ ...prev, [index]: !prev[index] }));
    }
  };

  const handleCheck = (value, subItems) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
      subItems.forEach(item => {
        if (checked.indexOf(item) === -1) {
          newChecked.push(item);
        }
      });
    } else {
      newChecked.splice(currentIndex, 1);
      subItems.forEach(item => {
        const itemIndex = checked.indexOf(item);
        if (itemIndex !== -1) {
          newChecked.splice(itemIndex, 1);
        }
      });
    }

    setChecked(newChecked);
  };
 const handelExiting=()=>{
  navigate('/home/services');
 } 

  return (
    <Box sx={{ pl:3,py:4, backgroundColor: '#ffffff', width:'90%',maxWidth:'800px',borderRadius: '15px', mt: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <LinedHeader text="Add New Services"/>       
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2,pl:4, position:'relative' }}>
      <SearchInput />
      <IconButton sx={{ position:'absolute',right: '114px', top:'0'}} onClick={handelExiting}>
          <HighlightOffIcon color='primary' sx={{fontSize:'50px'}} />
        </IconButton>
        <SideButton dir={'right'} top={'10%'} width={'110px'}>
           <Typography sx={{textTransform:'capitalize'}}>Link</Typography>
        </SideButton>
    </Box>
      
      <List sx={{pl:5}}>
        {services.map((parent, index) => (
          <div key={index}>
            <ListItem button onClick={() => handleToggle(index, 0)}>
              {open[index] ? <ExpandLess /> : <ExpandMore />}
              <ListItemText primary={parent.title} />
            </ListItem>
            <Collapse in={open[index]} timeout="auto" unmountOnExit >
              <List component="div" disablePadding sx={{bgcolor:'#f5f9ff',borderBottom: '5px solid white'}}>
                {parent.subItems.map((child, subIndex) => (
                  <div key={subIndex} >
                    <ListItem button sx={{ pl: 4, bgcolor: '#F5F9FF' }}>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={checked.indexOf(child.title) !== -1}
                          tabIndex={-1}
                          disableRipple
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCheck(child.title, child.subItems);
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText primary={child.title} />
                    </ListItem>
                    <Collapse in={open[`${index}-${subIndex}`]} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding className={classes.theParents}>
                        {child.subItems.map((grandchild, grandIndex) => (
                          <ListItem key={grandIndex} sx={{ pl: 8, bgcolor: '#EBF3FF' , width: '85%',margin:' 0 auto',
                            borderBottom: '5px solid #f5f9ff' }}>
                            <ListItemIcon>
                              <Checkbox
                                edge="start"
                                checked={checked.indexOf(grandchild) !== -1}
                                tabIndex={-1}
                                disableRipple
                                onClick={() => handleCheck(grandchild, [])}
                              />
                            </ListItemIcon>
                            <ListItemText primary={grandchild} />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </div>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    
    </Box>
  );
};

export default AddNewServices;
