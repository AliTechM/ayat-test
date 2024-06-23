import React, { useState, useContext } from 'react';
import { Box, Collapse, Checkbox, Typography, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import LinedHeader from '../components/Common/LinedHeader';
import SearchInput from '../components/Common/SearchInput';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SideButton from '../components/Common/SideButton';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../Context/DataContext';
import classes from './AddServices.module.css';

const AddNewServices = () => {
  const { rows: services } = useContext(DataContext);
  const [open, setOpen] = useState({});
  const [checked, setChecked] = useState([]);
  const navigate = useNavigate();

  const handleToggle = (index, level) => {
    if (level === 0) {
      const isOpen = !open[index];
      const updatedOpen = { ...open, [index]: isOpen };

      services[index].details.forEach((_, subIndex) => {
        updatedOpen[`${index}-${subIndex}`] = isOpen;
        services[index].details[subIndex].details?.forEach((_, grandIndex) => {
          updatedOpen[`${index}-${subIndex}-${grandIndex}`] = isOpen;
        });
      });

      setOpen(updatedOpen);
    } else {
      setOpen(prev => ({ ...prev, [index]: !prev[index] }));
    }
  };

  const handleCheck = (value, subItems, parent = null, grandparent = null) => {
    const currentIndex = checked.indexOf(value);
    let newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
      subItems.forEach(item => {
        if (newChecked.indexOf(item.id) === -1) {
          newChecked.push(item.id);
        }
      });

      if (parent) {
        const parentChecked = parent.details.every(item =>
          newChecked.includes(item.id)
        );
        if (parentChecked && newChecked.indexOf(parent.id) === -1) {
          newChecked.push(parent.id);
        }
      }

      if (grandparent) {
        const grandparentChecked = grandparent.details.every(item =>
          newChecked.includes(item.id)
        );
        if (grandparentChecked && newChecked.indexOf(grandparent.id) === -1) {
          newChecked.push(grandparent.id);
        }
      }
    } else {
      newChecked.splice(currentIndex, 1);
      subItems.forEach(item => {
        const itemIndex = newChecked.indexOf(item.id);
        if (itemIndex !== -1) {
          newChecked.splice(itemIndex, 1);
        }
      });

      if (parent) {
        const parentIndex = newChecked.indexOf(parent.id);
        if (parentIndex !== -1) {
          newChecked.splice(parentIndex, 1);
        }
      }

      if (grandparent) {
        const grandparentIndex = newChecked.indexOf(grandparent.id);
        if (grandparentIndex !== -1) {
          newChecked.splice(grandparentIndex, 1);
        }
      }
    }

    setChecked(newChecked);
  };

  const handleParentCheck = (parentIndex) => {
    const parent = services[parentIndex];
    const newChecked = [...checked];
    const isParentChecked = newChecked.includes(parent.id);

    if (isParentChecked) {
      newChecked.splice(newChecked.indexOf(parent.id), 1);
      parent.details.forEach((child) => {
        const childIndex = newChecked.indexOf(child.id);
        if (childIndex !== -1) {
          newChecked.splice(childIndex, 1);
        }
        child.details.forEach((grandchild) => {
          const grandchildIndex = newChecked.indexOf(grandchild.id);
          if (grandchildIndex !== -1) {
            newChecked.splice(grandchildIndex, 1);
          }
        });
      });
    } else {
      newChecked.push(parent.id);
      parent.details.forEach((child) => {
        if (!newChecked.includes(child.id)) {
          newChecked.push(child.id);
        }
        child.details.forEach((grandchild) => {
          if (!newChecked.includes(grandchild.id)) {
            newChecked.push(grandchild.id);
          }
        });
      });
    }

    setChecked(newChecked);
  };

  const handleExiting = () => {
    navigate('/home/services');
  };

  return (
    <Box sx={{ pl: 3, py: 4, backgroundColor: '#ffffff', width: '90%', maxWidth: '800px', borderRadius: '15px', mt: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <LinedHeader text="Add New Services" />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, pl: 4, position: 'relative' }}>
        <SearchInput />
        <IconButton sx={{ position: 'absolute', right: '114px', top: '0' }} onClick={handleExiting}>
          <HighlightOffIcon color='primary' sx={{ fontSize: '50px' }} />
        </IconButton>
        <SideButton dir={'right'} top={'10%'} width={'110px'}>
          <Typography sx={{ textTransform: 'capitalize' }}>Link</Typography>
        </SideButton>
      </Box>

      <List sx={{ pl: 5 }}>
        {services.map((parent, index) => (
          <div key={index}>
            <ListItem button onClick={() => handleToggle(index, 0)}>
              {open[index] ? <ExpandLess /> : <ExpandMore />}
              <ListItemText primary={parent.name} />
            </ListItem>
            <Collapse in={open[index]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ bgcolor: '#f5f9ff', borderBottom: '5px solid white' }}>
                <ListItem>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(parent.id) !== -1}
                      tabIndex={-1}
                      disableRipple
                      onClick={(e) => {
                        e.stopPropagation();
                        handleParentCheck(index);
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={parent.name} />
                </ListItem>
                {parent.details.map((child, subIndex) => (
                  <div key={subIndex}>
                    <ListItem button sx={{ pl: 4, bgcolor: '#F5F9FF' }}>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={checked.indexOf(child.id) !== -1}
                          tabIndex={-1}
                          disableRipple
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCheck(child.id, child.details, parent);
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText primary={child.name} />
                    </ListItem>
                    <Collapse in={open[`${index}-${subIndex}`]} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding className={classes.theParents}>
                        {child.details.map((grandchild, grandIndex) => (
                          <ListItem key={grandIndex} sx={{ pl: 8, bgcolor: '#EBF3FF', width: '85%', margin: '0 auto', borderBottom: '5px solid #f5f9ff' }}>
                            <ListItemIcon>
                              <Checkbox
                                edge="start"
                                checked={checked.indexOf(grandchild.id) !== -1}
                                tabIndex={-1}
                                disableRipple
                                onClick={() => handleCheck(grandchild.id, [], child, parent)}
                              />
                            </ListItemIcon>
                            <ListItemText primary={grandchild.name} />
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
