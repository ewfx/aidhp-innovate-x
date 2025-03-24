import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AppDialog = ({ open, onClose, title, content, size="md", actions }) => {
  const getButtonStyle = (type) => {
    switch (type) {
      case 'primary':
        return { backgroundColor: '#4CAF50', color: '#fff' };
      case 'secondary':
        return { backgroundColor: '#757575', color: '#fff' };
      case 'danger':
        return { backgroundColor: '#d32f2f', color: '#fff' };
      case 'info':
        return { backgroundColor: '#0288d1', color: '#fff' };
      default:
        return { backgroundColor: '#e0e0e0', color: '#000' };
    }
  };
  return (
    <Dialog open={open} onClose={(event, reason) => {
      if (reason !== 'backdropClick') { // Prevent closing on backdrop click
        onClose();
      }
    }} maxWidth={size} fullWidth>
      <DialogTitle sx={{ backgroundColor: '#4CAF50', color: 'white' }}><Typography>{title}</Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "white"
          }}
        >
          <CloseIcon />
        </IconButton></DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        {actions.map((action, index) => (
          <Button key={index} onClick={() => {
            if(action.param)
              action.onClick(action.param)
            else
              action.onClick()
         }}  style={{
          ...getButtonStyle(action.type), // Apply dynamic styles based on type
          padding: '10px 20px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}>
            {action.label}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
};

export default AppDialog;
// maxWidth controls the size (e.g., 'sm', 'md', 'lg', 'xl')
