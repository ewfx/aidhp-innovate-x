import React, { useState, useContext } from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { Link } from "react-router-dom";
import { GetPreferenceDialog } from "./ProfileMenuAction";
import { ProfileDetails } from "./ProfileMenuAction";
import AppDialog from "../dialog/AppDialog";
import {logout} from "../../services/AuthServices";
import { AppContext } from "../../components/context/AppContext";

export default function AppMenu(props) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState(false);
  const [dialogTitle, setDialogTitle] = useState(false);
  const [dialogSize, setDialogSize] = useState(false);
  const [buttonArr, setButtonArr] = useState([]);
  const { menu, open, handleClose } = props;
  const {setToken, setUserInfo } = useContext(AppContext);

  const handleOpenDialog = (title,content,size,actionArr) => {
    setDialogContent(content);
    setDialogTitle(title);
    setDialogSize(size);
    setButtonArr(actionArr);
    setDialogOpen(true);
    
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    handleClose();
  };

  const handleAction = (item) => {
    
    handleCloseDialog();
    if (item.name === "Profile") {
    } else if (item.name === "Logout") {
      logout(setToken,setUserInfo);
    }else if (item.name === "other") {
    }
  };
  const handleProfileMenuClose = (item) => {
    if (item.name === "Profile") {
      handleOpenDialog("Profile",<ProfileDetails/>,"lg",[
        { label: "Cancel", onClick: handleCloseDialog, type: "secondary" },
        { label: "Confirm", onClick: handleAction, type: "primary" ,param:item},
      ]);
    } else if (item.name === "Logout") {
      handleOpenDialog("Logout","Are you sure to logout?","sm",[
        { label: "Cancel", onClick: handleCloseDialog, type: "secondary" },
        { label: "Confirm", onClick: handleAction, type: "primary" ,param:item},
      ]);
    }
    else if (item.name === "My Preferences") {
      handleOpenDialog("MyPreferences",
        <GetPreferenceDialog />
        ,"lg",[
        { label: "Cancel", onClick: handleCloseDialog, type: "secondary" },
        { label: "Confirm", onClick: handleAction, type: "primary" ,param:item},
      ]);

    

    }
   
    else if (item.name === "other") {
    }

  };

  const getProfileMenu = () => {
    return (
      <>
        {menu.map((item) => (
          <MenuItem key={item.name} onClick={() => {
            handleProfileMenuClose(item);
         }}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </MenuItem>
        ))}
      </>
    );
  };
  

  const getLeftMenu = () => {
    return (
      <>
        {menu.map((item) => (
          <ListItem
            key={item.name}
            component={Link}
            to={item.route}
            sx={{ px: 1, py: 1 }}
          >
            <ListItemButton
              selected={item.route === props.location.pathname}
              sx={{
                justifyContent: open ? "initial" : "center",
                "&.Mui-selected": {
                  borderLeft: "4px solid #fcc60b",
                  "& .MuiListItemIcon-root": {
                    color: "#d71e28",
                    position: "relative",
                    marginLeft: "-4px",
                    padding: "1px"
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {open ? (
                  item.icon
                ) : (
                  <Tooltip title={item.name} disableInteractive>
                    {item.icon}
                  </Tooltip>
                )}
              </ListItemIcon>
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  color: "#131313",
                  variant: "menu_text",
                }}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </>
    );
  };

  return (
    <>
      {props.menutype && props.menutype === "profile-menu"
        ? getProfileMenu()
        : props.menutype === "left-menu"
        ? getLeftMenu()
        : null}
      <AppDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        title={dialogTitle}
        content={dialogContent}
        size={dialogSize}
        actions={buttonArr}
      />
    </>
  );
}