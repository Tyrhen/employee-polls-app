import { useState } from "react";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import Login from "./pages/Login";
import DisplayModeButton from "./components/DisplayMode";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import LogoutButton from "./components/Logout";
import Dashboard from "./pages/Dashboard";

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
        <LogoutButton />

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
