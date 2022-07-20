import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <>
      <Box flex={2} padding={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed" width={300} mt={2} mb={2}>
          <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
          <AvatarGroup max={7}>
            <Avatar alt="Remy Sharp" src="http://randomuser.me/api/portraits/men/1.jpg" />
            <Avatar alt="Travis Howard" src="http://randomuser.me/api/portraits/women/2.jpg" />
            <Avatar alt="Cindy Baker" src="http://randomuser.me/api/portraits/men/4.jpg" />
            <Avatar alt="Agnes Walker" src="http://randomuser.me/api/portraits/women/6.jpg" />
            <Avatar alt="Trevor Henderson" src="http://randomuser.me/api/portraits/men/7.jpg" />
            <Avatar alt="Agnes Walker" src="http://randomuser.me/api/portraits/wommen/10.jpg" />
            <Avatar alt="Trevor Henderson" src="http://randomuser.me/api/portraits/men/8.jpg" />
            <Avatar alt="Agnes Walker" src="http://randomuser.me/api/portraits/women/9.jpg" />
            <Avatar alt="Trevor Henderson" src="http://randomuser.me/api/portraits/men/11.jpg" />
          </AvatarGroup>
          <Typography variant="h6" fontWeight={100}>Latest Photos</Typography>
          <ImageList cols={3} rowHeight={100} gap={5}>
            <ImageListItem>
              <img src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e' alt="" />
            </ImageListItem>
            <ImageListItem>
              <img src='https://images.unsplash.com/photo-1551782450-a2132b4ba21d' alt="" />
            </ImageListItem>
            <ImageListItem>
              <img src='https://images.unsplash.com/photo-1522770179533-24471fcdba45' alt="" />
            </ImageListItem>
            <ImageListItem>
              <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c" alt="" />
            </ImageListItem>
          </ImageList>
          <Typography variant="h6" fontWeight={100}>Latest Conversations</Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="http://randomuser.me/api/portraits/women/10.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="http://randomuser.me/api/portraits/women/11.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="http://randomuser.me/api/portraits/men/15.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
        </Box>
      </Box>
    </>
  )
}

export default Rightbar