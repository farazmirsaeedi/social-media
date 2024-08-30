import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Instagram, Mail, Notifications } from "@mui/icons-material";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const StyledToobar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));
  const Icons = styled(Box)(({ theme }) => ({
    // backgroundColor:"white",
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));
  const UserBox = styled(Box)(({ theme }) => ({
    // backgroundColor:"white",
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));
  return (
    <AppBar position="sticky">
      <StyledToobar>
        
        <Instagram sx={{ fontSize: {  md: "40px" } }} />
        <Search>
          <InputBase placeholder="Search..."></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            onClick={(e) => setOpen(true)}
            src="data:image/jpeg;base64,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"
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="data:image/jpeg;base64,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"
          />
          <Typography variant="span">faraz</Typography>
        </UserBox>
      </StyledToobar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
