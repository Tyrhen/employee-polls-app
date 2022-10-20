import { Button } from "@mantine/core";
import LogoutButton from "../components/Logout";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const authUser = useSelector((state) => state.authUser.value);

  return (
    <>
      <LogoutButton />
      <Button variant="gradient" gradient={{ from: "indigo", to: "cyan" }}>
        Dashboard
      </Button>
      <h2> Welcome {authUser}!</h2>
    </>
  );
}
