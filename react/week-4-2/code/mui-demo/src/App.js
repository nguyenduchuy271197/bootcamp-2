import { useState } from "react";

// Import MUI stuff
import "@fontsource/roboto"; // Loading Roboto font. MUI was designed with this font in mind.
import {
  Card,
  CardHeader,
  Switch,
  CardContent,
  Box,
  Container,
  Typography,
  FormGroup,
  FormControlLabel,
  CssBaseline,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Define theme settings
const light = {
  palette: {
    mode: "light",
  },
};

const dark = {
  palette: {
    mode: "dark",
  },
};

const App = () => {
  // The light theme is used by default
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // This function is triggered when the Switch component is toggled
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <CssBaseline />
      <Container>
        <div className="App">
          <Box component="div" p={5}></Box>
          <Card>
            <CardHeader
              action={
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch checked={isDarkTheme} onChange={changeTheme} />
                    }
                    label="Dark Theme"
                  />
                </FormGroup>
              }
            />
            <CardContent>
              <Typography variant="h3" component="h3">
                Kindacode.com
              </Typography>
              <Typography variant="body1">
                Dark Mode is {isDarkTheme ? "On" : "Off"}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default App;
