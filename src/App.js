import React from 'react';
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import { Box, Container, createTheme, Stack, ThemeProvider } from '@mui/material';
import Add from './Add';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState("light")
  const darkTheme = createTheme ({
    palette:{
      mode: mode
    }
  })

  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        {/* Navbar */}
        <Navbar setMode={setMode} mode={mode} />
        <Stack direction="row" spacing={2} justifyContent='space-evenly'>
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <Add/>
      </Box>
    </ThemeProvider>

    </>
  );
}

export default App;
