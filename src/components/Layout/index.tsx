import { Grid } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";

const Layout: React.FC = ({ children }) => {
  return (
    <Grid container maxWidth="lg" mx="auto">
      <NavBar />
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Layout;
