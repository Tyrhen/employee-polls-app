import { useState } from "react";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DisplayModeButton from "./components/DisplayMode";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

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
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
