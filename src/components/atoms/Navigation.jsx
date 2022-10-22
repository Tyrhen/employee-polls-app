import { Button } from "@mantine/core";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../redux/reducers/authUserReducer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navigation = () => {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authUser.value);

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  if (authUser) {
    return (
      <>
        <Button
          onClick={handleLogout}
          color="red"
          variant="outline"
          style={{ float: "right", marginRight: "10px" }}
        >
          Logout
        </Button>
        <Link to={`/add`}>
          <Button
            color="blue"
            variant="outline"
            style={{ float: "right", marginRight: "10px" }}
          >
            Create Poll
          </Button>
        </Link>
        <Link to={`/Leaderboard`}>
          <Button
            color="blue"
            variant="outline"
            style={{ float: "right", marginRight: "10px" }}
          >
            Leaderboard
          </Button>
        </Link>
        <Link to={`/`}>
          <Button
            color="blue"
            variant="outline"
            style={{ float: "right", marginRight: "10px" }}
          >
            Home
          </Button>
        </Link>
      </>
    );
  }
  return null;
};

export default Navigation;
