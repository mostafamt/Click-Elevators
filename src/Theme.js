import { createTheme } from "@mui/material/styles";
import { green, purple, orange } from "@mui/material/colors";

const theme = createTheme({
  status: {
    danger: orange[500],
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: "Noto Kufi Arabic",
  },
});

export default theme;
