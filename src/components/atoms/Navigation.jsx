import { ActionIcon, Grid } from "@mantine/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IconStairs, IconHome, IconPlus, IconLogout } from "@tabler/icons";

const Navigation = ({ handleLogout }) => {
  const authUser = useSelector((state) => state.authUser.value);

  if (authUser) {
    return (
      <Grid>
        <Grid.Col span="auto">
          <ActionIcon data-testid="homeIcon" component={Link} to="/" size="xl">
            <IconHome size={36} />
          </ActionIcon>
        </Grid.Col>
        <Grid.Col span="auto">
          <ActionIcon
            data-testid="leaderboardIcon"
            component={Link}
            to="/leaderboard"
            size="xl"
          >
            <IconStairs size={36} />
          </ActionIcon>
        </Grid.Col>
        <Grid.Col span="auto">
          <ActionIcon
            data-testid="newPollIcon"
            component={Link}
            to="/add"
            size="xl"
          >
            <IconPlus size={36} />
          </ActionIcon>
        </Grid.Col>
        <Grid.Col span="auto">
          <ActionIcon
            data-testid="logoutIcon"
            size="xl"
            onClick={handleLogout}
            color="red"
          >
            <IconLogout size={36} />
          </ActionIcon>
        </Grid.Col>
      </Grid>
    );
  }
  return null;
};

export default Navigation;
