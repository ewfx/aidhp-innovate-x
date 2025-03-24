import {Button} from "@mui/material";

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

export const createButton = (text, onClick, type="primary",width="fullWidth") => (
    <Button variant="contained" onClick={onClick} style={{
      ...getButtonStyle(type), // Apply dynamic styles based on type
      padding: '10px 20px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    }} width>
      {text}
    </Button>
  );