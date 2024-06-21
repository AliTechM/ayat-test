// EditModal.js
import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Slide } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EditModal = ({ open, onClose, item, onSave }) => {
  const [editedItem, setEditedItem] = useState(item);

  useEffect(() => {
    setEditedItem(item);
  }, [item]);

  const handleChange = (e) => {
    setEditedItem({ ...editedItem, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(editedItem);
  };

  if (!editedItem) return null;

  return (
    <Dialog open={open} onClose={onClose} TransitionComponent={Transition} keepMounted  sx={{'& .MuiDialog-paper' :{width:'50%'}}}>
      <DialogTitle>Edit Services</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Name"
          type="text"
          fullWidth
          value={editedItem.name}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="success">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditModal;
