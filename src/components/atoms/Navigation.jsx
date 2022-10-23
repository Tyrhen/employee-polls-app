import { ActionIcon, Grid } from "@mantine/core";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../redux/reducers/authUserReducer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IconStairs, IconHome, IconPlus, IconLogout } from "@tabler/icons";

const Navigation = () => {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authUser.value);

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  if (authUser) {
    return (
      <Grid>
        <Grid.Col span="auto">
          <ActionIcon component={Link} to="/" size="xl">
            <IconHome size={36} />
          </ActionIcon>
        </Grid.Col>
        <Grid.Col span="auto">
          <ActionIcon component={Link} to="/Leaderboard" size="xl">
            <IconStairs size={36} />
          </ActionIcon>
        </Grid.Col>
        <Grid.Col span="auto">
          <ActionIcon component={Link} to="/add" size="xl">
            <IconPlus size={36} />
          </ActionIcon>
        </Grid.Col>
        <Grid.Col span="auto">
          <ActionIcon size="xl" onClick={handleLogout} color="red">
            <IconLogout size={36} />
          </ActionIcon>
        </Grid.Col>
      </Grid>
    );
  }
  return null;
};

export default Navigation;
