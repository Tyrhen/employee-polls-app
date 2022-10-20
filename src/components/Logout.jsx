import { Button } from "@mantine/core";
import { useDispatch } from "react-redux";
import { logOutUser } from "../app/reducers/authUserReducer";
import { useSelector } from "react-redux";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authUser.value);

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  if (authUser) {
    return (
      <Button
        onClick={handleLogout}
        color="red"
        variant="outline"
        style={{ float: "right" }}
      >
        Logout
      </Button>
    );
  }
  return null;
};

export default LogoutButton;
