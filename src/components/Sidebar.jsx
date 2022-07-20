import React from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import { Home, Article, Settings, Group, Storefront, Person, AccountBox, ModeNight } from '@mui/icons-material';

const Sidebar = () => {
    return (
        <>
            <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
                <Box position="fixed">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#home">
                                <ListItemIcon>
                                    <Home />
                                </ListItemIcon>
                                <ListItemText primary="Homepage" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#pages">
                                <ListItemIcon>
                                    <Article />
                                </ListItemIcon>
                                <ListItemText primary="Pages" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#group">
                                <ListItemIcon>
                                    <Group />
                                </ListItemIcon>
                                <ListItemText primary="Groups" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#group">
                                <ListItemIcon>
                                    <Storefront />
                                </ListItemIcon>
                                <ListItemText primary="Marketplace" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#group">
                                <ListItemIcon>
                                    <Person />
                                </ListItemIcon>
                                <ListItemText primary="Person" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#group">
                                <ListItemIcon>
                                    <Settings />
                                </ListItemIcon>
                                <ListItemText primary="Settings" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#group">
                                <ListItemIcon>
                                    <AccountBox />
                                </ListItemIcon>
                                <ListItemText primary="Profile" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    {/* <List>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#">
                                <ListItemIcon>
                                    <ModeNight />
                                </ListItemIcon>
                                <Switch onChange={e => setMode(mode === "light" ? "dark" : "light" )} />
                            </ListItemButton>
                        </ListItem>
                    </List> */}
                </Box>
            </Box>
        </>
    )
}

export default Sidebar