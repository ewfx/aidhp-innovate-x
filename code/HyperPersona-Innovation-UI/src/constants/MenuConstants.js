import HomeIcon from "@mui/icons-material/Home";
import SettingIcon from "@mui/icons-material/Settings";
import AboutUsIcon from "@mui/icons-material/SupervisedUserCircleSharp";
import HelpIcon from "@mui/icons-material/Help";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import PersonIcon from "@mui/icons-material/Person";
import InboxIcon from "@mui/icons-material/Inbox";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import BusinessIcon from "@mui/icons-material/Business";
import LogoutIcon from "@mui/icons-material/Logout";
import AddTaskIcon from '@mui/icons-material/AddTask';
import {URL_LOGOUT} from "../constants/ApiURLConstants";
import { RiAdminFill } from "react-icons/ri";

export const LEFT_MENU_ITEMS = [
  {
    name: "Home",
    route: "/hyperpersonalization/home",
    role: [],
    icon: <HomeIcon fontSize="large" />,
  },
  {
    name: "Recommendation",
    route: "/hyperpersonalization/recommendation",
    role: [],
    icon: <ThumbUpIcon fontSize="large" />,
  },

  {
    name: "AdminHome",
    route: "/hyperpersonalization/adminhome",
    role: ["superadmin", "admin"],
    icon: <RiAdminFill fontSize="large" />,
  },

  {
    name: "About Us",
    route: "/hyperpersonalization/aboutus",
    role: [],
    icon: <AboutUsIcon fontSize="large" />,
  },
  {
    name: "Help & Support",
    route: "/hyperpersonalization/support",
    role: [],
    icon: <HelpIcon fontSize="large" />,
  },
];
export const PROFILE_MENU_ITEMS = [
  {
    name: "Profile",
    route: "",
    icon: <PersonIcon fontSize="small" />,
  },
  {
    name: "My Preferences",
    route: "",
    icon: <SettingIcon fontSize="small" />,
  },

  {
    name: "Logout",
    route: URL_LOGOUT,
    icon: <LogoutIcon fontSize="small" />,
  },
];
