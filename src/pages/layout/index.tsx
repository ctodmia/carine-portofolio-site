import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Layout: React.FC = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Box sx={{ height: "87vh", width: "100%" }} >
            Left content

        </Box>
        <Box sx={{ bgcolor: "#cfe8fc", height: "87vh", width: "100%" }}> 
            Right Content
        </Box>
      </div>
    </>
  );
};

export default Layout;
