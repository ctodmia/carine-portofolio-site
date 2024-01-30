import * as React from "react";
import "./index.scss";
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

/**, #fff 10%,#0ceadc 50%,#4dd4ff 94% 
 * 
 * 
linear-gradient(131deg,#150E60 94%,#0ceadc 50%, #fff 10%)
 * 
*/

const App: React.FC = () => {
  const [theme] = useMode();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container
        
        maxWidth={false}

      >
        <Layout />
      </Container>
    </ThemeProvider>
  );
};
export default App;
