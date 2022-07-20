import React from 'react';
import { AppBar, styled, Toolbar, Typography, Box, InputBase, Avatar, Menu, MenuItem, Switch } from '@mui/material'
import {Code, ModeNight} from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "15px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  }
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  }
}));
const Navbar = ({setMode, mode}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position='sticky'>
        <StyledToolbar>
          <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>D Young</Typography>
          <Code sx={{ display: { xs: "block", sm: "none" } }} />
          <Search><InputBase placeholder='search...' /></Search>
          <Icons>
            <Badge>
            {/* <ModeNight /> */}
            <Switch defaultChecked={true} color="default" onChange={e => setMode(mode === "dark" ? "light" : "dark")} />
            </Badge>

            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
            <Badge badgeContent={2} color="error">
              <Notifications />
            </Badge>
            <Avatar sx={{ width: 25, height: 25 }} alt="Travis Howard" src="http://randomuser.me/api/portraits/men/11.jpg" onClick={e => setOpen(true)} />
          </Icons>
          <UserBox onClick={e => setOpen(true)}>
            <Avatar sx={{ width: 25, height: 25 }} alt="Travis Howard" src="http://randomuser.me/api/portraits/men/11.jpg" />
            <Typography variant='span'>John</Typography>
          </UserBox>
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClick={e => setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
          <Badge>
            {/* <ModeNight /> */}
            <Switch defaultChecked={true} color="default" onChange={e => setMode(mode === "dark" ? "light" : "dark")} />
            </Badge>
        </Menu>
      </AppBar>
    </>
  )
}

export default Navbar