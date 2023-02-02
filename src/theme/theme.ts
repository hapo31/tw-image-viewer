import { createTheme, PaletteOptions } from "@mui/material";
import * as c from "@mui/material/colors";

declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    menu: {
      background: string;
      button: string;
      active: string;
    };
    backgroundColor: string;
    overlayBackgroundColor: string;
    button: {
      primary: string;
      danger: string;
      secondary: string;
    };

    textColor: {
      h1: string;
      h2: string;
      link: string;
      body: string;
    };
  }

  interface Palette extends PaletteOptions {}
}

declare module "@emotion/react" {
  export interface Theme {
    palette: PaletteOptions;
  }
}

const appTheme = createTheme({
  palette: {
    menu: {
      background: c.blueGrey[900],
      button: c.blueGrey[500],
      active: c.lightBlue["A700"],
    },
    backgroundColor: c.lightBlue[900],
    overlayBackgroundColor: c.lightBlue[900],
    button: {
      primary: c.lightBlue[900],
      danger: c.red[700],
      secondary: c.blueGrey[50],
    },
    textColor: {
      h1: c.grey[900],
      h2: c.grey[900],
      link: c.lightBlue[900],
      body: c.grey[900],
    },
  },
});

export default appTheme;
