
import * as React from "react";

import Layout from "./layout";
import { Box, Container, CssBaseline } from "@mui/material";


const App: React.FC = () => {
  
  return (
    <>
    <CssBaseline />
      <Container disableGutters maxWidth={false} style={{backgroundColor: "#150E60"}}>
        <nav>carine</nav>
        <Layout/>
      </Container>
    </>
    // <div className="app">
    //     <main className="content">
    //         <Layout/>
    //     </main>
    // </div>
  );
}

export default App;

