import AppBar from "./Components/AppBar";
import "./App.css"
import SidenavBar from "./Components/SidenavBar";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";

let theme = createTheme({
  palette: {
    primary: {
      main: '#FE0D0D',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});


function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar />
        <div className="page-layout" >
          <SidenavBar />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
