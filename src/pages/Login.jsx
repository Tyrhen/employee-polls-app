import { Button, Select, TextInput } from "@mantine/core";
import { useState } from "react";
import { useGetUsersQuery } from "../app/reducers/apiReducer";

export default function Login() {
  const { data: users, isLoading } = useGetUsersQuery();
  const [selectValue, setSelectValue] = useState(null);
  const [passwordValue, setPasswordValue] = useState(null);

  if (isLoading) return <div>Loading...</div>;

  const options = Object.keys(users).map((user) => ({
    label: users[user].name,
    value: users[user].id,
  }));

  const handlePasswordValidation = () => {
    if (passwordValue === users[selectValue].password) {
      alert("You are logged in!");
    } else {
      alert("Wrong password");
    }
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  return (
    <>
      <Select
        label="Username"
        value={selectValue}
        onChange={setSelectValue}
        data={options}
      />
      <TextInput
        placeholder="Your name"
        disabled={selectValue === null}
        onChange={handlePasswordChange}
        label="Password"
        withAsterisk
      />
      <Button
        variant="gradient"
        onClick={handlePasswordValidation}
        gradient={{ from: "indigo", to: "cyan" }}
      >
        Login
      </Button>
    </>
  );
}
