import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "@mui/material";
import {
  Tooltip,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { AppContext } from "../context/AppContext";
import AppMenu from "../menu/AppMenu";
import { LEFT_MENU_ITEMS } from "../../constants/MenuConstants";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const openDrawerTheme = (theme) => ({
  width: 250,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});
const closeDrawerTheme = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: 250,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  zIndex: 0,
  ...(open && {
    ...openDrawerTheme(theme),
    "& .MuiDrawer-paper": openDrawerTheme(theme),
  }),
  ...(!open && {
    ...closeDrawerTheme(theme),
    "& .MuiDrawer-paper": closeDrawerTheme(theme),
  }),
}));
const LeftNav = () => {
  const { userrole } = useContext(AppContext);
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const handleDrawerOpenClose = () => {
    setOpen(!open);
  };
  const getLeftPanelOpenClose = () => {
    return (
      <Tooltip title={open ? "Collapse" : "Expand"} disableInteractive>
        <ListItem
          key="Toggle"
          onClick={handleDrawerOpenClose}
          sx={{ paddingRight: open ? 0 : "auto" }}
        >
          <ListItemButton
            sx={{ minHeight: 45, justifyContent: open ? "right" : "center" }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 0 : "auto",
                justifyContent: "center",
                color: "#d71e28",
              }}
            >
              {open ? (
                <KeyboardDoubleArrowLeftIcon fontSize="small" />
              ) : (
                <KeyboardDoubleArrowRightIcon fontSize="small" />
              )}
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </Tooltip>
    );
  };

  return (
    <Drawer variant="permanent" open={open} anchor="left">
      <DrawerHeader />
      <List sx={{ paddingTop: 0 }}>
        <AppMenu
          menu={[...LEFT_MENU_ITEMS]}
          menutype="left-menu"
          open={open}
          location={location}
        />
        {getLeftPanelOpenClose()};
      </List>
    </Drawer>
  );
};
export default LeftNav;
