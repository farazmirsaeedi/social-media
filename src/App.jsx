import { useState } from 'react'
import Navbar from './Components/Navbar'
import { Box, Stack } from '@mui/material';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Add from './Components/Add';
import Rightbar from './Components/Rightbar';

function App() {

  const [mode, setMode] = useState("dark");

  return (
    <Box>
    <Navbar/>
    <Stack direction="row" spacing={2} justifyContent="space-evenly">
      <Sidebar/>
      <Feed/>
      <Rightbar/>
    </Stack>
    <Add/>
  </Box>
  )
}

export default App
