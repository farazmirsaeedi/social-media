import { useState } from "react";
import Navbar from "./Components/Navbar";
import { Box, Stack, createTheme, ThemeProvider } from "@mui/material";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Add from "./Components/Add";
import Rightbar from "./Components/Rightbar";

function App() {
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-evenly">
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
