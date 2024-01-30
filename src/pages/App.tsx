import * as React from "react";

import Layout from "./layout";
import {
  Box,
  Container,
  CssBaseline,
  Theme,
  ThemeProvider,
  styled,
} from "@mui/material";
import  {useMode}  from "../theme/theme";
import Navbar from "../global/Navbar";

const App: React.FC = () => {
  const [theme] = useMode();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        
        maxWidth={false}
        style={{ backgroundColor: "#150E60" }}
      >
        <Navbar />
        <Layout />
      </Container>
    </ThemeProvider>
  );
};
export default App;
