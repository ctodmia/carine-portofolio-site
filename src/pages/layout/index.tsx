import * as React from "react";
import Box from "@mui/material/Box";
import Contact from "../../components/Contact";
import About from "../../components/About";
import { Grid, styled } from "@mui/material";
import { tokens } from "../../theme/theme";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import { usePage } from "../PageContext";
import Latest from "../../components/Latest";

const Layout: React.FC = () => {

  const colors = tokens;
  const { handleScroll } = usePage();

  const CustomBox = styled(Box)({
    gridColumn: "span 6"
  },{gridRow: "span 2"}, { backgroundColor: colors.primary[400]}, {height: "87vh", width: "50%"}, {overflow: "scroll" }) as typeof Box;
  
  return (
    // <>
    //   <div style={{ display: "flex" }}>
    //     <Box sx={{ height: "87vh", width: "100%" }} >
    //         Left content

    //     </Box>
    //     <Box sx={{ bgcolor: "#cfe8fc", height: "87vh", width: "100%" }}>
    //         <Contact />
    //         <About />
    //     </Box>
    //   </div>
    // </>

    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 1, md: 6 }}
        columns={{ xs: 6, sm: 6, md: 12 }}
      >
        <Grid item xs={1} sm={6} md={6}>
          <Hero/>
        </Grid>
        <Grid id="home" item xs={1} sm={6} md={6}>
          <div onScroll={(e) => handleScroll(e)} id="right-content" className="right-content" style={{backgroundColor: colors.primary[400], height:"87vh", width: "100%", overflow: "scroll"}}>
            <Latest />
            <About />
            <Projects />
            <Contact />

          </div>
   
        </Grid>

      </Grid>
    </Box>
  );
};

export default Layout;
