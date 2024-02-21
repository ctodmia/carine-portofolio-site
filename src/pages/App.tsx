import * as React from "react";
import "./index.scss";
import Layout from "./layout";
import {
  Container,
  CssBaseline,
  ThemeProvider
} from "@mui/material";
import  {ColorModeContext, useMode}  from "../theme/theme";
import Navbar from "../global/Navbar";
import GlobalStyle from "../globalStyles";


/**, #fff 10%,#0ceadc 50%,#4dd4ff 94% 
 * 
 * 
linear-gradient(131deg,#150E60 94%,#0ceadc 50%, #fff 10%)
 * 
*/

const App: React.FC = () => {
  const [theme] = useMode();

  return (
    // <ColorModeContext.Provider value={theme}>
    //   <ThemeProvider theme={theme}>
        // <CssBaseline />,
        <>
          {/* <CssBaseline  /> */}
          <GlobalStyle />
          <Navbar />
    
          <Layout />
         </>
        // {/* </Container> */}
      // {/* </ThemeProvider>
    // </ColorModeContext.Provider> */}
  );
};
export default App;
