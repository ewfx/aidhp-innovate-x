import React, {  useEffect, useState, useContext  } from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import { blue, deepPurple, green } from "@mui/material/colors";
import { PROFILE_MENU_ITEMS } from "../../constants/MenuConstants";
import AppMenu from "../menu/AppMenu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import { AppContext } from "../../components/context/AppContext";

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: -15px;
  & > * {
    margin: 1px;
  }
`;
const IconWrapper = styled.div`
  margin-top: -20px;
`;
const StyledIconButton = styled(IconButton)`
  color: white;
  font-size: 32px;
`;

function ColoredAvatar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const { userInfo } = useContext(AppContext);
  const [username, setUsername] = useState("");

  const handleClose = (event) => {
    if (open) {
      setOpen(false);
      setAnchorEl(null);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  useEffect(() => {
    if (userInfo?.userName) {
      setUsername(userInfo.userName);
    }
  }, [userInfo?.userName]);

  // Function to get the initials from the username
  const getInitials = (name) => {
    if (!name) return "";

    const nameParts = name.split(" ");
    const firstInitial = nameParts[0]?.[0] || "";
    const lastInitial = nameParts[1]?.[0] || "";

    return `${firstInitial}${lastInitial}`.toUpperCase();
  };

  return (
    <AvatarContainer>
      <Avatar sx={{ bgcolor: green[500] }}>{getInitials(username)}</Avatar>
      <IconWrapper>
        <StyledIconButton onClick={handleClick} style={{ color: "#d71e28" }}>
          {" "}
          {/* Open menu on downward icon click */}
          <KeyboardArrowDownIcon />
        </StyledIconButton>
      </IconWrapper>
      <Menu anchorEl={anchorEl} open={open} onClose={(event, reason) => {
      if (reason == 'backdropClick') { // Prevent closing on backdrop click
        setOpen(false);
        setAnchorEl(null);
      }}}>
        <AppMenu
          menutype="profile-menu"
          menu={PROFILE_MENU_ITEMS}
          open={open}
          handleClose={handleClose}
        />
      </Menu>
    </AvatarContainer>
  );
}

export default ColoredAvatar;
