import React, { useState, useRef, useEffect, useContext } from "react";
import {
  Grid,
  Dialog,
  Tabs,
  Tab,
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Avatar,
  Button,
  TextField,
  Tooltip,
  IconButton,
  Paper,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CameraIcon from "@mui/icons-material/Camera";
import { styled } from "@mui/material/styles";
import { AppContext } from "../context/AppContext";

export function GetPreferenceDialog() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedSociety, setSelectedSociety] = useState("society1");
  const [selectedRole, setSelectedRole] = useState("User");

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleSocietyChange = (event) => {
    setSelectedSociety(event.target.value);
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  return (
    <>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        aria-label="Preference Tabs"
      >
        <Tab label="Switch Role" />
        <Tab label="Switch Preferences" />
      </Tabs>

      <TabPanel value={selectedTab} index={0}>
        <Typography variant="h6">Switch Role</Typography>

        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="select-role-label">Select Role</InputLabel>
          <Select
            labelId="select-role-label"
            id="select-role"
            value={selectedRole}
            onChange={handleRoleChange}
            label="Select Role"
          >
            <MenuItem value="User">User</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Approver">Approver</MenuItem>
          </Select>
        </FormControl>
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        <Typography variant="h6">Switch Preferences</Typography>

        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="select-society-label">Select Preferences</InputLabel>
          <Select
            labelId="select-society-label"
            id="select-Preferences"
            value={selectedSociety}
            onChange={handleSocietyChange}
            label="Select Preferences"
          >
            <MenuItem value="society1">Lux bags (Default)</MenuItem>
            <MenuItem value="society2">Lux Apparels</MenuItem>
            <MenuItem value="society3">Travel</MenuItem>
            <MenuItem value="society4">Jewellery</MenuItem>
            <MenuItem value="society5">Shoes</MenuItem>
          </Select>
        </FormControl>
      </TabPanel>
      <div>TEST </div>
    </>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`} // Corrected: Wrapped template literals in {}
      aria-labelledby={`simple-tab-${index}`} // Corrected: Wrapped template literals in {}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export function ProfileMenuAction() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleProfileMenuClose = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <MenuItem onClick={handleProfileMenuClose}>Open Preferences</MenuItem>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <GetPreferenceDialog />
      </Dialog>
    </>
  );
}

const ProfileContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: theme.spacing(2),
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  width: "300px",
  margin: "0 auto",
  backgroundColor: "#f7f9fc",
}));

export function ProfileDetails() {
  const [showPassword, setShowPassword] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(
    "/placeholder.svg?height=100&width=100"
  );
  const fileInputRef = useRef(null);
  const { userInfo } = useContext(AppContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    state: "",
    country: "",
  });

  useEffect(() => {
    if (userInfo?.userDTO?.person) {
      const person = userInfo.userDTO.person;
      //call for address data
      setFormData({
        firstName: person.firstName,
        lastName: person.lastName,
        email: userInfo.userDTO.userEmail,
        city: person.city,
        state: person.state,
        country: person.country
      });
    }
  }, [userInfo]);
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAvatarClick = () => {
    if (isEditing) {
      fileInputRef.current?.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarUrl(url);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    setIsEditing(false);
  };

  return (
    <Paper
      elevation={0}
      sx={{ maxWidth: 600, mx: "auto", p: 3, position: "relative" }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          zIndex: 1,
        }}
      >
        <IconButton
          onClick={() => setIsEditing(!isEditing)}
          sx={{
            bgcolor: "primary.main",
            color: "white",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
          size="small"
        >
          <EditIcon />
        </IconButton>
      </Box>

      <Typography variant="h5" gutterBottom align="center" sx={{ mb: 3 }}>
        {isEditing ? "Edit Profile" : "Profile Details"}
      </Typography>

      <Box
        sx={{ position: "relative", width: "fit-content", mx: "auto", mb: 4 }}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          style={{ display: "none" }}
        />
        <Box
          sx={{
            position: "relative",
            cursor: isEditing ? "pointer" : "default",
            "&:hover": isEditing
              ? {
                  "& .upload-overlay": {
                    opacity: 1,
                  },
                }
              : {},
          }}
          onClick={handleAvatarClick}
        >
          <Avatar
            src={avatarUrl}
            sx={{
              width: 100,
              height: 100,
              border: "2px solid #fff",
              boxShadow: 1,
            }}
          />
          {isEditing && (
            <Box
              className="upload-overlay"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bgcolor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                opacity: 0,
                transition: "opacity 0.2s",
              }}
            >
              <CameraIcon sx={{ color: "white" }} />
            </Box>
          )}
        </Box>
      </Box>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              variant="outlined"
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              variant="outlined"
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Contact Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              variant="outlined"
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              variant="outlined"
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              variant="outlined"
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="State"
              name="state"
              value={formData.state}
              onChange={handleChange}
              variant="outlined"
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Zip Code"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              variant="outlined"
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              variant="outlined"
              disabled={!isEditing}
            />
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}
