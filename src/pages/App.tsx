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
import { useMode } from "./theme";

const App: React.FC = () => {
  const [theme] = useMode();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        disableGutters
        maxWidth={false}
        style={{ backgroundColor: "#150E60" }}
      >
        <nav>carine</nav>
        <Layout />
      </Container>
    </ThemeProvider>
  );
};
export default App;
