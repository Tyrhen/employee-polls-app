import { useState } from "react";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import Login from "./pages/Login";
import DisplayModeButton from "./components/DisplayMode";

export default function App() {
  const [colorScheme, setColorScheme] = useState("dark");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <DisplayModeButton />
        <Login />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
