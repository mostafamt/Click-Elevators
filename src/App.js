import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./Theme";

import { useTranslation, Trans } from "react-i18next";

import image from "./img/edwin-chen-bIghQbDIcY4-unsplash.jpg";

function App() {
  const { t } = useTranslation();
  return (
    <div>
      <ResponsiveAppBar />
      <Box sx={{ height: "100vh", width: "100vw" }}>
        <img src={image} alt="jdkls" height="100%" width="100%" />
      </Box>
    </div>
  );
}

export default App;
