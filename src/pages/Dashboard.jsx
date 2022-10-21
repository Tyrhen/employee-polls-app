import { useSelector } from "react-redux";

export default function Dashboard() {
  const authUser = useSelector((state) => state.authUser.value);

  return (
    <>
      <h2> Welcome {authUser}!</h2>
    </>
  );
}
