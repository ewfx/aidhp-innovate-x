import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/ApiURLConstants";

export default function FullPageOverlay({ message, link, linkText }) {
  const [visible, setVisible] = useState(true); // Local state for visibility
  const navigate = useNavigate();
  if (!visible) return null; // Hide overlay when state is false

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
          textAlign: "center",
          minWidth: "300px",
        }}
      >
        <Typography variant="h6" sx={{ whiteSpace: "pre-line" }}>
            {message}
        </Typography>
        <Button onClick={() => navigate(`${"/hyperpersonalization"}${link}`)}
          variant="contained" 
          sx={{ mt: 2 }}>
          {linkText}
        </Button>
        <Button
          sx={{ marginTop: "10px", marginLeft: "10px" }}
          variant="outlined"
          color="secondary"
          onClick={() => setVisible(false)} // Hide overlay when clicked
        >
          Close
        </Button>
      </Box>
    </Box>
  );
}
