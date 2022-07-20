import { Avatar, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material';
import { Add as AddIcon, EmojiEmotions, Image, VideoCameraBack, PersonAdd, DateRange } from '@mui/icons-material';
import React from 'react'
import { Box } from '@mui/system';
import { useState } from 'react';
import styled from '@emotion/styled';

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px"
});

const Add = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Tooltip onClick={e => setOpen(true)} title="Add post" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 50 } }}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={e => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
          <Typography variant='h6' cols="gray" textAlign="center">Create Post</Typography>
          <UserBox>
            <Avatar sx={{ width: 25, height: 25 }} alt="Travis Howard" src="http://randomuser.me/api/portraits/men/11.jpg" />
            <Typography fontWeight={500} variant="span">John Doe</Typography>
          </UserBox>
          <TextField sx={{ width: "100%" }}
            id="filled-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="filled"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{width: "100px"}}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}

export default Add