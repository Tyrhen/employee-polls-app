import { useState } from "react";
import { MantineProvider, ColorSchemeProvider, Header } from "@mantine/core";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DisplayModeButton from "./components/DisplayMode";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Navigation from "./components/Navigation";
import { fetchPolls } from "./app/reducers/pollReducer";
import { fetchUsers } from "./app/reducers/userReducer";
import { useDispatch } from "react-redux";
import PollDetail from "./components/PollDetail";
import Leaderboard from "./pages/Leaderboard";

export default function App() {
  const dispatch = useDispatch();
  dispatch(fetchPolls());
  dispatch(fetchUsers());

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
        <Header height={50}>
          <Navigation />
          <DisplayModeButton />
        </Header>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/poll/:id" element={<PollDetail />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Route>
        </Routes>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
