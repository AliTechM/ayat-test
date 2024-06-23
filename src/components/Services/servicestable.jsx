import React, { useState, useContext } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Edit from '@mui/icons-material/Edit';
import LinkOffIcon from '@mui/icons-material/LinkOff';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import CustomButton from '../Common/CustomButton';
import classes from './servicestable.module.css';
import clsx from 'clsx';
import LinedHeader from '../Common/LinedHeader';
import { useNavigate } from "react-router-dom";
import EditModal from '../Util/Edit';
import DeleteDialog from '../Util/Deleting';
import { DataContext } from '../../Context/DataContext';

const NestedList = ({ data, level = 0, onEdit, onDelete }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <List component="div">
      {data.map((item, index) => (
        <Box key={index} className={clsx({
          [classes.parentClass]: level > 1,
          [classes.lv1]: level === 1,
          [classes.lv0]: level === 0
        })}
          sx={{ bgcolor: level === 1 ? '#f5f9ff' : 'inherit' }}
        >
          <ListItemButton
            onClick={() => handleClick(index)}
            sx={{ pl: 4 * level, display: 'flex', alignItems: 'center', position: 'relative' }}
          >
            {level === 0 && (
              <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
                {openIndex === index ? <ExpandLess sx={{ color: '#3b86ff', ml: '-6px', mr: '6px' }} /> : <ExpandMore sx={{ ml: '-6px', mr: '6px' }} />}
              </ListItemIcon>
            )}
            <ListItemText primary={item.name} />
            {(level === 0 || level === 1) && (
              <Box sx={{ position: 'absolute', right: 0, display: 'flex', gap: 1 }}>
                <IconButton size="small" onClick={() => onDelete(item)}>
                  <LinkOffIcon fontSize="small" sx={{ color: level === 1 ? '#c3daff' : '#a4afb7' }} />
                </IconButton>
                <IconButton size="small" onClick={() => onEdit(item)}>
                  <Edit fontSize="small" sx={{ color: level === 1 ? '#c3daff' : '#a4afb7' }} />
                </IconButton>
              </Box>
            )}
          </ListItemButton>
          <Collapse in={openIndex === index || level > 0} timeout="auto" unmountOnExit>
            {item.details && <NestedList data={item.details} level={level + 1} onEdit={onEdit} onDelete={onDelete} />}
          </Collapse>
        </Box>
      ))}
    </List>
  );
};

export default function ServicesTable() {
  const navigate = useNavigate();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const { rows, setRows } = useContext(DataContext);

  const openAddService = () => {
    navigate("/home/services/add");
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setEditModalOpen(true);
  };

  const handleSave = (editedItem) => {
    const updateItem = (items) => {
      return items.map((item) => {
        if (item.id === editedItem.id) {
          return { ...item, name: editedItem.name };
        } else if (item.details) {
          return { ...item, details: updateItem(item.details) };
        }
        return item;
      });
    };

    setRows(updateItem(rows));
    setSelectedItem(null);
    setEditModalOpen(false);
  };

  const handleDelete = (item) => {
    setSelectedItem(item);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    const deleteItem = (items, id) => {
      return items.filter((item) => item.id !== id).map((item) => ({
        ...item,
        details: item.details ? deleteItem(item.details, id) : item.details,
      }));
    };

    setRows(deleteItem(rows, selectedItem.id));
    setSelectedItem(null);
    setDeleteDialogOpen(false);
  };

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <LinedHeader text='Services' />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
        <CustomButton
          variant="contained"
          backgroundColor="#e7e9ef"
          buttonColor="#3b86ff"
          iconHoverColor="#3b86ff"
          hoverColor="#ffffff"
          visitedColor="#ffffff"
          icon={<InsertLinkIcon fontSize="small" />}
          iconPosition="middle"
          width="40px"
          height="30px"
          onClick={openAddService}
        />
      </Box>
      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" sx={{ backgroundColor: '#ebf3ff', borderRadius: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 45, px: 3 }}>
              <Typography color="primary" variant="body2">Lorem Ipsum</Typography>
              <Typography color="primary" variant="body2">Action</Typography>
            </Box>
          </ListSubheader>
        }
      >
        <NestedList data={rows} onEdit={handleEdit} onDelete={handleDelete} />
      </List>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 2,
        }}
      >
        <IconButton>
          <ExpandMore />
        </IconButton>
      </Box>
      <EditModal
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        item={selectedItem}
        onSave={handleSave}
      />
      <DeleteDialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={confirmDelete}
      />
    </Paper>
  );
}
