import React from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./Theme";
import Nav from "./Nav";

const ThemeProvider = () => {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Nav />
      </MuiThemeProvider>
    </div>
  );
};

export default ThemeProvider;
