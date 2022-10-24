import { useState } from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  Header,
  Grid,
} from "@mantine/core";
import { useDispatch } from "react-redux";
import { fetchPolls } from "../redux/reducers/pollReducer";
import { fetchUsers } from "../redux/reducers/userReducer";
import Navigation from "../components/atoms/Navigation";
import { Routes, Route } from "react-router";
import ProtectedRoute from "../components/atoms/ProtectedRoute";
import Login from "../components/molecules/Login";
import PollDetail from "../components/molecules/PollDetail";
import Dashboard from "../components/molecules/Dashboard";
import Leaderboard from "../components/molecules/Leaderboard";
import DisplayModeButton from "../components/atoms/DisplayModeButton";
import PollCreation from "../components/molecules/PollCreation";
import { logOutUser } from "../redux/reducers/authUserReducer";
import NotFound from "../components/atoms/NotFound";

export default function App() {
  const dispatch = useDispatch();

  dispatch(fetchPolls());
  dispatch(fetchUsers());

  const [colorScheme, setColorScheme] = useState("dark");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const handleLogout = () => {
    dispatch(logOutUser());
  };

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
        <Header height={60}>
          <Grid
            justify="space-between"
            align="center"
            style={{ paddingTop: "5px" }}
          >
            <Grid.Col span="auto">
              <DisplayModeButton />
            </Grid.Col>
            <Grid.Col span="auto">
              <Navigation handleLogout={handleLogout} />
            </Grid.Col>
          </Grid>
        </Header>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/questions/:id" element={<PollDetail />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/add" element={<PollCreation />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
