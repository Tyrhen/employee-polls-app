import { Button } from "@mantine/core";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const authUser = useSelector((state) => state.authUser.value);

  return (
    <>
      <Button variant="gradient" gradient={{ from: "indigo", to: "cyan" }}>
        Dashboard
      </Button>
      <h2> Welcome {authUser}!</h2>
    </>
  );
}
